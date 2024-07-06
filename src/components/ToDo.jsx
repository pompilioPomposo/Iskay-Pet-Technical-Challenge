import React from 'react';
import { Text, Card, VStack, HStack } from '@chakra-ui/react';
import { ReactComponent as TrashImage } from '../icons/Trash.svg';
import {
  cardStyles,
  hStackStyles,
  vStackStyles,
  titleTextStyles,
  descriptionTextStyles,
  imageStyles,
} from '../styles/ToDoStyles';

const ToDo = () => {
  return (
    <>
      <Card {...cardStyles}>
        <HStack {...hStackStyles}>
          <VStack {...vStackStyles}>
            <Text {...titleTextStyles}>Título tarea</Text>
            <Text {...descriptionTextStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
              ac elementum ultrices mauris. Cursus
            </Text>
          </VStack>
          <TrashImage {...imageStyles} />
        </HStack>
      </Card>
    </>
  );
};

export default ToDo;
