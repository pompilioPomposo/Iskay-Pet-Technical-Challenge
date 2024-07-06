// import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MyTodos from './pages/MyTodos';
import NavHeader from './components/NavHeader';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <NavHeader />
        <MyTodos />
      </div>
    </ChakraProvider>
  );
}

export default App;
