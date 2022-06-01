import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';

const Header = () => {
    return (
        <div>
            <div className="headerContainer">
                <div className="headerLeft">
                    <span className="logo">
                        Fakebook
                    </span>
                </div>
                <div className="headerCenter">
                    <div className="searchBar">
                        <input placeholder="Search for friend, post or video" className="searchInput" />
                        <BsSearch />
                    </div>
                </div>
                <div className="headerRight">
                    <div className="headerLinks">
                        <div className="headerLink">Homepage</div>
                        <div className="headerLink">Timeline</div>
                    </div>
                    <div className="headerIcons">
                        <div className="headerIconItem">
                            <BsFillPersonFill />
                            <span className="headerIconBadge">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;