import React, { useEffect } from 'react'
import Message from './Message'
import axios from 'axios'
import useConversation from '../../zustand/useConversation';

function Messages() {

  const {selectedConversation, messages, setMessages} = useConversation();

  useEffect(() => {
    const getAConversationFunc = async () => {
      try {
        const res = await axios.get(`http://localhost:7439/chat/getConversation/${selectedConversation._id}`)
        console.log(res.data) 
        setMessages(res.data.Conversation.Messages)
      } catch (error) {
         console.log(error)
      }
    }

    if(selectedConversation?._id)
      getAConversationFunc();
  }, [selectedConversation._id, setMessages])
  return (
    <div>
      {
        messages.map(message => (
            <Message key={message._id}
                     message={message}/>
        ))
      }
    </div>
  )
}

export default Messages
