import React from 'react';
import './SideBar.css';
import { MdOutlineRssFeed } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BsStopwatch } from 'react-icons/bs';
import { RiMovieFill } from 'react-icons/ri';
import { AiFillFlag } from 'react-icons/ai';
import { MdBloodtype } from 'react-icons/md';
import { FaClinicMedical } from 'react-icons/fa';
import { MdOutlineEmojiEvents } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';

const SideBar = () => {
    return (
        <div className='sideBar'>
            <div className="sideBarWhapper">
                <ul className="sideBarList">
                    <li className="sideBarItem">
                        <MdOutlineRssFeed className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Feed
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <FaUserFriends className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Friends
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <MdGroups className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Groups
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <BsFillChatDotsFill className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Chats
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <RiMovieFill className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Watch
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <BsStopwatch className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Memories
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <AiFillFlag className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Pages
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <MdOutlineEmojiEvents className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Events
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <BsBag className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Jobs
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <MdBloodtype className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Blood Donation
                        </span>
                    </li>
                    <li className="sideBarItem">
                        <FaClinicMedical className='sideBarIcon' />
                        <span className="sideBarIconText">
                            Covid-19 Center
                        </span>
                    </li>
                </ul>
                <div className="sideBarButton">Show More</div>
                <hr className='sideBarHr' />
                <ul className="sideBarFriendList">
                    <li className="sideBarFriend">
                        <img src="/assets/aditional/1.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Md Monir Hossain</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="/assets/aditional/1.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Md Monir Hossain</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="/assets/aditional/1.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Md Monir Hossain</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="/assets/aditional/1.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Md Monir Hossain</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="/assets/aditional/1.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Md Monir Hossain</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="/assets/aditional/1.jpg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarFriendName">Md Monir Hossain</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;