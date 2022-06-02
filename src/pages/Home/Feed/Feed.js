import React from 'react';
import FeedPost from '../FeedPost/FeedPost';
import FeedShare from '../FeedShare/FeedShare';
import './Feed.css';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <FeedShare></FeedShare>
                <FeedPost></FeedPost>
            </div>
        </div>
    );
};

export default Feed;