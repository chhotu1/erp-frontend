import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../Pages/Login';
import RouteName from './RouteName';

const GeneralRoutes = () => {
    return (
        <Routes>
            <Route path={RouteName.LOGIN} name="login" element={<Login />} />
        </Routes>
    )
}

export default GeneralRoutes
