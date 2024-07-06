import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { Text, Box, Button, useDisclosure } from '@chakra-ui/react';
import ToDo from '../components/ToDo';
import TodoFormModal from '../components/TodoFormModal';
import { boxStyles, textStyles, buttonStyles } from '../styles/MyTodosStyles';
import { fetchTodos, saveTodo, deleteTodo } from '../services/todoService';

const MyTodos = () => {
  const { selectedTab } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoList, setTodoList] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });

  useEffect(() => {
    const fetchData = async () => {
      const todos = await fetchTodos();
      setTodoList(todos);
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveTodo = () => {
    const newTodoList = saveTodo(todoList, formData);
    setTodoList(newTodoList);
    setFormData({ name: '', description: '' });
    onClose();
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = deleteTodo(todoList, index);
    setTodoList(newTodoList);
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
