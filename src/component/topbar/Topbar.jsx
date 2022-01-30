import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css'

export default function Topbar() {

    const user = true;

    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to="/" className='link'>HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/" className='link'>ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/" className='link'>CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/write" className='link'>WRITE</Link>
                    </li>
                    <li className='topListItem'>
                            {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
            {
                user ? (
                    <Link className="link" to="/settings">
                        <img 
                            className='topImg' 
                            src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg' 
                            alt='' 
                        />
                    </Link>
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link to="/login" className='link'>LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to="/register" className='link'>REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fas fa-search"></i> 
            </div>
        </div>
    );
}
