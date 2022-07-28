import './App.css';
import React from 'react'
import SideDrawer from './components/SideDrawer'
import DataProvider from './components/context/DataProvider';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>

      <DataProvider>
        <BrowserRouter>
      <SideDrawer/>
      </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
