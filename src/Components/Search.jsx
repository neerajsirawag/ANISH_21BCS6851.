import React from 'react'

function Search() {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type='text' placeholder=' Search'/>
            </div>

        <div className="userChat">
            <img src="https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="userChatInfo">
                <span>Mike</span>
            </div>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/3155367/pexels-photo-3155367.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="userChatInfo">
                <span>Harry</span>
            </div>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className="userChatInfo">
                <span>Suvrat</span>
            </div>
        </div>

        </div>
    )
}

export default Search
