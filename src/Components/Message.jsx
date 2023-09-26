import React from 'react'

function Message() {
    return (
        <><div className='message'>
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello Neeraj</p>
                <p>Jane this side</p>
                <p>Can we meet in evening near lake</p>
                <p>Take this image for reference.</p>
                <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
            <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello Jane</p>
                <p>Yeah Sure</p>
                <p>Okay meet near the lake.</p>
            </div>
                
            </div></>
    )
}

export default Message
