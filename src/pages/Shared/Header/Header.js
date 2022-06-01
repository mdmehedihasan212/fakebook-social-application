import React from 'react';
import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <span className="logo">
                    Fakebook
                </span>
            </div>
            <div className="headerCenter">
                <div className="searchBar">
                    <BsSearch className="searchIcon" />
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerLinks">
                    <span className="headerLink">Homepage</span>
                    <span className="headerLink">Timeline</span>
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
                </div>
                <img src="/assets/profile/6.jpg" alt="" className="headerImage" />
            </div>
        </div>
    );
};

export default Header;