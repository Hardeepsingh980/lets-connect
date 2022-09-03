import { useState, createContext, useReducer } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
};

const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(reducer, initialState);

    const URL = 'http://37a9-210-89-61-2.ngrok.io';


    const init = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = await getUser(token);
        }
    }

    const getUser = async (token) => {
        const response = await fetch(`${URL}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (data.success) {
            dispatch({
                type: CHANGE_USER,
                payload: data.user,
            });
            dispatch({
                type: CHANGE_TOKEN,
                payload: token,
            });
        }
    }


    const signInWithGoogle = async (access_token) => {
        dispatch({ type: CHANGE_LOADING, payload: true });
        try {
            const response = await axios.post(
                `${URL}/dj-rest-auth/google/`,
                {
                    access_token,
                }
            );

            localStorage.setItem('token', response.data.key);
            dispatch({ type: CHANGE_TOKEN, payload: response.data.key });
            
        } catch (error) {
            dispatch({ type: CHANGE_ERROR, payload: error.message });
        } finally {
            dispatch({ type: CHANGE_LOADING, payload: false });
        }
    }





    
    return (
        <UserContext.Provider value={{ userState }}>
        {children}
        </UserContext.Provider>
    );
}