import { Account } from "@/types";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useCallback } from "react";
import { api } from "@/lib/utils";

export enum AuthStatus {
  Unknown = 0,
  Authenticated = 1,
  Guest = 2,
}

export function useAuth() {
  const { account, setAccount } = useAccountStore();
  let status;
  switch (account) {
    case null:
      status = AuthStatus.Guest;
      break;
    case undefined:
      status = AuthStatus.Unknown;
      break;
    default:
      status = AuthStatus.Authenticated;
      break;
  }

  const authenticate = useCallback(() => {
    return api()
      .get("me", { throwHttpErrors: false })
      .json<Account>()
      .then(setAccount)
      .catch(() => setAccount(null));
  }, []);

  const login = useCallback((username: string, password: string) => {
    return api()
      .post("session", { json: { username, password } })
      .json<Account>()
      .then(setAccount);
  }, []);

  const logout = useCallback(() => {
    api()
      .delete("session")
      .then(() => setAccount(null));
  }, []);

  return {
    status,
    authenticate,
    login,
    logout,
  };
}
