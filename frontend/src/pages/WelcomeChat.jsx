//import React from 'react'
import "../App.css"
import MessageContainer from "../components/MessageContainer"
import Sidebar from "../components/Sidebar"

const WelcomeChat = () => {
  return (
    <div className="welcomechat">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default WelcomeChat
