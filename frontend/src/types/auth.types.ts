import type { LoginType, SignupType } from "../features/auth/auth.type";

export type User = {
  id: string;
  role: "customer" | "seller";
  email: string;
  username: string;
};

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (input: LoginType) => Promise<User>;
  register: (input: SignupType) => Promise<User>;
  logout: () => Promise<void>;
  restoreAuth: () => Promise<void>;
};
