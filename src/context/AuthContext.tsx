import * as React from 'react';

import { User } from '../common/entities/User';

type SignInData = {
  authToken: string;
  user: User;
}

export type AuthContextProps = {
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null;
  isSigned: boolean;
};

export const AuthContext = React.createContext({} as AuthContextProps);

export const useAuth = () => React.useContext(AuthContext);