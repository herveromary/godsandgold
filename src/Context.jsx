import React, { createContext, useState, useEffect } from 'react';

const GGContext = createContext([{}, () => {}]);

const GGContextProvider = (props) => {
  const [user, setUser] = useState({});
  const { children } = props;

  return (
    <GGContext.Provider value={[user, setUser]}>{children}</GGContext.Provider>
  );
};

export { GGContext, GGContextProvider };
