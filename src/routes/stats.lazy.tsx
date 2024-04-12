import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/stats")({
  component: () => <div>Hello /stats!</div>,
});
