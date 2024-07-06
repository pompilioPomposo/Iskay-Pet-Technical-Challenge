import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ToDo from './ToDo';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <ToDo />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
