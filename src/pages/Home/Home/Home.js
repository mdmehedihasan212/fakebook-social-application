import React from 'react'; import Header from '../../Shared/Header/Header';
import './Home.css';
import Feed from '../Feed/Feed';
import RightBar from '../RightBar/RightBar';
import SideBar from '../SideBar/SideBar';
;

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="homeContainer">
                <SideBar></SideBar>
                <Feed></Feed>
                <RightBar></RightBar>
            </div>
        </div>
    );
};

export default Home;