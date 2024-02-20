//import React from 'react'
import "../App.css"
const GenderCheck = () => {
  return (
    <div className="genderRadioButtons">
        <div>
            <label htmlFor="male">Male</label>
            <input id="male"type="radio" name="gender"/>
        </div>
        <div>
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female"/>
        </div>
    </div>
  )
}

export default GenderCheck
