import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Sidebar from '../components/sidebar/Sidebar';
import MessageContainer from '../components/messages/MessageContainer';

function HomeChatPage() {
  const navigate = useNavigate();
  async function logout () {
    await axios.post("http://localhost:7439/auth/logout");
    navigate("/login");
  }
  return (
    <div>
      Welcome user
      <button onClick={logout}>Logout</button>
      <div className='welcomepage'>
      <Sidebar/>
      <MessageContainer/>
      </div>
    </div>
  )
}

export default HomeChatPage
