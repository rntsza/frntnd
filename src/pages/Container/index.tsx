import React, { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string | null;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-screen-2xl mx-auto py-10 ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
