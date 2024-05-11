import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    console.log("beforeLoad", context, location);
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
});
