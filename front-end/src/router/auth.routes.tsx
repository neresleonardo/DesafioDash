import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Register from '../pages/Register';

import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignIn/>}  />
        <Route path="/register" element={<Register/>}  />
    </Routes>
);

export default AuthRoutes;