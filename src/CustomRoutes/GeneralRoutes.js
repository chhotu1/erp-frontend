import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../Pages/Login';

const GeneralRoutes = () => {
    return (
        <Routes>
            <Route path="/public/login" name="login" element={<Login />} />
        </Routes>
    )
}

export default GeneralRoutes
