import React from 'react'

function MessageInput() {
  return (
    <div>
      <form>
        <input type="text" placeholder='Input message...'/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default MessageInput
