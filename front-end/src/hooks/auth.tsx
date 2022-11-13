import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

interface IAuthProvider {
    children: React.ReactNode;
}

async function handleAuth( email: string, password: string){

    const data = {
        email,
        password,
    };

    try {

        const response = await api.post('auth', data);
              console.log(">>",response)
            return response.data;

    }catch(err) {
        alert("Deu erro")
    }
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
    
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@desafio-falife:logged');

        return !!isLogged;
    });

    // Usuário
        const signIn = async (email: string, password: string) => {

            const result = await handleAuth(email, password);

            localStorage.setItem('@desafio-falife:token', result);
            localStorage.setItem('@desafio-falife:logged', 'true');
             setLogged(true);

    }

    const signOut = () => {
        localStorage.removeItem('@desafio-falife:logged');
        localStorage.removeItem('@desafio-falife:token');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };