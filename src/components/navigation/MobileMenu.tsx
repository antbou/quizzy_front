import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  BarChart3,
  Github,
  LogIn,
  MenuIcon,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";

export default function Mobile() {
  return (
    <Drawer direction="right">
      <div className="flex justify-between items-center gap-4">
        <DarkModeToggle />
        <DrawerTrigger>
          <MenuIcon size={36} />
        </DrawerTrigger>
      </div>
      <DrawerContent>
        <div className="flex flex-col space-y-3">
          <Button
            size="sm"
            className="flex gap-2 justify-start"
            variant={"ghost"}
          >
            <LogIn />
            Login
          </Button>
          <hr />
          <Button
            size="sm"
            className="flex gap-2 justify-start"
            variant={"ghost"}
          >
            <Search />
            Search
          </Button>

          <Button
            size="sm"
            className="flex gap-2 justify-start"
            variant={"ghost"}
          >
            <BarChart3 />
            Stats
          </Button>
          <Button
            size="sm"
            className="flex gap-2 justify-start"
            variant={"ghost"}
          >
            <Users />
            Users
          </Button>
          <hr />
          <Button
            size="sm"
            className="flex gap-2 justify-start items-center"
            variant={"ghost"}
          >
            <Github />
            Check my GitHub
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
