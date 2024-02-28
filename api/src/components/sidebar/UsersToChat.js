import React from 'react'
import getAllUsersHook from '../../hooks/getAllUsersHook'
import Conversation from './Conversation';

function UsersToChat() {

    const conversations  = getAllUsersHook();
    
  return (
    <div>
      {
        conversations.map(conversation => (
            <Conversation key={conversation._id}
                          conversation={conversation}/>
        ))
      }
    </div>
  )
}

export default UsersToChat
