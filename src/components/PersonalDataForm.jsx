import React from 'react';
import { Card, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import {
  cardStyles,
  formControlStyles,
  inputStyles,
  labelStyles,
  buttonStyles,
} from '../styles/PersonalDataStyles';

const PersonalDataForm = () => {
  return (
    <Card {...cardStyles}>
      <FormControl isRequired {...formControlStyles}>
        <FormLabel {...labelStyles}>Nombre</FormLabel>
        <Input placeholder='Nombre' {...inputStyles} />
      </FormControl>
      <FormControl isRequired {...formControlStyles}>
        <FormLabel {...labelStyles}>Email</FormLabel>
        <Input placeholder='Email' {...inputStyles} />
      </FormControl>
      <FormControl isRequired {...formControlStyles}>
        <FormLabel {...labelStyles}>Teléfono</FormLabel>
        <Input placeholder='Teléfono' {...inputStyles} />
      </FormControl>
      <Button {...buttonStyles}>Guardar</Button>
    </Card>
  );
};

export default PersonalDataForm;
