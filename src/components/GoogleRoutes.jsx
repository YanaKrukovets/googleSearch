import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from "./Results";

export const GoogleRoutes = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route path='/' element={<Navigate from='/' to='/search' />}/>
                <Route path='/search' element={<Results />}/>
                <Route path='/images' element={<Results />}/>
            </Routes>
        </div>
    );
}