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

fetchTodos.mockResolvedValue(mockTodos);

test('fetches and displays todos', async () => {
  const contextValue = { selectedTab: 'Mis tareas' };

  render(
    <AppContext.Provider value={contextValue}>
      <MyTodos />
    </AppContext.Provider>
  );

  await waitFor(() => {
    expect(screen.getByText('Tarea inicial')).toBeInTheDocument();
    expect(screen.getByText('Tarea secundaria')).toBeInTheDocument();
  });
});
