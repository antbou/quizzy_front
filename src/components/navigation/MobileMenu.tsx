import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/Drawer";
import { Github, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { MenuItem } from "@/components/navigation/Navbar";
import LinkButton from "@/components/navigation/LinkButton";
import { useState } from "react";

export default function Mobile({ items }: { items: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer direction="right" onOpenChange={setIsOpen} open={isOpen}>
      <div className="flex justify-between items-center gap-4">
        <DarkModeToggle />
        <DrawerTrigger onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon size={36} />
        </DrawerTrigger>
      </div>
      <DrawerContent>
        <div className="flex flex-col space-y-3">
          {items.map((item, index) => (
            <LinkButton
              key={index}
              item={item}
              onClick={() => setIsOpen(false)}
            />
          ))}
          <hr />
          <Button
            size="sm"
            className="flex gap-2 justify-start items-center"
            variant={"ghost"}
            onClick={() =>
              window.open("https://github.com/antbou", "_blank", "noreferrer")
            }
          >
            <Github />
            Check my GitHub
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
