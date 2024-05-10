import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default Link;
