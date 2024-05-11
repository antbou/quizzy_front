import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuthContext } from "@/contexts/AuthContext";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface RouterContext {
  auth: AuthContext;
}

export const Route = createRootRouteWithContext<RouterContext>()({
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
