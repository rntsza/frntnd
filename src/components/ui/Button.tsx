import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  className: any;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  route: string;
}

const Button: React.FC<ButtonProps> = ({ className, title, route }) => {
  console.log(route)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      className={`text-designColor/70 text-white text-sm font-semibold bg-gradient-to-tr from-black to-primaryColor rounded-md hover:bg-gradient-to-tr hover:from-primaryColor hover:to-black hover:text-blue-100 duration-300 hover:-translate-y-1 ${className}`}
      onClick={handleClick}
    >
      {title ? title : "Clique aqui"}
    </button>
  );
};

export default Button;
