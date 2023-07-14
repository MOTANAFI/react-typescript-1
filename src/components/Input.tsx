import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ value, handleChange }: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };
  
  return <input type="text" value={value} onChange={handleChange} />;
}

export default Input;
