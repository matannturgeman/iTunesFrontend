import React, { useReducer, Fragment } from 'react'
import {
    LOGIN_USER, LOGIN_USER_STORAGE_KEY, START_LOAD_USER, END_LOAD_USER,
    LOG_OUT
} from '../constants.json'
import InitalLogin from '../components/InitalLogin'
import { saveToStorage, clearFromStorage } from '../services/utilsService'

const initialState = {
    user: null,
    loading: false
}

const UserContext = React.createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case START_LOAD_USER:
            return { ...state, loading: true }
        case END_LOAD_USER:
            if (action.error) return { ...state, loading: false }
            return { ...state, loading: false, user: action.user }
        case LOGIN_USER:
            saveToStorage(LOGIN_USER_STORAGE_KEY, { id: action.user._id })
            return { ...state, user: action.user };
        case LOG_OUT:
            clearFromStorage(LOGIN_USER_STORAGE_KEY)
            return { ...state, user: null };
        default:
            return { ...state };
    }
};

function UserProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <InitalLogin {...props} />
        </UserContext.Provider>
    );
}


export { UserContext, UserProvider };