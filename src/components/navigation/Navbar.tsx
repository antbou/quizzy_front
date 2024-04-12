import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { Link } from "@tanstack/react-router";
import { BarChart3, LogIn, LucideIcon, Search, Users } from "lucide-react";

export type MenuItem = {
  name: string;
  icon: LucideIcon;
  link: string;
  placement: "start" | "end";
};

const menuItems: MenuItem[] = [
  { name: "Stats", icon: BarChart3, link: "/stats", placement: "start" },
  { name: "Users", icon: Users, link: "/users", placement: "start" },
  { name: "Search", icon: Search, link: "/search", placement: "end" },
  { name: "Login", icon: LogIn, link: "/login", placement: "end" },
];

console.log(menuItems);

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
