import React from 'react';
import './OnlineFriend.css';

const OnlineFriend = ({ user }) => {
    return (
        <li className="onlineFriendItem">
            <div className="friendsImgContainer">
                <img src={user.image} alt="img" className="friendsProfileImg" />
                <span className="onlineBadge"></span>
            </div>
            <span className="onlineFriendName">{user.name}</span>
        </li>
    );
};

export default OnlineFriend;