import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const contextValue = {

  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;