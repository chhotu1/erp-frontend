import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../Pages/Login';
import StorageService from '../services/StorageService';
import AuthRoutes from './AuthRoutes';
import RouteName from './RouteName';

const GeneralRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthRoutes isLoggedIn={StorageService.getAccessToken()} />}>
                <Route path={RouteName.LOGIN} name="login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default GeneralRoutes
