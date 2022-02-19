import React, { useState, useContext } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from "axios";
import { userContext } from './../store';
import { serverUrl } from '../serverConfig';
import AuthWrapper from './AuthWrapper';

const LoginComponent = () => {

    const navigate = useNavigate();

    const { user, setUser } = useContext(userContext);

    const initialState = {
        email: "",
        password: ""
    }

    const [formState, setFormState] = useState(initialState);

    const handleOnChange = (e) => {
        setFormState(s => ({ ...s, [e.target.id]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        //TODO : handle login 
        axios.post(`${serverUrl}users/login`, formState).then(res => {
            console.log(res.data);
            setUser(res.data);
            navigate("/");
        }).catch(err => {
            alert(err.message);
        })
    }

    return <>
        {
            !user ? <AuthWrapper><div className='container'>
                <div className="card shadow-4">
                    <div className="card-body">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                            <input className='form-control' type="email" name="email" id="email" placeholder="email" value={formState.email} onChange={(e) => handleOnChange(e)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input className='form-control' type="password" name="password" id="password" placeholder="Passsword" value={formState.password} onChange={(e) => handleOnChange(e)} />
                            </div>
                            <div className="fw-strong mb-3 text-center">
                                Don't have an account? <Link to="/register">Register</Link>
                            </div>
                            <button className='btn btn-primary w-full' type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div></AuthWrapper> : <Navigate to="/" />
        }</>;
}

export default LoginComponent;