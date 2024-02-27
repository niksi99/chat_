/* eslint-disable no-unused-vars */
//import React from 'react'

import useGetChat from "../../hooks/useGetChat";
import Conversation from "./Conversation"

const UsersToChat = () => {
  const   conversations   = useGetChat();
  console.log(conversations)
  return (
    <div>
         <div className="usersTochat">
          {conversations.map(conversation => {
            <Conversation key={conversation._id} 
                          conversation={conversation}
            /> 
          })}
        </div>
    </div>
  )
}

export default UsersToChat
