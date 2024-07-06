import React from 'react';
import {
  HStack,
  VStack,
  Image,
  Tabs,
  TabList,
  Tab,
  Box,
} from '@chakra-ui/react';
import logoImage from '../icons/Logo.png';
import menuImage from '../icons/Menu.png';
import searchImage from '../icons/Search.png';
import loginImage from '../icons/Login.png';
import cartImage from '../icons/Cart.png';

const NavHeader = () => {
  return (
    <Box position='relative' width='100%'>
      <Box
        position='absolute'
        top='62px'
        left='0'
        right='0'
        height='1px'
        backgroundColor='#DBDBDB'
        zIndex='1'
      />
      <VStack display='flex' width='100%' px='17px'>
        <HStack justifyContent='space-between' width='100%' height='62px'>
          <Image src={menuImage} />
          <Image src={searchImage} />
          <Image src={logoImage} />
          <Image src={loginImage} />
          <Image src={cartImage} />
        </HStack>
        <Box
          position='absolute'
          top='63px'
          left='0'
          right='0'
          overflowX='auto'
          whiteSpace='nowrap'
          backgroundColor='#FFFFFF'
        >
          <Tabs width='100%'>
            <TabList
              display='flex'
              overflowX='auto'
              overflowY='hidden'
              whiteSpace='nowrap'
              height='50px'
              fontSize='16px'
              fontWeight='600'
              lineHeight='21.79px'
            >
              <Tab px='19px'>Mis datos</Tab>
              <Tab px='19px'>Mis tareas</Tab>
              <Tab px='19px'>Mis devoluciones</Tab>
              <Tab px='19px'>Mis comunicaciones</Tab>
              <Tab px='19px'>Mis mejores amigos</Tab>
            </TabList>
          </Tabs>
        </Box>
      </VStack>
    </Box>
  );
};

export default NavHeader;
