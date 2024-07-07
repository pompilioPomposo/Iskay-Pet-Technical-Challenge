import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyTodos from './pages/MyTodos';
import { AppContext } from './AppContext';
import { fetchTodos } from './services/todoService';

jest.mock('./services/todoService');

const mockTodos = [
  { name: 'Dummy', description: 'Tarea inicial' },
  { name: 'Dummy 2', description: 'Tarea secundaria' },
];

test('fetches and displays todos', async () => {
  fetchTodos.mockResolvedValue(mockTodos);
  const contextValue = { selectedTab: 'Mis tareas' };

  render(
    <AppContext.Provider value={contextValue}>
      <MyTodos />
    </AppContext.Provider>
  );

  await waitFor(() => {
    expect(screen.getByText('Mis tareas')).toBeInTheDocument();
  });

  await waitFor(() => {
    mockTodos.forEach((todo) => {
      expect(screen.getByText(todo.name)).toBeInTheDocument();
      expect(screen.getByText(todo.description)).toBeInTheDocument();
    });
  });
});

// test('handles fetch errors', async () => {
//   fetchTodos.mockRejectedValueOnce(new Error('API is down'));
//   const contextValue = { selectedTab: 'Mis tareas' };

//   render(
//     <AppContext.Provider value={contextValue}>
//       <MyTodos />
//     </AppContext.Provider>
//   );

//   await waitFor(() => {
//     expect(
//       screen.getByText('Error fetching todos: API is down')
//     ).toBeInTheDocument();
//   });
// });
