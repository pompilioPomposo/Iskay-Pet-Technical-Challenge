import React from 'react';
import { Text, Card, VStack, HStack, Box } from '@chakra-ui/react';
import { ReactComponent as TrashImage } from '../icons/Trash.svg';
import {
  cardStyles,
  hStackStyles,
  vStackStyles,
  titleTextStyles,
  descriptionTextStyles,
  imageStyles,
} from '../styles/ToDoStyles';

const ToDo = ({ title, description, onDelete }) => {
  return (
    <Card {...cardStyles}>
      <HStack {...hStackStyles}>
        <VStack {...vStackStyles}>
          <Text {...titleTextStyles}>{title}</Text>
          <Text {...descriptionTextStyles}>{description}</Text>
        </VStack>
        <Box {...imageStyles} onClick={onDelete}>
          <TrashImage />
        </Box>
      </HStack>
    </Card>
  );
};

export default ToDo;
