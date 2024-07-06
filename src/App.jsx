// import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MyTodos from './pages/MyTodos';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <header className='App-header'>
          <MyTodos />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
