//import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import SearchBar from "./sidebar_components/SearchBar"
import UsersToChat from "./sidebar_components/UsersToChat"

const Sidebar = () => {

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies("access-token");
  const navigate = useNavigate();
//http://localhost:7439/auth/login
  async function logout_byCookie_BE () {
    await axios.post("http://localhost:7439/auth/logout")
    //window.localStorage.removeItem("userID");
    navigate("/login");
  }

  return (
    <div className="sidebarDIV">
      <SearchBar/>
      <UsersToChat/>
      <button onClick={logout_byCookie_BE}>Logout</button>
    </div>
  )
}

export default Sidebar
