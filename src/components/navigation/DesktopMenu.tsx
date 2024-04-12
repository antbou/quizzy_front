import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { MenuItem } from "./Navbar";
import LinkButton from "./LinkButton";

export default function DesktopMenu({ items }: { items: MenuItem[] }) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center space-x-6">
        {items.map((item) =>
          item.placement === "start" ? (
            <LinkButton key={item.name} item={item} />
          ) : null
        )}
      </div>
      <div className="flex gap-4 items-center">
        {items.map((item) =>
          item.placement === "end" ? (
            <LinkButton key={item.name} item={item} />
          ) : null
        )}
        <DarkModeToggle />
      </div>
    </div>
  );
}
