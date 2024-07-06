import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Text, Box } from '@chakra-ui/react';
import { boxStyles, textStyles } from '../styles/MyTodosStyles';

const MyReturns = () => {
  const { selectedTab } = useContext(AppContext);

  if (selectedTab !== 'Mis devoluciones') return null;

  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis devoluciones</Text>
    </Box>
  );
};

export default MyReturns;
