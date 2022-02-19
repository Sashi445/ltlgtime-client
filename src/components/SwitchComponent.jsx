import { useContext } from 'react';
import { userContext } from './../store';
import Home from './home';
import { Navigate } from 'react-router-dom';

const SwitchComponent = () => {
    const { user } = useContext(userContext);
    return (<> {!user ? <Navigate to="/login" /> : <Home />}</>);
}

export default SwitchComponent;