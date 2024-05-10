import React from "react";

interface CardTitleProps {
  title: string;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title, className }) => {
  return <h2 className={className}>{title}</h2>;
};

export default CardTitle;
