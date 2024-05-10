import React from "react";

interface CardHeaderProps {
  className: string;
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default CardHeader;
