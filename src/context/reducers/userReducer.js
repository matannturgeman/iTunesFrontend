import { saveToStorage, clearFromStorage } from '../../services/utilsService'
import {
    LOGIN_USER, LOGIN_USER_STORAGE_KEY, START_LOAD_USER,
    END_LOAD_USER, LOG_OUT, SELECT_USER
} from '../../constants.json'

const userReducer = (state, action) => {
    switch (action.type) {
        case START_LOAD_USER:
            return { ...state, loading: true }
        case END_LOAD_USER:
            if (action.error) {
                return { ...state, loading: false }
            }
            return { ...state, loading: false, user: action.user }
        case LOGIN_USER:
            saveToStorage(LOGIN_USER_STORAGE_KEY, { id: action.user._id })
            return { ...state, user: action.user };
        case LOG_OUT:
            clearFromStorage(LOGIN_USER_STORAGE_KEY)
            return { ...state, user: null };
        case SELECT_USER:
            return { ...state, selectedUser: action.selectedUser };
        default:
            return { ...state };
    }
};

export default userReducer