import React, { useState } from 'react';
import {
  Card,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import {
  cardStyles,
  formControlStyles,
  inputStyles,
  labelStyles,
  buttonStyles,
} from '../styles/PersonalDataStyles';

const PersonalDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'El nombre solo debe contener letras';
    }
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[\w.-]+@[\w-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }
    if (!formData.phone) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^\d{8,}$/.test(formData.phone)) {
      newErrors.phone =
        'El teléfono debe contener al menos 8 dígitos y solo números';
    }
    return newErrors;
  };

  const handleSave = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Save data logic here
    setErrors({});
  };

  return (
    <Card {...cardStyles}>
      <FormControl isInvalid={errors.name} {...formControlStyles}>
        <FormLabel {...labelStyles}>Nombre</FormLabel>
        <Input
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Nombre'
          {...inputStyles}
        />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email} {...formControlStyles}>
        <FormLabel {...labelStyles}>Email</FormLabel>
        <Input
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Email'
          {...inputStyles}
        />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.phone} {...formControlStyles}>
        <FormLabel {...labelStyles}>Teléfono</FormLabel>
        <Input
          name='phone'
          value={formData.phone}
          onChange={handleInputChange}
          placeholder='Teléfono'
          {...inputStyles}
        />
        <FormErrorMessage>{errors.phone}</FormErrorMessage>
      </FormControl>
      <Button {...buttonStyles} onClick={handleSave}>
        Guardar
      </Button>
    </Card>
  );
};

export default PersonalDataForm;
