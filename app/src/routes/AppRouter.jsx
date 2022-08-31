import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { LoginPage, App, ListDirectors, CreateDirector, UpdateDirector } from '../pages';
import { AuthTemplate, DashboardTemplate } from '../components';
import { AuthProvider } from "../contexts";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ShowDirector } from '../pages/directors/ShowDirector';

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
                                <Route index path='/directors' element={<ListDirectors />} />
                                <Route index path='/directors/create' element={<CreateDirector />} />
                                <Route index path='/directors/edit/:id' element={<UpdateDirector />} />
                                <Route index path='/directors/show/:id' element={<ShowDirector />} />
                            </Route>
                        </Routes>
                    </PrivateRoute>
                } />
            </Routes>
        </AuthProvider >
    )
}
