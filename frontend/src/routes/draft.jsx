import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignIn from '../screens/SignIn';
import Details from '../screens/Details';

const DraftRoutes = () => (
    <Routes>
        <Route exact path="" element={<SignIn/>}/>
        <Route path="/details" element={<Details/>}/>
    </Routes>
);

export default DraftRoutes;