import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import useAdminSecure from '../hooks/useAdminSecure';

export default function PrivetRoute({ children }: { children: ReactElement }) {

    const isLoggedIn = useAdminSecure();

    if(isLoggedIn === 'loading'){
        return <h1>Loading...</h1>
    };
    if(isLoggedIn === 'exit'){
        return <Navigate to="/"></Navigate>
    };
    if(isLoggedIn === 'access'){
        return children;
    }
};
