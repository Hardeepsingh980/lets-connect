import { useState, createContext, useReducer, useEffect } from "react";
import ReactDOM from "react-dom/client";
import reducer from './reducer';
import { CHANGE_ERROR, CHANGE_TOKEN, CHANGE_LOADING, CHANGE_USER } from './actions';
import axios from 'axios';
import { useAlert } from 'react-alert'


const UserContext = createContext();

const initialState = {
    user: null,
    token: null,
    isLoading: true,
    error: null,
};

const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(reducer, initialState);
    const alert = useAlert()

    const URL = 'http://192.168.197.18:8088';


    const init = async () => {
        console.log('init');
        const token = localStorage.getItem('token');
        if (token) {
        console.log('token');

            dispatch({
                type: CHANGE_LOADING,
                payload: true,
            });
            console.log('loder on');
            await getUser(token);
            dispatch({
                type: CHANGE_LOADING,
                payload: false,
            });
            console.log('loder off');

        }
    }

    const getUser = async (token) => {


        try {
            const response = await axios.get(`${URL}/api/users/me/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            });

            dispatch({
                type: CHANGE_USER,
                payload: response.data,
            });
            dispatch({
                type: CHANGE_TOKEN,
                payload: token,
            });
            
            return response.data;
        } catch (error) {
            console.log(error);
        }
        

    }


    const signInWithGoogle = async (access_token) => {
        dispatch({ type: CHANGE_LOADING, payload: true });
        try {
            const response = await axios.post(`${URL}/dj-rest-auth/google/`, {
                access_token,
            });
            
            localStorage.setItem('token', response.data.key);

            dispatch({ type: CHANGE_TOKEN, payload:  response.data.key });
            return true;
            
        } catch (error) {
            console.log(error);
            alert.error('Something went wrong');
            return false;
        } finally {
            dispatch({ type: CHANGE_LOADING, payload: false });
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <UserContext.Provider value={{ userState, signInWithGoogle }}>
        {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };