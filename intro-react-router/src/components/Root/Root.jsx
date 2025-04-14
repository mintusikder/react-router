import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location)
    return (
        <div>
            <Header></Header>
            {isNavigation && <p>loa.....</p>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;