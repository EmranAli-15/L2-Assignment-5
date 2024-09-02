import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import useUserSecure from '../hooks/useUserSecure';

export default function UserPrivet({ children }: { children: ReactElement }) {

    const isLoggedIn = useUserSecure();

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
