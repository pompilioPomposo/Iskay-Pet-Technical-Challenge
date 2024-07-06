import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Text, Box } from '@chakra-ui/react';
import { boxStyles, textStyles } from '../styles/MyTodosStyles';

const MyComms = () => {
  const { selectedTab } = useContext(AppContext);

  if (selectedTab !== 'Mis comunicaciones') return null;

  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis comunicaciones</Text>
    </Box>
  );
};

export default MyComms;
