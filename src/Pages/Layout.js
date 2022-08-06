import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Routers from '../Routers/Routers';

const Layout = () => {
    return (
        <>
            <Header />

            <div className="">
                <Routers />
            </div>
            <Footer />
        </>
    );
};

export default Layout;