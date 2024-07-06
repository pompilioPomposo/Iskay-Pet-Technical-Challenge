export const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    if (!response.ok) {
      let errorMessage;
      if (response.status === 404) {
        errorMessage = 'Error 404: Not Found';
      } else if (response.status === 500) {
        errorMessage = 'Error 500: Internal Server Error';
      } else {
        errorMessage = `Error ${response.status}: ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }
    const data = await response.json();
    const todos = data.slice(0, 3).map((todo) => ({
      name: todo.title,
      description: `User ID: ${todo.userId}, Completed: ${todo.completed}`,
    }));
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return { error: error.message };
  }
};

export const saveTodo = (todoList, formData) => {
  return [...todoList, formData];
};

export const deleteTodo = (todoList, index) => {
  return todoList.filter((_, i) => i !== index);
};
