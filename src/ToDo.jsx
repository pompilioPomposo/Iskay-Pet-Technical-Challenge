import React from 'react';
import { Text, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

const ToDo = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size='md'>Título tarea</Heading>
        </CardHeader>
        <CardBody>
          <Text pt='2' fontSize='sm'>
            lorem
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default ToDo;
