import { useEffect, useState } from "react";
import type { AuthContextType, User } from "../../types/auth.types";
import type { LoginType, SignupType } from "../../features/auth/auth.type";
import {
  getMeApi,
  loginApi,
  logoutApi,
  signupApi,
} from "../../features/auth/authApi";
import { AuthContext } from "./AuthContext";

function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function login(input: LoginType) {
    const user = await loginApi(input);
    setUser(user);
  }

  async function register(input: SignupType) {
    const user = await signupApi(input);
    setUser(user);
  }

  async function logout() {
    await logoutApi();
    setUser(null);
  }

  async function restoreAuth() {
    try {
      const user = await getMeApi();
      setUser(user);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    let isMounted = true;

    async function restore() {
      try {
        const user = await getMeApi();

        if (isMounted) {
          setUser(user);
        }
      } catch {
        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    restore();

    return () => {
      isMounted = false;
    };
  }, []);

  const value: AuthContextType = {
    user: user,
    isLoading: isLoading,
    isAuthenticated: user ? true : false,
    login,
    register,
    logout,
    restoreAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
