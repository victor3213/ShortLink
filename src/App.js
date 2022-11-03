import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Route,Routes } from 'react-router';
import 'semantic-ui-css/semantic.min.css'

import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/404'

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
           <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App
