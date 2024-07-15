import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <div className="self-center cursor-pointer">{text}</div>
    </Link>
  );
};

export default NavLink;
