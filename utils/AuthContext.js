import React, { createContext, useState, useEffect } from "react";
import { GraphQLClient } from "graphql-request";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const isTokenValid = async (token) => {
        try {
            const endpoint = process.env.API_ENDPOINT;
            const mutation = `
                mutation CheckToken($token: String!) {
                  checkToken(token: $token)
                }
            `;
            const variabels = { token: token };
            const client = new GraphQLClient(endpoint);
            const data = await client.request(mutation, variabels);
            return data.checkToken;
        } catch (error) {
          console.log(error);
        }
      }

    const login = (token) => {
            setToken(token);
            setIsLoggedIn(true)
    };

    const logout = () => {
        setToken(null);
        setIsLoggedIn(false);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const checkLogin = async () => {
            if(token){
                const isvalid = await isTokenValid(token);
                if (isvalid) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            }
            setIsLoading(false);            
        }
        checkLogin();
      }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;