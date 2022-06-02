import React from 'react';
import './FeedShare.css';
import { MdPermMedia } from 'react-icons/md';
import { AiTwotoneTags } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

const FeedShare = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src='/assets/profile/1.jpg' alt="" className="shareProfileImage" />
                    <input placeholder="What's is your mind?" className="shareInput" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia className="shareIcon" />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>
                        <div className="shareOption">
                            <AiTwotoneTags className="shareIcon" />
                            <span className="shareOptionText">
                                Tags
                            </span>
                        </div>
                        <div className="shareOption">
                            <MdLocationOn className="shareIcon" />
                            <span className="shareOptionText">
                                Location
                            </span>
                        </div>
                        <div className="shareOption">
                            <BsFillEmojiSmileFill className="shareIcon" />
                            <span className="shareOptionText">
                                feelings
                            </span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default FeedShare;