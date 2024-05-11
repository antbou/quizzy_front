import { AuthStatus, useAuth } from "@/hooks/useAuth";
import React from "react";

export interface AuthContext {
  isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { status } = useAuth();
  const isAuthenticated = status === AuthStatus.Authenticated;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
