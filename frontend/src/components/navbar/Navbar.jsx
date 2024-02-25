/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie'

function Navbar() {

    const [cookies, setCookies] = useCookies("token");

  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        {!cookies.token ?
            (<Link to="/login">Login</Link>) :
            <button>Logout</button>
        }
    </div>
  )
}

export default Navbar
