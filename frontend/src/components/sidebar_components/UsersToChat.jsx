/* eslint-disable no-unused-vars */
//import React from 'react'

import useGetChat from "../../hooks/useGetChat";
import Conversation from "./Conversation"

const UsersToChat = () => {
  const   conversations   = useGetChat();
  //
  console.log(conversations)
  return (
    <div>
         {
          conversations.map(conversation => {
            <div key={conversation._id}>
              O
            </div>
          })
         }
    </div>
  )
}

export default UsersToChat
