import React from 'react';
import { Text, Card, Image, VStack, HStack } from '@chakra-ui/react';
import trashImage from '../icons/trash.jpg';

// fontFamily='Open Sans'

const ToDo = () => {
  return (
    <>
      <Card
        width='100%'
        height='93px'
        borderRadius='4px'
        boxShadow='0px 1px 4px 1px #0000001F'
        mb='16px'
      >
        <HStack justifyContent='space-between'>
          <VStack
            spacing='0px'
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='center'
          >
            <Text
              fontSize='16px'
              fontWeight='600'
              lineHeight='21.79px'
              textAlign='left'
              pt='17px'
              ps='15px'
              color='#333333'
            >
              Título tarea
            </Text>
            <Text
              width='308px'
              fontSize='12px'
              fontWeight='400'
              lineHeight='16.34px'
              textAlign='left'
              pt='3px'
              pb='17px'
              ps='15px'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
              ac elementum ultrices mauris. Cursus
            </Text>
          </VStack>
          <Image src={trashImage} pe='15px' />
        </HStack>
      </Card>
    </>
  );
};

export default ToDo;
