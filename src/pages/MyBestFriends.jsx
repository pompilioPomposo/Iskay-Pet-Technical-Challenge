import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Text, Box } from '@chakra-ui/react';
import { boxStyles, textStyles } from '../styles/MyTodosStyles';

const MyBestFriends = () => {
  const { selectedTab } = useContext(AppContext);

  if (selectedTab !== 'Mis mejores amigos') return null;

  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis mejores amigos</Text>
    </Box>
  );
};

export default MyBestFriends;
