import React, { useRef, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [is404, setIs404] = useState(false);
  const ref = useRef(null);
  const welcomeRef = useRef(null);
  const welcomeScrollRef = useRef(null);
  const content = useRef(null);

  const contextValue = {
    ref,
    modal,
    is404,
    setIs404,
    content,
    setModal,
    welcomeRef,
    welcomeScrollRef
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;