import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { MenuItem } from "./Navbar";
import React from "react";

export default function DesktopMenu({ items }: { items: MenuItem[] }) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center space-x-6">
        {items.map((item, index) =>
          item.placement === "start" ? (
            <React.Fragment key={index}>{item.linkButton}</React.Fragment>
          ) : null
        )}
      </div>
      <div className="flex gap-4 items-center">
        {items.map((item, index) =>
          item.placement === "end" ? (
            <React.Fragment key={index}>{item.linkButton}</React.Fragment>
          ) : null
        )}
        <DarkModeToggle />
      </div>
    </div>
  );
}
