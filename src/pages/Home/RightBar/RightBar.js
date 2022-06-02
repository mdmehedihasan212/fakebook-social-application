import React from 'react';
import useUsers from '../../../hooks/useUsers';
import OnlineFriend from '../OnlineFriend/OnlineFriend';
import './RightBar.css';

const RightBar = ({ profile }) => {
    const [users] = useUsers();

    const HomeRightBar = () => {
        return (
            <div className="BirthdayContainer">
                <h4>Ads</h4>
                <img src="/assets/ads/1.jpg" alt="img" className="rightBarAdImg" />
                <h4>Birthdays</h4>
                <div className="birthdayContent">
                    <img src="/assets/icon/gift.ico" alt="img" className="birthdayImg" />
                    <span className="birthdayText">
                        <strong>Monir Hossain</strong> and <strong>5 others</strong> have birthdays today.
                    </span>
                </div>
                <h4 className="onlineFriendTitle">Online Friends</h4>
                <ul className="onlineFriendsList">
                    {
                        users.map(user => <OnlineFriend
                            key={user.id}
                            user={user}
                        ></OnlineFriend>)
                    }
                </ul>
            </div>
        )
    };

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="profileBarTitle">Profile Information</h4>
                <div className="profileUserInfo">
                    <div className="profileInfoItem">
                        <span className="profileInfoKey">City:</span>
                        <span className="profileInfoValue">Barishal</span>
                    </div>
                    <div className="profileInfoItem">
                        <span className="profileInfoKey">From:</span>
                        <span className="profileInfoValue">Rupatali</span>
                    </div>
                    <div className="profileInfoItem">
                        <span className="profileInfoKey">Relationship:</span>
                        <span className="profileInfoValue">Marit</span>
                    </div>
                    <h4 className="profileBarFriends">All Friends</h4>
                    <div className="profileFollowings">
                        <div className="profileFollowing">
                            <img src="/assets/profile/1.jpg" alt="" className="profileFollowingImg" />
                            <span className="profileFollowingName">
                                Mark Jukarburge
                            </span>
                        </div>
                        <div className="profileFollowing">
                            <img src="/assets/profile/2.jpg" alt="" className="profileFollowingImg" />
                            <span className="profileFollowingName">
                                Mark Jukarburge
                            </span>
                        </div>
                        <div className="profileFollowing">
                            <img src="/assets/profile/3.jpg" alt="" className="profileFollowingImg" />
                            <span className="profileFollowingName">
                                Mark Jukarburge
                            </span>
                        </div>
                        <div className="profileFollowing">
                            <img src="/assets/profile/4.jpg" alt="" className="profileFollowingImg" />
                            <span className="profileFollowingName">
                                Mark Jukarburge
                            </span>
                        </div>
                        <div className="profileFollowing">
                            <img src="/assets/profile/5.jpg" alt="" className="profileFollowingImg" />
                            <span className="profileFollowingName">
                                Mark Jukarburge
                            </span>
                        </div>
                        <div className="profileFollowing">
                            <img src="/assets/profile/6.jpg" alt="" className="profileFollowingImg" />
                            <span className="profileFollowingName">
                                Mark Jukarburge
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">

                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    );
};

export default RightBar;