import { Link } from "@tanstack/react-router";
import { MenuItem } from "./Navbar";
import { Button } from "../ui/Button";

interface LinkButtonProps {
  item: MenuItem;
  onClick?: () => void;
}

const LinkButton = ({ item, onClick }: LinkButtonProps) => (
  <Link to={item.link} activeProps={{ className: "text-primary" }}>
    <Button
      size="sm"
      className="flex gap-2 justify-start w-full"
      variant={"ghost"}
      onClick={onClick}
    >
      <item.icon />
      {item.name}
    </Button>
  </Link>
);

export default LinkButton;
