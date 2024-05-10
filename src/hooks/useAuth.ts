import { Account } from "@/types";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useCallback } from "react";
import { api } from "@/lib/utils";

export enum AuthStatus {
  Guest,
  Unknown,
  Authenticated,
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
      .post("session", { json: { username, password }, throwHttpErrors: false })
      .json<Account>()
      .then(setAccount);
    // apiFetch<Account>("/login", { json: { username, password } }).then(
    //   setAccount
    // );
  }, []);

  const logout = useCallback(() => {
    // apiFetch<Account>("/logout", { method: "DELETE" }).then(setAccount);
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
