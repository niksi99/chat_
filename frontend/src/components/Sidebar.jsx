//import React from 'react'

import SearchBar from "./sidebar_components/SearchBar"
import UsersToChat from "./sidebar_components/UsersToChat"

const Sidebar = () => {
  return (
    <div className="sidebarDIV">
      <SearchBar/>
      <UsersToChat/>
    </div>
  )
}

export default Sidebar
