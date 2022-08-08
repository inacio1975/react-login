import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/user';
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async ()=>{
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const data = await api.validateToken(storageData);
                if(data.user) {
                    setUser(data.user);
                }
            }
        };
        validateToken();
    }, [api]);

    const sigin = async (email: string, password: string) => {
        const data = await api.sigin(email, password);
        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    };

    const signout = async()=>{
        await api.signout();
        setUser(null);
        setToken('');
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{user, sigin, signout}}>
            {children}
        </AuthContext.Provider>
    );
}