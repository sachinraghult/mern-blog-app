import React from 'react';
import Header from '../../component/header/Header';
import Posts from '../../component/posts/Posts';
import Sidebar from '../../component/sidebar/Sidebar';
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <Header/>
            <div className='homeContainer'>
                <Posts/>
                <Sidebar/>
            </div>
        </div>
    );
}
