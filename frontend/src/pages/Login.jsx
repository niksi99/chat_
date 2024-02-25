//import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [_, setCookie] = useCookies(["token"])

  const handleLogin_ByCookie = async(event) => {
    event.preventDefault();

    const data = { Email, Password }
    await axios.post("http://localhost:7439/auth/login", data)
      .then((res) => {
        console.log(res)
        setCookie("token", res.data.token);
        navigate("/welcome")
      })
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleLogin_ByCookie}>
        <div>
            <label htmlFor="inputEmail">Email: </label>
            <input id="inputEmail" type="text" 
            value = {Email} placeholder="Enter email: "
            onChange={(ev) => setEmail(ev.target.value)}/>
        </div>
        <div>
            <label htmlFor="inputPassword">Password: </label>
            <input id="inputPassword" type="text" 
            value={Password} placeholder="Enter password: "
            onChange={(ev) => setPassword(ev.target.value)}/>
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
