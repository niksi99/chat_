//import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <form>
        <div>
            <label htmlFor="inputEmail">Email: </label>
            <input id="inputEmail" type="text" placeholder="Enter email: "/>
        </div>
        <div>
            <label htmlFor="inputPassword">Password: </label>
            <input id="inputPassword" type="text" placeholder="Enter password: "/>
        </div>
        <div>
            <Link to="/register" target="_blank" >Dont have an account?</Link>
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  )
}

export default Login
