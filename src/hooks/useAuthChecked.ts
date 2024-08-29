import { useEffect, useState } from 'react'
import { userLoggedIn } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

export default function useAuthChecked() {

    const dispatch = useAppDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem('auth');

        if (localAuth) {
            const auth = JSON.parse(localAuth);

            const user = auth.user
            const data = {
                data: user,
                token: auth.accessToken
            };

            if (auth?.accessToken && auth?.user) {
                dispatch(userLoggedIn(data))
            }
        }
        setAuthChecked(true);
    }, [])

    return authChecked;

};
