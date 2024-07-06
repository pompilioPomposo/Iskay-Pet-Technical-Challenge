import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import ToDo from '../components/ToDo';

// width: 104px;
// height: 27px;
// top: 150px;
// left: 15px;
// gap: 0px;
// opacity: 0px;

// font-family: Open Sans;
// font-size: 20px;
// font-weight: 700;
// line-height: 27.24px;
// text-align: left;

// background: #555555;

const MyTodos = () => {
  return (
    <Box
      background='#F4F4F4'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Text
        textAlign='left'
        pt='38px'
        pb='20px'
        ps='15px'
        fontSize='20px'
        color='#555555'
      >
        Mis tareas
      </Text>
      <ToDo />
      <ToDo />
      <ToDo />
    </Box>
  );
};

export default MyTodos;
