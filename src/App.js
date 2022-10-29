import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Route,Routes } from 'react-router';
import 'semantic-ui-css/semantic.min.css'
import Home from "./pages/Home"

import Footer from './components/footer'

function App() {
  return (
    <>
      <Routes>
          <Route 
              path='/' 
              exact 
              element={<Home/>}
          />
          
      </Routes>
      <Footer/>
    </>
  );
}

export default App
