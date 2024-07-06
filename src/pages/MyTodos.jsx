import React, { useContext, useState } from 'react';
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
  FormErrorMessage,
} from '@chakra-ui/react';
import ToDo from '../components/ToDo';
import {
  boxStyles,
  textStyles,
  modalContentStyles,
  modalHeaderStyles,
  modalCloseStyles,
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
  const [todoList, setTodoList] = useState([
    { name: 'Dummy', description: 'Tarea inicial' },
    {
      name: 'Dummy 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna vehicula nisi aliquam pulvinar sit interdum eget ac. Rhoncus et nunc, aliquam, ac faucibus odio porta diam lorem. Dictum amet malesuada dictum tristique sollicitudin sed sagittis.',
    },
  ]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.description)
      newErrors.description = 'La descripción es obligatoria';
    return newErrors;
  };

  const saveTodo = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setTodoList([...todoList, formData]);
    setFormData({ name: '', description: '' });
    setErrors({});
    onClose();
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  if (selectedTab !== 'Mis tareas') return null;

  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis tareas</Text>
      {todoList.map((todo, index) => (
        <ToDo
          key={index}
          title={todo.name}
          description={todo.description}
          onDelete={() => deleteTodo(index)}
        />
      ))}
      <Button {...buttonStyles} onClick={onOpen}>
        Añadir tarea
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...modalContentStyles}>
          <ModalHeader {...modalHeaderStyles}>Añadir tarea</ModalHeader>
          <ModalCloseButton {...modalCloseStyles} />
          <ModalBody>
            <FormControl {...formControlStyles} isInvalid={errors.name}>
              <FormLabel {...labelStyles}>Nombre</FormLabel>
              <Input
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Nombre'
                {...inputStyles}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl {...formControlStyles} isInvalid={errors.description}>
              <FormLabel {...labelStyles}>Descripción</FormLabel>
              <Textarea
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                placeholder='Descripción'
                {...descriptionInputStyles}
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <HStack justifyContent='space-between'>
            <Button onClick={onClose} {...cancelButtonStyles}>
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
