import React from 'react';
import { Text, Box, Button } from '@chakra-ui/react';
import ToDo from '../components/ToDo';
import { boxStyles, textStyles, buttonStyles } from '../styles/MyTodosStyles';

const MyTodos = () => {
  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis tareas</Text>
      <ToDo />
      <ToDo />
      <ToDo />
      <Button {...buttonStyles}>Añadir tarea</Button>
    </Box>
  );
};

export default MyTodos;
