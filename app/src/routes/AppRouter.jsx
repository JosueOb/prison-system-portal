import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { LoginPage, App } from '../pages';
import { AuthTemplate, DashboardTemplate } from '../components';
import { AuthProvider } from "../contexts";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    return (
        <AuthProvider>
            <Routes>
                <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route element={<AuthTemplate />}>
                                <Route path='/*' element={<LoginPage />} />
                            </Route>
                        </Routes>
                    </PublicRoute>
                } />

                <Route path='/*' element={
                    <PrivateRoute>
                        <Routes>
                            <Route element={<DashboardTemplate />}>
                                <Route index path='/' element={<App />} />
                            </Route>
                        </Routes>
                    </PrivateRoute>
                } />
            </Routes>
        </AuthProvider >
    )
}
