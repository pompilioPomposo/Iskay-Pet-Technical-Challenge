import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { Text, Box, Button, useDisclosure } from '@chakra-ui/react';
import ToDo from '../components/ToDo';
import TodoFormModal from '../components/TodoFormModal';
import { boxStyles, textStyles, buttonStyles } from '../styles/MyTodosStyles';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveTodo = () => {
    setTodoList([...todoList, formData]);
    setFormData({ name: '', description: '' });
    onClose();
  };

  const handleDeleteTodo = (index) => {
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
          onDelete={() => handleDeleteTodo(index)}
        />
      ))}
      <Button {...buttonStyles} onClick={onOpen}>
        Añadir tarea
      </Button>

      <TodoFormModal
        isOpen={isOpen}
        onClose={onClose}
        formData={formData}
        handleInputChange={handleInputChange}
        saveTodo={handleSaveTodo}
      />
    </Box>
  );
};

export default MyTodos;
