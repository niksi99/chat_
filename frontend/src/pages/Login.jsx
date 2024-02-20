//import React from 'react'

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
            <a href="/register" target="_blank" >Dont have an account?</a>
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  )
}

export default Login
