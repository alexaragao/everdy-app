import { User } from "../common/entities/User";
import { api } from "./api";

type SignInWithTokenData = {
  authToken: string;
};

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  name: string;
  email: string;
  cpf: string;
  password: string;
};

type SignInResponse = {
  authToken: string;
  user: User;
};

class AuthService {
  async signIn({ email, password }: SignInData) {
    return await api.post<SignInResponse>("/accounts/login", {
      email,
      password,
    });
  }

  async signInWithToken({ authToken }: SignInWithTokenData) {
    return await api.post<SignInResponse>("/accounts/login/token", {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
  }

  static signUp({ cpf, email, name, password }: SignUpData) {
    return api.post<SignInResponse>("/accounts", {
      cpf,
      email,
      name,
      password,
    });
  }
}

export const authService = new AuthService();
