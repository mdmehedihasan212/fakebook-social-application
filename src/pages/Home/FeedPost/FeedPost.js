import React, { useState } from 'react';
import './FeedPost.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import useUsers from '../../../hooks/useUsers';

const FeedPost = ({ post }) => {
    const { userId, name, description, comment, date, image, likes, share } = post;

    const [users] = useUsers();
    const [like, setLike] = useState(likes);
    const [isLike, setIsLike] = useState(false);

    const handleClick = () => {
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={users.filter(user => user.id === userId)[0]?.image} alt="img" className="postProfileImg" />
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
                    <img src={image} alt="img" className="userPostImg" />
                </div>
                <div className="postBottom">
                    <div className="postLeft">
                        <img src="/assets/icon/thums.ico" onClick={handleClick} alt="img" className="postLikeIcon" />
                        <img src="/assets/icon/heart.ico" onClick={handleClick} alt="img" className="postLikeIcon" />
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