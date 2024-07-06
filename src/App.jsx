import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from './AppContext';
import MyTodos from './pages/MyTodos';
import NavHeader from './components/NavHeader';

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <div className='App'>
          <NavHeader />
          <MyTodos />
        </div>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
