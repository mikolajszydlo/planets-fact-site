import React from 'react';
import MainLayout from './component/layout/MainLayout/MainLayout';
import { BrowserRouter } from 'react-router-dom';


const App = () => (
  <div className = "App">
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </div>
);

export default App;
