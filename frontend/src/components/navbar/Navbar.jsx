/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import AuthContext from '../../context/AuthContext';

function Navbar() {

   const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className='navbar'>
        {
            isLoggedIn === false && (
                <>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
            )
        }
        {
            isLoggedIn ===true && (
                <button>Log out</button>
            )
        }
    </div>
  )
}

export default Navbar
