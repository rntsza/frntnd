import React from "react";

interface CardDescriptionProps {
  description: string;
  className: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ description, className}) => {
  return <p className={className}>{description}</p>;
};

export default CardDescription;
