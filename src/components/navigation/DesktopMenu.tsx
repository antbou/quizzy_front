import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { Button } from "@/components/ui/Button";
import { BarChart3, LogIn, Search, Users } from "lucide-react";

export default function DesktopMenu() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center space-x-6">
        <Button size="sm" className="flex items-center gap-2" variant={"ghost"}>
          <BarChart3 />
          Stats
        </Button>
        <Button size="sm" className="flex items-center gap-2" variant={"ghost"}>
          <Users />
          Users
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button size="sm" className="flex items-center gap-2" variant={"ghost"}>
          <Search />
          Search
        </Button>
        <Button size="sm" className="flex items-center gap-2">
          <LogIn />
          Login
        </Button>
        <DarkModeToggle />
      </div>
    </div>
  );
}
