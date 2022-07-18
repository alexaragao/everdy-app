import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { ApiError } from "../common/api";
import { User } from "../common/entities/User";
import { AUTH_TOKEN_KEY } from "../constants";
import { AuthContext, type AuthContextProps } from "../context/AuthContext";
import { api } from "../services/api";
import { authService } from "../services/authService";

type AuthState = {
  isSignedOut: boolean;
  userToken: string | null;
  user: User | null;
};

type DispatchAction =
  | {
      type: "RESTORE_TOKEN";
      userToken: string;
    }
  | {
      type: "SIGN_IN";
      userToken: string;
      user: User;
    }
  | {
      type: "SIGN_OUT";
    };

export type AuthProviderProps = {
  onSignIn?: (data: { authToken: string, user: User }) => void;
  children: React.ReactNode;
};

function authReducer(prevState: AuthState, action: DispatchAction): AuthState {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.userToken,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignedOut: false,
        userToken: action.userToken,
        user: action.user,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignedOut: true,
        userToken: null,
        user: null,
      };
    default:
      return prevState;
  }
}

export const AuthProvider = ({ children, onSignIn }: AuthProviderProps) => {
  const [isLoadingData, setIsLoadingData] = React.useState(true);
  const [{ userToken, user }, dispatch] = React.useReducer(authReducer, {
    isSignedOut: false,
    userToken: null,
    user: null,
  });

  const authContext = React.useMemo<AuthContextProps>(
    () => ({
      signIn: async ({ authToken, user }) => {
        await AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
        api.headers.common["Authorization"] = `Bearer ${authToken}`;

        dispatch({ type: "SIGN_IN", userToken: authToken, user });
        onSignIn?.({ authToken, user });
      },
      signOut: async () => {
        await AsyncStorage.clear();
        delete api.headers.common["Authorization"];

        dispatch({ type: "SIGN_OUT" });
      },
      user: user,
      isSigned: !!user,
    }),
    [user]
  );

  React.useEffect(() => {
    async function loadDataAsync() {
      try {
        // Get local auth token
        const authToken = await AsyncStorage.getItem(AUTH_TOKEN_KEY);

        if (authToken) {
          // Validate local token
          const { data } = await authService.signInWithToken({ authToken });

          authContext.signIn(data);
        }
      } catch (error: any) {
        console.warn(error);

        // Check if error is instance of ApiError
        if (error instanceof ApiError) {
          // Remove token local storage if login failed (except for server errors)
          if (error.statusCode !== 500) {
            AsyncStorage.removeItem(AUTH_TOKEN_KEY);
          }
        }
      } finally {
        setIsLoadingData(false);
      }
    }

    loadDataAsync();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
