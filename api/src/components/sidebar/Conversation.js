import React from 'react'
import "../../App.css"
function Conversation({conversation}) {
  return (
    <div className='singleUser'>
      <p>{conversation.FullName}</p>
      <p> - </p>
      <p>{conversation.Email}</p>
    </div>
  )
}

export default Conversation
