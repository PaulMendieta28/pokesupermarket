// components/FormWrapper.tsx
import React from 'react';

interface FormWrapperProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent) => void;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
      {children}
    </form>
  );
};

export default FormWrapper;
