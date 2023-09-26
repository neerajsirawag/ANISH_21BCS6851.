import React from 'react'
import { useNavigate } from "react-router-dom";


function Navbar() {
    let navigate = useNavigate();
    return (
        <div className='navbar'>
            <span className='logo'>WebWiz</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span className='name'>Neeraj</span>
                <button onClick={ () => navigate('/')}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar