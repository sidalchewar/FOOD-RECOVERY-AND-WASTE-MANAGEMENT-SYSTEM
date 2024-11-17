import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../inc/Header';
import Footer from '../../inc/Footer';
import LoginHeader from '../../inc/LoginHeader';
function LoginLayout() {
    return (
        <div>
            <LoginHeader/>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>        
        </div>
    );
}

export default LoginLayout;