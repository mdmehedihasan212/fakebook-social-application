import React from 'react';
import Feed from '../Home/Feed/Feed';
import RightBar from '../Home/RightBar/RightBar';
import SideBar from '../Home/SideBar/SideBar';
import Header from '../Shared/Header/Header';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <Header></Header>
            <div className="profile">
                <SideBar></SideBar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        Profile Page
                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <RightBar></RightBar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;