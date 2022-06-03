import React from 'react';
import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <Link className='headerDomLink' to={'/'}><span className="logo">
                    Fakebook
                </span></Link>
            </div>
            <div className="headerCenter">
                <div className="searchBar">
                    <BsSearch className="searchIcon" />
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerLinks">
                    <Link className='headerDomLink' to={'/'}><span className="headerLink">Homepage</span></Link>
                    <Link className='headerDomLink' to={'/profile'}><span className="headerLink">Timeline</span></Link>
                </div>
                <div className="headerIcons">
                    <div className="headerIconItem">
                        <BsFillPersonFill className="headerIcon" />
                        <span className="headerIconBadge">1</span>
                    </div>
                    <div className="headerIconItem">
                        <BsFillChatDotsFill className="headerIcon" />
                        <span className="headerIconBadge">2</span>
                    </div>
                    <div className="headerIconItem">
                        <IoMdNotifications className="headerIcon" />
                        <span className="headerIconBadge">15</span>
                    </div>
                </div><Link to={'/profile'}><img src="/assets/profile/6.jpg" alt="img" className="headerImage" /></Link>

            </div>
        </div>
    );
};

export default Header;