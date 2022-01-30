import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import './Settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">
                        <b>
                            <i className="settingsDeleteIcon far fa-trash-alt"></i>
                            Delete Account
                        </b>
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                    <img
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <div className="settingsProfileContainer">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                            <span><i>Update Profile</i></span>
                        </div>
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        className="settingsPPInput"
                    />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="sachin" />

                    <label>Email</label>
                    <input type="email" placeholder="sachin@gmail.com" />

                    <label>Password</label>
                    <input type="password" />

                    <button className="settingsSubmit" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}