import type { HTMLProps } from "react";

interface HeaderLinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  className?: string;
}

export const HeaderLink = ({href, className, ...props}: HeaderLinkProps) => {
  return (
    <a href={href} className={className ?? ""} {...props} />
  );
};
