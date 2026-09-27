import Header from '@/components/shared/Header';
import Navber from '@/components/shared/Navber';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <Navber></Navber>
            {children}
        </>
    );
};

export default MainLayout;