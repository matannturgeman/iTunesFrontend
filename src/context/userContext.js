import React, { useReducer, Fragment } from 'react'
import userReducer from './reducers/userReducer'
import InitalLogin from '../components/InitalLogin'

const initialState = {
    user: null,
    loading: false
}

const UserContext = React.createContext(initialState);

function UserProvider(props) {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <InitalLogin {...props} />
        </UserContext.Provider>
    );
}


export { UserContext, UserProvider };