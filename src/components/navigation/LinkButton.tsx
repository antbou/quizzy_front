import { Link } from "@tanstack/react-router";
import { Button } from "../ui/Button";
import { PropsWithChildren } from "react";

interface LinkButtonProps {
  to?: string;
  icon: JSX.Element;
  onClick?: () => void;
}

const LinkButton = ({
  to,
  icon,
  onClick,
  children,
}: PropsWithChildren<LinkButtonProps>) => (
  <Link to={to} activeProps={{ className: "text-primary" }}>
    <Button
      size="sm"
      className="flex gap-2 justify-start w-full"
      variant={"ghost"}
      onClick={onClick}
    >
      {icon}
      {children}
    </Button>
  </Link>
);

export default LinkButton;
