import {createContext, useContext} from "react";
import {Token} from "src/models/token";
import {User} from "src/models/user";

export interface AuthContextType {
  user?: User;
  token?: string;
  setUser: (user: User) => Promise<void>;
  setToken: (token: Token) => Promise<void>;
  reset: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  setUser: async () => {},
  setToken: async () => {},
  reset: async () => {},
});

export const useAuthContext = (): AuthContextType => useContext(AuthContext);
