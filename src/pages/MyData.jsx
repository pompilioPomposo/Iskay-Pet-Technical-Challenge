import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Text, Box } from '@chakra-ui/react';
import { boxStyles, textStyles } from '../styles/MyTodosStyles';
import PersonalDataForm from '../components/PersonalDataForm';

const MyData = () => {
  const { selectedTab } = useContext(AppContext);

  if (selectedTab !== 'Mis datos') return null;

  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis datos</Text>
      <PersonalDataForm />
    </Box>
  );
};

export default MyData;
