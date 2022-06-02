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
                        <div className="profileCover">
                            <img src="/assets/post/6.jpg" alt="" className="profileCoverImg" />
                            <img src="/assets/profile/2.jpg" alt="" className="profileAvatarImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileName">Hilari Clinton</h4>
                            <span className="profileTag">
                                Welcome to my fakebook profile
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <RightBar profile></RightBar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;