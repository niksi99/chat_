import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  async function logging_in(ev) {
    ev.preventDefault();

    const data = { Email, Password}

    await axios.post("http://localhost:7439/auth/login", data)
               .then((res) => {
                  console.log(res.data.succes)
                  if(res.data.succes === true)
                   navigate("/welcome")
               })
               .catch((error) => console.log(error))
  }

  return (
    <div>
      <form onSubmit={logging_in}>
      <div>
          <label htmlFor='inputEmail'>Email: </label>
          <input id="inputEmail" type='text'
          placeholder='Enter Email'
          value={Email}
          onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='inputPassword'>Password: </label>
          <input id="inputPassword" type='text'
          placeholder='Enter password'
          value={Password}
          onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div>
          <Link to="/register">If you do not have an account click here to register.</Link>
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  )
}

export default Login
