import { api } from "@/lib/utils";
import { Account } from "@/types";
import { useCallback } from "react";
import { useAccountStore } from "./useAccountStore";

export function useUser() {
  const { setAccount } = useAccountStore();

  const create = useCallback((username: string, plainPassword: string) => {
    return api()
      .post("users", { json: { username, plainPassword } })
      .json<Account>()
      .then(setAccount);
  }, []);

  return { create };
}
