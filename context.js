import React from 'react';
export const context = {
    user: null,
    menu:["Purchases","Booking","Profile"],
  };
  
  export const AppContext = React.createContext(
    context // default value
  );