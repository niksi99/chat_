//import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import SearchBar from "./sidebar_components/SearchBar"
import UsersToChat from "./sidebar_components/UsersToChat"

const Sidebar = () => {

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies("access-token");
  const navigate = useNavigate();

  const logout_byCookie = () => {
    setCookies("token", "");
    //window.localStorage.removeItem("userID");
    navigate("/login");
  }

  return (
    <div className="sidebarDIV">
      <SearchBar/>
      <UsersToChat/>
      <button onClick={logout_byCookie}>Logout</button>
    </div>
  )
}

export default Sidebar
