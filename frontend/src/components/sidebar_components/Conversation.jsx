/* eslint-disable no-unused-vars */
import React from 'react'

const Conversation = ({conversation}) => {
  return (
      <div className="conv">
        <p>JOfwne</p>
        <p>{conversation.FullName}</p>
        {/* <p>{conversation.FullName}</p>
        <img src={conversation.FrofileImg}/> */}
      </div>
  )
}

export default Conversation
