import React, {useEffect} from 'react';
import {RouteNav} from './routing/RouteNav';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import {logIn} from './components/Auth/feature/authSlice';
import {useAppDispatch} from './store/hooks';
import {useAppState} from './store/hooks';
import {selectIsAuthorised} from './components/Auth';

const AppRoot = () => {
    const dispatch = useAppDispatch();
    const isLogin = useAppState(selectIsAuthorised);

    useEffect(() => {
        if (localStorage.getItem('auth') === 'true' && !isLogin) {
            dispatch(logIn({status: true}))
        }
    }, [dispatch, isLogin]);

    return (
        <>
            <MainLayout>
                <RouteNav/>
            </MainLayout>
        </>
    );
};

export default (AppRoot);
