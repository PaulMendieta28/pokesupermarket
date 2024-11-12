'use client'
import React, { useState } from 'react';
import FormWrapper from '../Form/FormWrapper';
import FormInput from '../Form/FormInput';
import FormButton from '../Form/FormButton';

const CategoriesForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormInput
        label="Username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <FormButton type="submit">Submit</FormButton>
    </FormWrapper>
  );
};

export default CategoriesForm;
