import React, { useContext, Fragment } from 'react'
import { UserContext } from '../../context/userContext'
import { useHistory } from 'react-router-dom'
import { LOG_OUT } from '../../constants.json'
import './index.scss'

function Nav(props) {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        dispatch({ type: LOG_OUT })
        history.push('/')
    }

    return (
        <nav className="nav-container">
            {
                state.user &&
                state.user.email &&
                <Fragment>
                    <div className="welcome-statement">
                        Welcome {state.user.email.split('@')[0]}
                    </div>
                    <button className="log-out-btn" onClick={logOut}>Log out</button>
                </Fragment>
            }
        </nav>
    )
}

export default Nav
