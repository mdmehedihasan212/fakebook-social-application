import React from 'react';
import FeedShare from '../FeedShare/FeedShare';
import './Feed.css';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <FeedShare></FeedShare>
            </div>
        </div>
    );
};

export default Feed;