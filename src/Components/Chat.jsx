import React from 'react'
import Cam from "../assets/cam.svg"
import Add from "../assets/add.svg"
import More from "../assets/more.svg"
import Messages from './Messages'
import Input from './Input'

function Chat() {
    return (
        <div className='chat'>

            <div className="chatInfo">
                <div className="data">
                <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Jana</span>
                </div>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>

                <Messages />
                <Input />
        </div>
    )
}

export default Chat
