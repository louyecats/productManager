import logo from './bakery.jpeg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
// import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
            <Routes>
	            <Route element={<Main/>} path="/" default />
              <Route element={<Detail/>} path="/:id"/>
              <Route element={<Update/>} path="/edit/:id"/>
              {/* update must be last route in list */}
            </Routes>
    	</BrowserRouter>
      {/* <ProductForm/> */}
    </div>
  );
}

export default App;
