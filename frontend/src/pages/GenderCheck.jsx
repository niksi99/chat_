/* eslint-disable react/prop-types */
//import React from 'react'
import "../App.css"
//import PropTypes from 'prop-types'

const GenderCheck = ({onRadioClick, selectedGenderRB}) => {
  return (
    <div className="genderRadioButtons">
        <div>
            <label htmlFor="male">Male</label>
            <input id="male" type="radio" name="gender" value="male"
            checked={selectedGenderRB === "male"}
            onChange={() => onRadioClick("male")} />
        </div>
        <div>
            <label htmlFor="female">Female</label>
            <input id="female" type="radio" name="gender" value="female"
            checked={selectedGenderRB === "female"}
            onChange={() => onRadioClick("female")}/>
        </div>
    </div>
  )
}

// GenderCheck.propTypes = {
//   selectedGenderRB: PropTypes.string.isRequired,
//   onRadioClick: PropTypes.func
// }

export default GenderCheck
