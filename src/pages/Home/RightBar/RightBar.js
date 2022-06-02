import React from 'react';
import useUsers from '../../../hooks/useUsers';
import OnlineFriend from '../OnlineFriend/OnlineFriend';
import './RightBar.css';

const RightBar = () => {
    const [users] = useUsers();

    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <h4>Ads</h4>
                <img src="/assets/ads/1.jpg" alt="img" className="rightBarAdImg" />
                <div className="BirthdayContainer">
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
            </div>
        </div>
    );
};

export default RightBar;