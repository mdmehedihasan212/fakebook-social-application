import React from 'react';
import './FeedPost.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

const FeedPost = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/post/1.jpg" alt="" className="postProfileImg" />
                        <span className="postUserName">Md Monir Hossain</span>
                        <span className="postTime">5 minute ago</span>
                    </div>
                    <div className="postTopRight">
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className="postCenter"></div>
                <div className="postBottom"></div>
            </div>
        </div>
    );
};

export default FeedPost;