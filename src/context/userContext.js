import React, { useReducer } from 'react'
import userReducer from './reducers/userReducer'
import InitalLogin from '../components/InitalLogin/index'

const initialState = {
    user: null,
    loading: false,
    selectedUser: null
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