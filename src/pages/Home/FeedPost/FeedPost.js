import React, { useEffect, useState } from 'react';
import './FeedPost.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

const FeedPost = ({ post }) => {
    const { userId, name, description, comment, date, image, like, share } = post;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={users.filter(user => user.id === userId)[0]?.image} alt="" className="postProfileImg" />
                        <span className="postUserName">{users.filter(user => user.id === userId)[0]?.name}</span>
                        <span className="postTime">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="userPostText">
                        {description}
                    </span>
                    <img src={image} alt="" className="userPostImg" />
                </div>
                <div className="postBottom">
                    <div className="postLeft">
                        <img src="/assets/icon/thums.ico" alt="" className="postLikeIcon" />
                        <img src="/assets/icon/heart.ico" alt="" className="postLikeIcon" />
                        <span className="postLikeCount">{like} people like</span>
                    </div>
                    <div className="postRight">
                        <span className="postComment">{comment} Comments</span>
                        <span className="postComment">{share} Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedPost;