import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { Link } from "@tanstack/react-router";
import { BarChart3, LogIn, Search, Users } from "lucide-react";
import LinkButton from "./LinkButton";
import { useAuth, AuthStatus } from "@/hooks/useAuth";
import { useCallback, useMemo } from "react";

export type MenuItem = {
  name: string;
  linkButton: JSX.Element;
  placement: "start" | "end";
};

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const auth = useAuth();

  const getMenuItems = useCallback((authenticated: boolean) => {
    const items: MenuItem[] = [
      {
        name: "Stats",
        linkButton: (
          <LinkButton to="/stats" icon={<BarChart3 />}>
            Stats
          </LinkButton>
        ),
        placement: "start",
      },
      {
        name: "Users",
        linkButton: (
          <LinkButton to="/users" icon={<Users />}>
            Users
          </LinkButton>
        ),
        placement: "start",
      },
      {
        name: "Search",
        linkButton: (
          <LinkButton to="/search" icon={<Search />}>
            Search
          </LinkButton>
        ),
        placement: "end",
      },
    ];

    if (authenticated) {
      items.push({
        name: "Logout",
        linkButton: (
          <LinkButton
            to="/login"
            icon={<LogIn />}
            onClick={() => {
              auth.logout();
            }}
          >
            Logout
          </LinkButton>
        ),
        placement: "end",
      });
    } else {
      items.push({
        name: "Login",
        linkButton: (
          <LinkButton to="/login" icon={<LogIn />}>
            Login
          </LinkButton>
        ),
        placement: "end",
      });
    }

    return items;
  }, []);

  const menuItems = useMemo(
    () => getMenuItems(auth.status === AuthStatus.Authenticated),
    [auth.status, getMenuItems]
  );

  return (
    <header className="sticky z-10 shadow-md w-full">
      <nav className="container flex items-center py-4 gap-8 justify-between w-full">
        <Link
          to="/"
          activeProps={{ className: "text-primary" }}
          className="font-semibold text-xl"
        >
          Quizzy
        </Link>
        {isDesktop ? (
          <DesktopMenu items={menuItems} />
        ) : (
          <MobileMenu items={menuItems} />
        )}
      </nav>
    </header>
  );
}
