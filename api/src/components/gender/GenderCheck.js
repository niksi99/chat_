import React from 'react'

function GenderCheck({onRadioClick, selectedGenderRB}) {
  return (
    <div className='genderRBs'>
      <div>
        <label htmlFor='male'>Male </label>
        <input id="male" type="radio" name="gender" value="male"
        checked={selectedGenderRB === "male"}
        onChange={() => onRadioClick("male")} />
      </div>
      <div>
        <label htmlFor='female'>Female </label>
        <input id="male" type="radio" name="gender"
         checked={selectedGenderRB === "female"}
         onChange={() => onRadioClick("female")} />
      </div>
    </div>
  )
}

export default GenderCheck
