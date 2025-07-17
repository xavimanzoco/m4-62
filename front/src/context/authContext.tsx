"use client";

import { LoginResponse } from "@/services/utils/types";
import React, { createContext, JSX, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuth: boolean | null;
    user: IUser | null;   
    token: string | null;

    saveUserData: (data: any) => void;
    resetUserData: () => void;

};

const AUTH_KEY = "authData";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const saveUserData = (data:LoginResponse) => {
        setUser(data.user);
        setToken(data.token);
        setIsAuth(true);

        localStorage.setItem(
            AUTH_KEY, 
            JSON.stringify(data)
    );

    }

    const resetUserData = () => {
        setUser(null);
        setToken(null);
        setIsAuth(false);

        localStorage.removeItem(AUTH_KEY);
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem
            (AUTH_KEY) || "{}");
        if (storage === undefined || !Object.keys(storage)?.
        length) {
            setIsAuth(false);
            setToken("")
            return;
        }
        
        const storageType = storage as any;
        
        setIsAuth(storage?.login);
        setUser(storage?.user);
        setToken(storageType?.token);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, user, token, saveUserData, resetUserData }}>
        {children}
        </AuthContext.Provider>
    );
}

    export const useAuthContext = () => {
        const context = useContext(AuthContext);

        if (!context) {
            throw new Error("useAuthContext must be used within an AuthProvider");
        }

        return context; }
  
    