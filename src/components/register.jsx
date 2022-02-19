import React, { useState, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import { serverUrl } from './../serverConfig';
import { userContext } from '../store';
import AuthWrapper from './AuthWrapper';

const RegisterComponent = () => {
    const navigate = useNavigate();

    const initialState = {
        name: null,
        email: null,
        password: null
    }

    const { user } = useContext(userContext);

    const [formState, setFormState] = useState(initialState);

    const handleOnChange = (e) => {
        setFormState(s => ({ ...s, [e.target.id]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        // TODO : handle register
        axios.post(`${serverUrl}users/register`, formState).then(res => {
            console.log(res.data);
            navigate("/login");
        }).catch(err => {
            console.log(err.message);
            alert(err.message);
        })
    }

    return <>
        {
            !user ? <AuthWrapper><div className='container'>
                <div className="card shadow-4">
                    <div className="card-body"><form action="" method="post" onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input className='form-control' type="text" name="name" id="name" placeholder="name" value={formState.name} onChange={(e) => handleOnChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input className='form-control' type="email" name="email" id="email" placeholder="email" value={formState.email} onChange={(e) => handleOnChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className='form-control' type="password" name="password" id="password" placeholder="Passsword" value={formState.password} onChange={(e) => handleOnChange(e)} />
                        </div>
                        <div className="mb-3 text-center">
                            Have an account ? <Link to="/login" >Login</Link>
                        </div>
                        <button className='btn btn-primary w-full' type="submit">Register</button>
                    </form></div>
                </div>
            </div></AuthWrapper> : <Navigate to="/" />
        }</>;
}

export default RegisterComponent;