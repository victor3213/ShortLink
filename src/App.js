import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Route,Routes } from 'react-router';
import 'semantic-ui-css/semantic.min.css'

import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <>
      <Routes>
          <Route 
              path='/' 
              exact 
              element={<Home/>}
          />
          <Route 
              path='/jfhdskjh' 
              exact 
              element={<Dashboard/>}
          />
          
      </Routes>
    </>
  );
}

export default App
