import React from "react";

interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className="card-footer">{children}</div>;
};

export default CardFooter;
