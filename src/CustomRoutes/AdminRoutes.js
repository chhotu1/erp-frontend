
import React from 'react';
import RouteName from './RouteName';
import { Route, Routes } from "react-router-dom";
import Pages from '../Pages';
import ProtectedRoutes from './ProtectedRoutes';
import { Footer, Header, SideNavbar } from '../Components/Layout';
import StorageService from '../services/StorageService';
import User from '../Pages/User';

const AdminRoutes = () => {
    return (
        <>
            <Header />
            <SideNavbar />
            <Routes>
                <Route element={<ProtectedRoutes isLoggedIn={StorageService.getAccessToken()} />}>
                    <Route exact={true} path={RouteName.HOME} element={<Pages />} />
                    <Route exact={true} path={RouteName.USER} element={<User />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}





export default AdminRoutes;
