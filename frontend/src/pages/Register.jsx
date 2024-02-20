//import React from 'react'

import GenderCheck from "./GenderCheck.jsx"

const Register = () => {
  return (
    <div>
      <form>
        <div>
            <label htmlFor="inputFullName">Full name: </label>
            <input id="inputFullname" type="text" placeholder="Enter full name: "/>
        </div>
        <div>
            <label htmlFor="inputUserName">Username: </label>
            <input id="inputUserName" type="text" placeholder="Enter username: "/>
        </div>
        <div>
            <label htmlFor="inputEmail">Email: </label>
            <input id="inputEmail" type="text" placeholder="Enter email: "/>
        </div>
        <div>
            <label htmlFor="inputPassword">Password: </label>
            <input id="inputPassword" type="text" placeholder="Enter password: "/>
        </div>
        <div>
            <label htmlFor="inputConfirmedPassword">ConfirmedPassword: </label>
            <input id="inputConfirmedPassword" type="text" placeholder="Enter confirmed password: "/>
        </div>
        <div><GenderCheck/></div>
        <button>REGISTER</button>
      </form>
    </div>
  )
}

export default Register
