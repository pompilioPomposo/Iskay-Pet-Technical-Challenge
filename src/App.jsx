import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProvider } from './AppContext';
import MyTodos from './pages/MyTodos';
import MyData from './pages/MyData';
import MyReturns from './pages/MyReturns';
import MyComms from './pages/MyComms';
import MyBestFriends from './pages/MyBestFriends';
import NavHeader from './components/NavHeader';

const theme = extendTheme({
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Open Sans, sans-serif',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
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
