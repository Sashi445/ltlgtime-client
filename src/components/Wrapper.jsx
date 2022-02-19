import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../store';

const Wrapper = (props) => {

    const { user } = useContext(userContext);

    return <>
        {!user ? <Navigate to="/login" /> : (<>{props.children}</>)}
    </>;
}

export default Wrapper;