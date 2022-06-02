import React, { useEffect, useState } from 'react';
import FeedPost from '../FeedPost/FeedPost';
import FeedShare from '../FeedShare/FeedShare';
import './Feed.css'

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('post.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <FeedShare></FeedShare>
                {
                    posts.map(post => <FeedPost
                        key={post.id}
                        post={post}
                    ></FeedPost>)
                }
            </div>
        </div>
    );
};

export default Feed;