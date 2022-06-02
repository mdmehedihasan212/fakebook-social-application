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
                <div className="postCenter">
                    <span className="userPostText">
                        Hey! It's my first post
                    </span>
                    <img src="/assets/post/1.jpg" alt="" className="userPostImg" />
                </div>
                <div className="postBottom">
                    <div className="postLeft">
                        <img src="/assets/icon/thums.ico" alt="" className="postLikeIcon" />
                        <img src="/assets/icon/heart.ico" alt="" className="postLikeIcon" />
                        <span className="postLikeCount">32 people like</span>
                    </div>
                    <div className="postRight">
                        <span className="postComment">9 Comments</span>
                        <span className="postComment">12 Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedPost;