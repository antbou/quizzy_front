import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className="sticky z-10 shadow-md w-full">
      <nav className="container flex items-center py-4 gap-8 justify-between w-full">
        <a href="/" className="font-semibold text-xl">
          Quizz
        </a>
        {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      </nav>
    </header>
  );
}
