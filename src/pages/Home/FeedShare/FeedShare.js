import React from 'react';
import './FeedShare.css';
import { MdMovie } from 'react-icons/md';

const FeedShare = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src='/assets/post/1.jpg' alt="" className="shareProfileImage" />
                    <input placeholder="What's is your mind?" className="shareInput" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdMovie className="shareIcon" />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedShare;