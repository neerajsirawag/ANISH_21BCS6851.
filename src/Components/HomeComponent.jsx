import React from 'react'
import "../Sass/HomeComponent.scss";
import Chat from './chat';
import Sidebar from './sidebar';

export default function HomeComponent() {
    return (
        <div className='home'>

            <div className='container'>

            <Sidebar />
            <Chat />


            </div>

        </div>
    )
}

