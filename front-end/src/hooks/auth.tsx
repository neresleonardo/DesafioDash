import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

interface IAuthContext {
    logged: boolean;
    signIn(e: any, email: string, password: string): void;
    signOut(): void;
}

interface IAuthProvider {
    children: React.ReactNode;
}

async function handleAuth(e: any, email: string, password: string) {

    e.preventDefault();
    const data = {
        email,
        password,
    };

    try {

        const response = await api.post('auth', data);
        return response.data;

    } catch (err) {
        alert("Usuário ou senha invalida");
    }
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {

    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@desafio-falife:logged');

        return !!isLogged;
    });

    // Usuário
    const signIn = async (e: any, email: string, password: string) => {
        const result = await handleAuth(e, email, password);
        
        if (result) {
            localStorage.setItem('@desafio-falife:token', result.token);
            localStorage.setItem('@desafio-falife:client', JSON.stringify(result.client));
            localStorage.setItem('@desafio-falife:logged', 'true');
            setLogged(true);
        }
    }

    const signOut = () => {
        localStorage.removeItem('@desafio-falife:logged');
        localStorage.removeItem('@desafio-falife:token');
        localStorage.removeItem('@desafio-falife:client');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };