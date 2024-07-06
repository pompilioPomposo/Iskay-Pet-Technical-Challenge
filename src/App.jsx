import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from './AppContext';
import MyTodos from './pages/MyTodos';
import MyData from './pages/MyData';
import MyReturns from './pages/MyReturns';
import MyComms from './pages/MyComms';
import MyBestFriends from './pages/MyBestFriends';
import NavHeader from './components/NavHeader';

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <div className='App'>
          <NavHeader />
          <MyTodos />
          <MyData />
          <MyReturns />
          <MyComms />
          <MyBestFriends />
        </div>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
