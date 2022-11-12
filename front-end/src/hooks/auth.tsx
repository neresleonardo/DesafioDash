import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

interface IAuthProvider {
    children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
    
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@desafio-falife:logged');

        return !!isLogged;
    });

    // Usuário

    const signIn = (email: string, password: string) => {
        if(email === 'leonardo@gmail.com' && password === '123'){
            localStorage.setItem('@desafio-falife:logged', 'true');
            setLogged(true);
        }else{
            alert('Senha ou usuário inválidos!');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@desafio-falife:logged');
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