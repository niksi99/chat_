import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import AuthContext from '../../context/AuthContext';
import axios from 'axios'
import AuthContext from '../../context/AuthContext';

function Navbar() {

  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logout () {
    await axios.post("http://localhost:7439/auth/logout");
    navigate("/login");
  }

  return (
    <div>
            {/* <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link> */}
      {
        isLoggedIn === false  && (
          <>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )
      }
      {
        isLoggedIn === true && (
          <button onClick={logout}>Logout</button>
        )
      }
    </div>
  )
}

export default Navbar
