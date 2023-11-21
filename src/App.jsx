// src/App.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import { UserContextProvider } from './context/UserContextB';



const App = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default App;
