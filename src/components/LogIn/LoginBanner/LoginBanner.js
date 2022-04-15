import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../../../logos/Group 1329.png'

const LoginBanner = () => {
    return (
        <div>
            <Image style={{ height: '100px' }} src={Logo}></Image>
        </div>
    );
};

export default LoginBanner;