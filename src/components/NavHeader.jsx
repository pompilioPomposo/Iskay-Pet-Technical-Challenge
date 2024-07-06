import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import {
  HStack,
  VStack,
  Tabs,
  TabList,
  Tab,
  Box,
  TabIndicator,
} from '@chakra-ui/react';
import {
  mainContainerStyles,
  boxStyles,
  hStackStyles,
  vStackStyles,
  tabListStyles,
  tabStyles,
  tabIndicatorStyles,
  absoluteBoxStyles,
} from '../styles/NavHeaderStyles';
import { ReactComponent as LogoImage } from '../icons/Logo.svg';
import { ReactComponent as MenuImage } from '../icons/Menu.svg';
import { ReactComponent as SearchImage } from '../icons/Search.svg';
import { ReactComponent as LoginImage } from '../icons/Login.svg';
import { ReactComponent as CartImage } from '../icons/Cart.svg';

const NavHeader = () => {
  const { setSelectedTab } = useContext(AppContext);

  const handleTabClick = (event) => {
    const selectedTab = event.target.textContent;
    setSelectedTab(selectedTab);
  };

  return (
    <Box {...mainContainerStyles}>
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
        <Tabs width='100%' variant='unstyled'>
          <TabList {...tabListStyles}>
            <Tab {...tabStyles} onClick={handleTabClick}>
              Mis datos
            </Tab>
            <Tab {...tabStyles} onClick={handleTabClick}>
              Mis tareas
            </Tab>
            <Tab {...tabStyles} onClick={handleTabClick}>
              Mis devoluciones
            </Tab>
            <Tab {...tabStyles} onClick={handleTabClick}>
              Mis comunicaciones
            </Tab>
            <Tab {...tabStyles} onClick={handleTabClick}>
              Mis mejores amigos
            </Tab>
          </TabList>
          <TabIndicator {...tabIndicatorStyles} />
        </Tabs>
      </Box>
    </Box>
  );
};

export default NavHeader;
