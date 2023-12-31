import React from 'react'
import Navbar from './navbar'
import Search from './Search'
import Chats from './chats'

function Sidebar() {
    return (
        <div className='sidebar'>

            <Navbar />
            <Search />
            <Chats />

        </div>
    )
}

export default Sidebar
