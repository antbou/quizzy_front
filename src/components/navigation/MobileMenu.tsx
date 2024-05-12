import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/Drawer";
import { MenuIcon } from "lucide-react";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { MenuItem } from "@/components/navigation/Navbar";
import { useState } from "react";
import React from "react";

export default function Mobile({ items }: { items: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false); // Close the drawer when an item is clicked
  };

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
            <React.Fragment key={index}>
              {React.cloneElement(item.linkButton, {
                onClick: handleItemClick,
              })}
            </React.Fragment>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
