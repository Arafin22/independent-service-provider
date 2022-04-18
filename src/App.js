
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Blog from './Components/Blog/blog';


import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Signup/Signup';
import Login from './Login/Login';

import RequireAuth from './RequireAuth/RequireAuth';


export const ServieContext = createContext();

function App() {

  const [cart, setCart] =useState([]);
  console.log(cart);
  return (
    <ServieContext.Provider value={[cart, setCart]}>
      <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/cart' element={
         
        <RequireAuth>
          <Cart />
        </RequireAuth>
           } />

        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        
        <Route path='/login' element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>

      
    </ServieContext.Provider>
     
    
  );
}

export default App;
