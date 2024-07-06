import React from 'react';
import { Text, Box, Button } from '@chakra-ui/react';
import ToDo from '../components/ToDo';

const MyTodos = () => {
  return (
    <Box
      background='#F4F4F4'
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='100vw'
      height='100vh'
      px='17px'
    >
      <Text
        pt='38px'
        pb='20px'
        fontSize='20px'
        fontWeight='700'
        lineHeight='27.24px'
        color='#555555'
        alignSelf='flex-start'
      >
        Mis tareas
      </Text>
      <ToDo />
      <ToDo />
      <ToDo />
      <Button
        width='100%'
        height='46px'
        borderRadius='5px'
        background='#639605'
        color='#FFFFFF'
        mt='42px'
        p='12px 141px 12px 141px'
        fontSize='16px'
        fontWeight='600'
        lineHeight='21.79px'
        gap='10px'
      >
        Añadir tarea
      </Button>
    </Box>
  );
};

export default MyTodos;
