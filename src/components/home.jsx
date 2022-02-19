import React, { useContext, useEffect } from 'react';
import { userContext, postsContext } from '../store';
import axios from "axios";
import { serverUrl } from './../serverConfig';
import Wrapper from './Wrapper';
import { Link } from "react-router-dom";
import PostComponent from './PostComponent';

const Home = () => {

    const { user } = useContext(userContext);

    const { posts, setPosts } = useContext(postsContext);

    useEffect(() => {
        axios.get(`${serverUrl}posts`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }).then(res => {
            console.log(posts);
            setPosts(res.data);
        }).catch(err => {
            console.log(err.message);
            alert(err.message);
        })
    }, []);

    return <Wrapper><div className='container py-3'>
        {/* <h3>Hello, {user.name}  !!👋</h3> */}
        <div className="my-3 text-end">
            <Link className='btn btn-primary' to="/create">+ Create Post</Link>
        </div>
        <div className="container py-3">
            {posts.map(post => (<PostComponent key={post._id} post={post} />))}
        </div>
    </div></Wrapper>;
}

export default Home;