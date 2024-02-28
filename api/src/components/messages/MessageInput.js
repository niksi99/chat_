import React, { useState } from 'react'
import axios from "axios"
import useConversation from '../../zustand/useConversation';


function MessageInput() {

  const [Message, setSendMessage] = useState("");
  const {selectedConversation, messages, setMessages} = useConversation();

  async function SendMessageFuncPromise(ev) {
      ev.preventDefault();

      await axios.post(`http://localhost:7439/chat/send/${selectedConversation._id}`, {message: Message})
                 .then((res) => {
                  console.log(res)
                  setMessages({...messages, Message})
                 })
                 .catch((err) => console.log(err))
                 setSendMessage("");
  } 

  return (
    <div>
      <form onSubmit={SendMessageFuncPromise}>
        <input type="text" placeholder='Input message...'
        value={Message} onChange={(ev) => setSendMessage(ev.target.value)}/>
        <button>Send</button>
      </form>
    </div>
  )
}

export default MessageInput
