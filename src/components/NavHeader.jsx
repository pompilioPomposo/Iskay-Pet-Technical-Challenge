import React from 'react';
import { HStack, VStack, Tabs, TabList, Tab, Box } from '@chakra-ui/react';
import {
  boxStyles,
  hStackStyles,
  vStackStyles,
  tabListStyles,
  absoluteBoxStyles,
} from '../styles/NavHeaderStyles';
import { ReactComponent as LogoImage } from '../icons/Logo.svg';
import { ReactComponent as MenuImage } from '../icons/Menu.svg';
import { ReactComponent as SearchImage } from '../icons/Search.svg';
import { ReactComponent as LoginImage } from '../icons/Login.svg';
import { ReactComponent as CartImage } from '../icons/Cart.svg';

const NavHeader = () => {
  return (
    <Box position='relative' width='100%'>
      <Box {...boxStyles} />
      <VStack {...vStackStyles}>
        <HStack {...hStackStyles}>
          <MenuImage />
          <SearchImage />
          <LogoImage />
          <LoginImage />
          <CartImage />
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
