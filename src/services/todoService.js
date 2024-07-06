export const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    const todos = data.slice(0, 3).map((todo) => ({
      name: todo.title,
      description: `User ID: ${todo.userId}, Completed: ${todo.completed}`,
    }));
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

export const saveTodo = (todoList, formData) => {
  return [...todoList, formData];
};

export const deleteTodo = (todoList, index) => {
  return todoList.filter((_, i) => i !== index);
};
