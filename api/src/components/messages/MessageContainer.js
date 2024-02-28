import React, { useEffect } from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'
import useConversation from '../../zustand/useConversation';

function MessageContainer() {
    const {selectedConversation, setSelectedConversation} = useConversation();

    // useEffect(() => {
    //     return () => 
    //         setSelectedConversation(null);
        
    // }, [setSelectedConversation])
    
  return (
    <div className='messageCont'>
      <div>
        <span>To: </span>
        {
            selectedConversation ? 
            (<span>{selectedConversation.FullName}</span>) :
            (<></>)
        }
    
      </div>
        {
            !selectedConversation ? 
            (
                <p>Welcomem fill fre to chat</p>
            ) :
            (
                <Messages/>
            )
        }
      <MessageInput/>
    </div>
  )
}

export default MessageContainer

