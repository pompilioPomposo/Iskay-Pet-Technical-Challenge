import React from 'react';
import { Card, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import {
  cardStyles,
  formControlStyles,
  buttonStyles,
} from '../styles/PersonalDataStyles';

const PersonalDataForm = () => {
  return (
    <Card {...cardStyles}>
      <FormControl isRequired {...formControlStyles}>
        <FormLabel>Nombre</FormLabel>
        <Input placeholder='Nombre' />
      </FormControl>
      <FormControl isRequired {...formControlStyles}>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' />
      </FormControl>
      <FormControl isRequired {...formControlStyles}>
        <FormLabel>Teléfono</FormLabel>
        <Input placeholder='Teléfono' />
      </FormControl>
      <Button {...buttonStyles}>Guardar</Button>
    </Card>
  );
};

export default PersonalDataForm;
