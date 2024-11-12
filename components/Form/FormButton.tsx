// components/FormButton.tsx
import React from 'react';

interface FormButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

const FormButton: React.FC<FormButtonProps> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      {children}
    </button>
  );
};

export default FormButton;
