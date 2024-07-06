import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import {
  Text,
  Box,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import ToDo from '../components/ToDo';
import {
  boxStyles,
  textStyles,
  modalHeaderStyles,
  formControlStyles,
  buttonStyles,
  cancelButtonStyles,
  saveButtonStyles,
  descriptionInputStyles,
} from '../styles/MyTodosStyles';
import { inputStyles, labelStyles } from '../styles/PersonalDataStyles';

const MyTodos = () => {
  const { selectedTab } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const saveTodo = async () => {
    // state management here
  };

  if (selectedTab !== 'Mis tareas') return null;

  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis tareas</Text>
      <ToDo />
      <ToDo />
      <ToDo />
      <Button {...buttonStyles} onClick={onOpen}>
        Añadir tarea
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx='1.0625rem'>
          <ModalHeader {...modalHeaderStyles}>Añadir tarea</ModalHeader>
          <ModalCloseButton pt='25px' />
          <ModalBody>
            <FormControl {...formControlStyles}>
              <FormLabel {...labelStyles}>Nombre</FormLabel>
              <Input placeholder='Nombre' {...inputStyles} />
            </FormControl>
            <FormControl {...formControlStyles}>
              <FormLabel {...labelStyles}>Descripción</FormLabel>
              <Textarea placeholder='Descripción' {...descriptionInputStyles} />
            </FormControl>
          </ModalBody>

          <HStack justifyContent='space-between'>
            <Button variant='ghost' onClick={onClose} {...cancelButtonStyles}>
              Cancelar
            </Button>
            <Button onClick={saveTodo} {...saveButtonStyles}>
              Guardar
            </Button>
          </HStack>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MyTodos;
