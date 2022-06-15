import React, { useRef, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [modal, setModal] = useState(false);
  const ref = useRef(null);

  const contextValue = {
    ref,
    modal,
    setModal,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;