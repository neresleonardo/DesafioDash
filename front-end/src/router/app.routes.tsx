import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import Annotation from '../pages/Annotation';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/annotation" element={<Annotation/>} />
        </Routes>
    </Layout>
);

export default AppRoutes;