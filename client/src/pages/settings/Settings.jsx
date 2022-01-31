import React, { useContext, useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import './Settings.css'
import axios from "axios"

export default function Settings() {

    const {user, dispatch} = useContext(Context);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState(false);
    const [success, setSuccess] = useState(false);

    const folder = "http://localhost:5000/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ 
            type: "UPDATE_START" 
        });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;

            try {
                await axios.post("/upload", data);
            } catch (err) {
                
            }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ 
                type: "UPDATE_SUCCESS", 
                payload: res.data 
            });
        } catch (err) {
            dispatch({ 
                type: "UPDATE_FAILURE" 
            });
        }
    };

    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <Link to="/confirmation" className='link'>
                        <span className="settingsDeleteTitle">
                            <b>
                                <i className="settingsDeleteIcon far fa-trash-alt"></i>
                                Delete Account
                            </b>
                        </span>
                    </Link>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                    {
                        file ? 
                        (
                            <img
                                src={URL.createObjectURL(file)}
                                alt=""
                            />
                        )
                        :
                        (
                            (user.profilePic === "") ? 
                            (
                                <img
                                    src="https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png"
                                    alt=""
                                />
                            )
                            :
                            (
                                <img
                                    src={folder + user.profilePic}
                                    alt=""
                                />
                            )
                        )
                    }
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
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    </div>
                    <label>Username</label>
                    <input 
                        type="text"
                        value={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="settingsSubmit" type="submit">
                        Update
                    </button>
                    {success && (
                        <span
                        style={{ color: "green", textAlign: "center", marginTop: "20px" }}
                        >
                        Profile has been updated...
                        </span>
                    )}
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}