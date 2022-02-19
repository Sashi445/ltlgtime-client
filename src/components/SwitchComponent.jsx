
import { useContext } from 'react';
import { userContext } from './../store';
import Home from './home';
import LoginComponent from './login';

const SwitchComponent = () => {

    const { user } = useContext(userContext);

    return (<> {!user ? <LoginComponent /> : <Home />}</>);
}

export default SwitchComponent;