import React from 'react'
import "../../App.css"
import useConversation from '../../zustand/useConversation'
function Conversation({conversation}) {
  const {selectedConversation, setSelectedConversation} = useConversation();

  //const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div className='singleUser' onClick={() => setSelectedConversation(conversation)}>
      <p>{conversation.FullName}</p>
      <p> - </p>
      <p>{conversation.Email}</p>
    </div>
  )
}

export default Conversation
