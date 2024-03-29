
import React from 'react';
import RouteName from './RouteName';
import { Route, Routes } from "react-router-dom";
import Pages from '../Pages';
import ProtectedRoutes from './ProtectedRoutes';
import { Footer, Header, SideNavbar } from '../Components/Layout';
import StorageService from '../services/StorageService';
import User from '../Pages/User';
import UserAdd from '../Pages/User/Add';
import UserEdit from '../Pages/User/Edit';

import Cashbook from '../Pages/Cashbook';
import CashbookAdd from '../Pages/Cashbook/Add';
import CashbookEdit from '../Pages/Cashbook/Edit';



const AdminRoutes = () => {
    return (
        <>
            <Header />
            <SideNavbar />
            <Routes>
                <Route element={<ProtectedRoutes isLoggedIn={StorageService.getAccessToken()} />}>
                    <Route exact={true} path={RouteName.HOME} element={<Pages />} />
                    <Route exact={true} path={RouteName.USER} element={<User />} />
                    <Route path={RouteName.USER_CREATE} element={<UserAdd />} />
                    <Route path={`${RouteName.USER}/:id`} element={<UserEdit />} />
                    <Route exact={true} path={RouteName.CASHBOOK} element={<Cashbook />} />
                    <Route path={RouteName.CASHBOOK_CREATE} element={<CashbookAdd />} />
                    <Route path={`${RouteName.CASHBOOK}/:id`} element={<CashbookEdit />} />

                </Route>
            </Routes>
            <Footer />
        </>
    )
}





export default AdminRoutes;
