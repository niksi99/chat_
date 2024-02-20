//import React from 'react'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import GenderCheck from "./GenderCheck.jsx"
import axios from "axios"

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    FullName: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmedPassword: "",
    Gender: ""
  })

  const handleGender = (Gender) => {
    setInputs({...inputs, Gender})
  }

  const registration = (event) => {
    event.preventDefault();
    console.log(inputs)
    axios.post("http://localhost:7439/auth/register", inputs)
         .then((res) => {
            console.log(res)
            navigate("/login")
         })
         .catch((error) => {
          console.log(error.message)
        })
  }
  return (
    <div>
      <form onSubmit={registration}>
        <div>
            <label htmlFor="inputFullName">Full name: </label>
            <input id="inputFullname" type="text" 
            value={inputs.FullName} placeholder="Enter full name: "
            onChange={(event) => setInputs({...inputs, FullName: event.target.value})}/>
        </div>
        <div>
            <label htmlFor="inputUserName">Username: </label>
            <input id="inputUserName" type="text" 
            value={inputs.Username} placeholder="Enter username: "
            onChange={(event) => setInputs({...inputs, Username: event.target.value})}/>
        </div>
        <div>
            <label htmlFor="inputEmail">Email: </label>
            <input id="inputEmail" type="text" 
            value={inputs.Email} placeholder="Enter email: "
            onChange={(event) => setInputs({...inputs, Email: event.target.value})}/>
        </div>
        <div>
            <label htmlFor="inputPassword">Password: </label>
            <input id="inputPassword" type="text" 
            value={inputs.Password} placeholder="Enter password: "
            onChange={(event) => setInputs({...inputs, Password: event.target.value})}/>
        </div>
        <div>
            <label htmlFor="inputConfirmedPassword">ConfirmedPassword: </label>
            <input id="inputConfirmedPassword" type="text" 
            value={inputs.ConfirmedPassword} 
            onChange={(event) => setInputs({...inputs, ConfirmedPassword: event.target.value})}
            placeholder="Enter confirmed password: "/>
        </div>
        <div>
          <GenderCheck onRadioClick = {handleGender} 
                       selectedGenderRB = {inputs.Gender}/>
        </div>
        <button>REGISTER</button>
      </form>
    </div>
  )
}

export default Register
