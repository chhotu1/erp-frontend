
import React from 'react';
import RouteName from './RouteName';
import { Route, Routes } from "react-router-dom";
import Pages from '../Pages';
import ProtectedRoutes from './ProtectedRoutes';
import { Footer, Header, SideNavbar } from '../Components/Layout';
const AdminRoutes = () => {
    return (
        <>
            <Header />
            <SideNavbar />
            <Routes>
                <Route element={<ProtectedRoutes isLoggedIn={true} />}>
                    <Route exact={true} path={RouteName.HOME} element={<Pages />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}





export default AdminRoutes;
