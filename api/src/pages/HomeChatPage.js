import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Sidebar from '../components/sidebar/Sidebar';

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
      <Sidebar/>
    </div>
  )
}

export default HomeChatPage
