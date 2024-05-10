import React, { ReactNode } from "react";

interface InputProps {
  value?: string;
  onChange: (value: string) => void;
  id?: ReactNode | null;
  placeholder?: string;
  type?: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  id,
  placeholder,
  type,
  required,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value), id, type, placeholder;
  };

  return (
    <input
      // id={id}
      required={required}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
