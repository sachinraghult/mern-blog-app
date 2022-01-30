import React from 'react';
import './Write.css'

export default function Write() {
    return (
        <div className='write'>
            <div className="writeTitle">Write a blog ✒️</div>
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display: "none"}} />
                    <input type='text' className='writeInput' autoFocus={true} placeholder='Title' />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder='Tell your story...' 
                        type='text' 
                        className='writeInput writeText' >
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}