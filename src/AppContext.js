import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('Mis datos');

  return (
    <AppContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </AppContext.Provider>
  );
};
