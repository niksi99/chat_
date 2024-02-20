//import React from 'react'

import SearchBar from "./sidebar_components/SearchBar"
import UsersToChat from "./sidebar_components/UsersToChat"

const Sidebar = () => {
  return (
    <div className="sidebarDIV">
      <SearchBar/>
      <UsersToChat/>
      <button>Logout</button>
    </div>
  )
}

export default Sidebar
