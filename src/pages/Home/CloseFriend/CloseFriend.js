import React from 'react';
import './CloseFriend.css';

const CloseFriend = ({ user }) => {
    return (
        <li className="sideBarFriend">
            <img src={user.image} alt="img" className="sideBarFriendImg" />
            <span className="sideBarFriendName">{user.name}</span>
        </li>
    );
};

export default CloseFriend;