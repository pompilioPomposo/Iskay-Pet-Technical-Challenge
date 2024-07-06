import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import {
  modalContentStyles,
  modalHeaderStyles,
  modalCloseStyles,
  formControlStyles,
  cancelButtonStyles,
  saveButtonStyles,
  descriptionInputStyles,
} from '../styles/MyTodosStyles';
import { inputStyles, labelStyles } from '../styles/PersonalDataStyles';

const TodoFormModal = ({
  isOpen,
  onClose,
  formData,
  handleInputChange,
  saveTodo,
}) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.description)
      newErrors.description = 'La descripción es obligatoria';
    return newErrors;
  };

  const handleSave = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    saveTodo();
    setErrors({});
  };

  return (
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
          <Button onClick={handleSave} {...saveButtonStyles}>
            Guardar
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default TodoFormModal;
