import React from 'react';
import { Text, Card, Image, VStack, HStack } from '@chakra-ui/react';
import trashImage from '../icons/trash.jpg';
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
          <Image src={trashImage} {...imageStyles} />
        </HStack>
      </Card>
    </>
  );
};

export default ToDo;
