import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from "react-router-dom";
import { ServieContext } from '../../App';
import { auth } from '../../firebase.init';
import Cart from '../Cart/Cart';
import "./Navbar.css";



const Navbar = () => {
  const [user] = useAuthState(auth);

  const [cart, setCart] = useContext(ServieContext);
    console.log(cart);
    return (
        <nav>
             <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/cart'
        >
          Cart ({cart.length})
        </NavLink>


        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/blog'
        >
          Blog
        </NavLink>


        {user ? (
                                <button className='btn-nav' onClick={() => signOut(auth)}>Logout</button>
                            ) : (
                                <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                    to="/login"
                                    
                                >
                                    Login
                                </NavLink>
                            )}
                           <spam className='link'>{ user?.email}</spam>



        


        
       
        
      </div>
        </nav>
    );
};

export default Navbar;