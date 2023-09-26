import React from 'react'
import "./HomeLayout.scss";
import Sidebar from '../Components/sidebar'
import Chat from '../Components/Chat'

export default function HomeLayout() {
    return (
        <div className='home'>

            <div className='container'>

            <Sidebar />
            <Chat />


            </div>

        </div>
    )
}

