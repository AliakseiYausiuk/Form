import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {GetStart} from '../GetStart/GetStart';
import {Login} from '../Login/Login';
import {Signup} from '../Signup/Signup';
import {Error404} from '../Error404/Error';

export const Pages = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<GetStart title={'Welcome'}/>}/>
                <Route path={'/login'} element={<Login title={'Log In'}/>}/>
                <Route path={'/singup'} element={<Signup title={'Sign Up'}/>}/>

                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </>
    )
}