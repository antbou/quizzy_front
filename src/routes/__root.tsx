import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
