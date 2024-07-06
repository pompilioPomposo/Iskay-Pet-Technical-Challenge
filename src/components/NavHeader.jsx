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
import {
  boxStyles,
  hStackStyles,
  vStackStyles,
  tabListStyles,
  absoluteBoxStyles,
} from '../styles/NavHeaderStyles';

const NavHeader = () => {
  return (
    <Box position='relative' width='100%'>
      <Box {...boxStyles} />
      <VStack {...vStackStyles}>
        <HStack {...hStackStyles}>
          <Image src={menuImage} />
          <Image src={searchImage} />
          <Image src={logoImage} />
          <Image src={loginImage} />
          <Image src={cartImage} />
        </HStack>
      </VStack>
      <Box {...absoluteBoxStyles}>
        <Tabs width='100%'>
          <TabList {...tabListStyles}>
            <Tab px='19px'>Mis datos</Tab>
            <Tab px='19px'>Mis tareas</Tab>
            <Tab px='19px'>Mis devoluciones</Tab>
            <Tab px='19px'>Mis comunicaciones</Tab>
            <Tab px='19px'>Mis mejores amigos</Tab>
          </TabList>
        </Tabs>
      </Box>
    </Box>
  );
};

export default NavHeader;
