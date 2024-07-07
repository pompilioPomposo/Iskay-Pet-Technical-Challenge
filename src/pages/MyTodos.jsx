import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { Text, Box, Button, useDisclosure, VStack } from '@chakra-ui/react';
import ToDo from '../components/ToDo';
import TodoFormModal from '../components/TodoFormModal';
import Pagination from '../components/Pagination';
import { boxStyles, textStyles, buttonStyles } from '../styles/MyTodosStyles';
import { fetchTodos, saveTodo, deleteTodo } from '../services/todoService';

const MyTodos = () => {
  const { selectedTab } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoList, setTodoList] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTodos();
      if (result?.error) {
        setError(result.error);
      } else {
        setTodoList(result);
        setError('');
      }
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

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todoList?.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (selectedTab !== 'Mis tareas') return null;

  return (
    <Box {...boxStyles}>
      <Text {...textStyles}>Mis tareas</Text>
      {error && <Text color='red'>{error}</Text>}
      {currentTodos?.map((todo, index) => (
        <ToDo
          key={index}
          title={todo.name}
          description={todo.description}
          onDelete={() => handleDeleteTodo(indexOfFirstTodo + index)}
        />
      ))}
      <VStack>
        {todoList?.length > todosPerPage && (
          <Pagination
            todosPerPage={todosPerPage}
            totalTodos={todoList.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
        <Button {...buttonStyles} onClick={onOpen}>
          Añadir tarea
        </Button>
      </VStack>
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
