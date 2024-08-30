import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
    role: string;
}

export default function useAdminSecure() {
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState<string | null>(null);

    const { accessToken } = useAppSelector(state => state.auth);

    useEffect(() => {
        if (accessToken) {
            const decoded = jwtDecode<CustomJwtPayload>(accessToken);
            setRole(decoded.role);
        }
        setLoading(false); // Ensure loading is set to false after processing
    }, [accessToken]); // Runs whenever accessToken changes

    if (loading) {
        return 'loading'; // Indicate loading state
    }

    if (!role && !loading) {
        return 'exit'; // User does not have a role
    }

    if (role && !loading) {
        return 'access';
    }
}
