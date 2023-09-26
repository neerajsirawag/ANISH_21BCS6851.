import React from 'react'
import Img from '../assets/img.svg'
import Attach from '../assets/attach.svg'
import Send from '../assets/send.svg'

function Input() {
    return (
        <div className='input'> 
            <input type="text" placeholder='Type a message...' />
            <div className="send">
                <img src={Attach} alt="" />
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button> Send <img src={Send} alt="" /> </button>
            </div>
        </div>
    )
}

export default Input
