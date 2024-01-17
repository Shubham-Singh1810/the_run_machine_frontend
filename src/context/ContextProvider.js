import React, {createContext, useContext, useEffect, useState} from 'react';


// Step 1: Create a context
const GlobalStateContext = createContext();

// Step 2: Create a provider component
export const GlobalStateProvider = ({children}) => {
  const [globalState, setGlobalState] = useState({
    user: localStorage.getItem("the_run_machine_user")==null ? null : JSON.parse(localStorage.getItem("the_run_machine_user")),
  });
  return (
    <GlobalStateContext.Provider
      value={{globalState, setGlobalState}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Step 3: Create a custom hook to access the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
