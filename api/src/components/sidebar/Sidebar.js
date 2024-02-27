import React from 'react'
import UsersToChat from './UsersToChat'

function Sidebar() {
  return (
    <div>
        <div className="searchbar">
            <form>
                <input type="text" placeholder="Search..."/>
                <button>SEARCH</button>
                <UsersToChat/>
            </form>
        </div>
    </div>
  )
}

export default Sidebar
