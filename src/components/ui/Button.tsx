import React from "react";

const Button = (props: { className: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
  return (
    <button
      className={`text-designColor/70 text-white text-sm font-semibold bg-gradient-to-tr from-black to-primaryColor rounded-md hover:bg-gradient-to-tr hover:from-primaryColor hover:to-black hover:text-blue-100 duration-300 hover:-translate-y-1 ${props.className}`}
    >
      {props.title ? props.title : "Clique aqui"}
    </button>
  );
};

export default Button;
