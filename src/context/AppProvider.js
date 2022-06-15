import React, { useRef, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const ref = useRef(null);

  const contextValue = {
    ref
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;