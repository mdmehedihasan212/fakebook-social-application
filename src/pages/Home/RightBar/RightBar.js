import React from 'react';
import './RightBar.css';

const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="BirthdayContainer">
                    <h4>Birthdays</h4>
                    <img src="/assets/icon/gift.ico" alt="" className="birthImg" />
                    <span className="birthText">
                        <strong>Monir Hossain</strong> and <strong>5 others</strong> have birthdays today.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RightBar;