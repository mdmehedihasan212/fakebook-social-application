import React from 'react';
import './RightBar.css';

const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <h4>Ads</h4>
                <img src="/assets/ads/1.jpg" alt="" className="rightBarAdImg" />
                <div className="BirthdayContainer">
                    <h4>Birthdays</h4>
                    <div className="birthdayContent">
                        <img src="/assets/icon/gift.ico" alt="" className="birthdayImg" />
                        <span className="birthdayText">
                            <strong>Monir Hossain</strong> and <strong>5 others</strong> have birthdays today.
                        </span>
                    </div>
                    <h4 className="onlineFriendTitle">Online Friends</h4>
                    <ul className="onlineFriendsList">
                        <li className="onlineFriendItem">
                            <div className="friendsImgContainer">
                                <img src="/assets/profile/1.jpg" alt="" className="friendsProfileImg" />
                                <span className="onlineBadge"></span>
                            </div>
                            <span className="onlineFriendName">Monir Hossain</span>
                        </li>
                        <li className="onlineFriendItem">
                            <div className="friendsImgContainer">
                                <img src="/assets/profile/1.jpg" alt="" className="friendsProfileImg" />
                                <span className="onlineBadge"></span>
                            </div>
                            <span className="onlineFriendName">Monir Hossain</span>
                        </li>
                        <li className="onlineFriendItem">
                            <div className="friendsImgContainer">
                                <img src="/assets/profile/1.jpg" alt="" className="friendsProfileImg" />
                                <span className="onlineBadge"></span>
                            </div>
                            <span className="onlineFriendName">Monir Hossain</span>
                        </li>
                        <li className="onlineFriendItem">
                            <div className="friendsImgContainer">
                                <img src="/assets/profile/1.jpg" alt="" className="friendsProfileImg" />
                                <span className="onlineBadge"></span>
                            </div>
                            <span className="onlineFriendName">Monir Hossain</span>
                        </li>
                        <li className="onlineFriendItem">
                            <div className="friendsImgContainer">
                                <img src="/assets/profile/1.jpg" alt="" className="friendsProfileImg" />
                                <span className="onlineBadge"></span>
                            </div>
                            <span className="onlineFriendName">Monir Hossain</span>
                        </li>
                        <li className="onlineFriendItem">
                            <div className="friendsImgContainer">
                                <img src="/assets/profile/1.jpg" alt="" className="friendsProfileImg" />
                                <span className="onlineBadge"></span>
                            </div>
                            <span className="onlineFriendName">Monir Hossain</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RightBar;