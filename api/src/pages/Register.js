import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import GenderCheck from '../components/gender/GenderCheck';

function Register() {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    FullName: "",
    Username: "",
    Email: "",
    Password: "",
    ConfirmedPassword: "",
    Gender: ""
  });

  const registration = async (event) => {
    event.preventDefault();
    //console.log(inputs)
    await axios.post("http://localhost:7439/auth/register", inputs)
               .then((res) => {
                  console.log(res);
                  navigate('/login')
               })
               .catch((error) => console.log(error))
  }

  const handleGender = (Gender) => {
    setInputs({...inputs, Gender})
  }
  
  return (
    <div>
      <form onSubmit={registration}>
        <div>
          <label htmlFor='inputFullName'>FullName: </label>
          <input id="inputFullName" type='text'
          placeholder='Enter full name'
          value={inputs.FullName}
          onChange={(event) => setInputs({...inputs, FullName: event.target.value})}/>
        </div>
        <div>
          <label htmlFor='inputUserName'>Username: </label>
          <input id="inputUserName" type='text'
          placeholder='Enter user name'
          value={inputs.Username}
          onChange={(event) => setInputs({...inputs, Username: event.target.value})}/>
        </div>
        <div>
          <label htmlFor='inputEmail'>Email: </label>
          <input id="inputEmail" type='text'
          placeholder='Enter Email'
          value={inputs.Email}
          onChange={(event) => setInputs({...inputs, Email: event.target.value})}/>
        </div>
        <div>
          <label htmlFor='inputPassword'>Password: </label>
          <input id="inputPassword" type='text'
          placeholder='Enter password'
          value={inputs.Password}
          onChange={(event) => setInputs({...inputs, Password: event.target.value})}/>
        </div>
        <div>
          <label htmlFor='inputConfirmedPassword'>ConfirmedPassword: </label>
          <input id="inputConfirmedPassword" type='text'
          placeholder='Enter confirmed password'
          value={inputs.ConfirmedPassword}
          onChange={(event) => setInputs({...inputs, ConfirmedPassword: event.target.value})}/>
        </div>
        <div>
          <GenderCheck onRadioClick = {handleGender}
                       selectedGenderRB = {inputs.Gender}/>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
