import React, { useState, useContext } from 'react';
import axios from 'axios';
import { serverUrl } from './../serverConfig';
import { userContext } from './../store';
import { useNavigate } from 'react-router-dom';

const CreatePostComponent = () => {

    const navigate = useNavigate();

    const { user } = useContext(userContext);

    const [postContent, setPostContent] = useState("");

    const [image, setImage] = useState(null);

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('postContent', postContent);
        formData.append('image', image);

        navigator.geolocation.getCurrentPosition((position) => {
            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude;
            console.log(latitude, longitude)
            formData.append('longitude', longitude);
            formData.append('latitude', latitude);

            axios.post(`${serverUrl}posts`, formData, {
                headers: {
                    "content-type": "multipart/formdata",
                    "Authorization": `Bearer ${user.accessToken}`
                }
            }).then(res => {
                console.log(res.data);
                navigate("");
            }).catch(err => {
                console.error(err.message);
                alert(err.message);
            })

        }, (err) => {
            console.log(err.message)
        });

    }

    return (<div className="container-fluid">
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Post Content</label>
                <textarea onChange={handlePostContentChange} value={postContent} name="postContent" id="postContent" placeholder="Enter your post content here!!" className="form-control"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input className='form-control' type="file" name="image" id="image" onChange={handleImageChange} />
            </div>
            <div className="text-end">
                <button className='btn btn-primary' type="submit">Post</button>
            </div>
        </form>
    </div>);
}

export default CreatePostComponent;