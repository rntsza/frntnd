import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h2 className="text-white text-6xl font-bold">{title}</h2>;
};

export default Title;
