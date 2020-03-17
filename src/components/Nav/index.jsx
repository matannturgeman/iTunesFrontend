import React, { useContext, Fragment } from 'react'
import { UserContext } from '../../context/userContext'
import { useHistory, Link } from 'react-router-dom'
import { LOG_OUT } from '../../constants.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

function Nav(props) {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        dispatch({ type: LOG_OUT })
        history.push('/')
    }

    const renderNavContent = () => (
        <div className="nav-btns-container">
            <Link className="nav-btn" to="/search">Search</Link>
            <Link className="nav-btn" to="/userManagement">Users Table</Link>
            <FontAwesomeIcon className="log-out-btn" icon={faSignOutAlt} onClick={logOut} />
        </div>
    )

    const isLogedIn = state.user && state.user.email;
    const username = isLogedIn ?
        state.user.email.split('@')[0]
        : ''

    return (
        <nav className="nav-container">
            <h3 className="nav-title">
                iTunes App
                {
                    isLogedIn &&
                    <div className="welcome-statement">
                        Welcome {username}
                    </div>
                }
            </h3>
            {
                isLogedIn &&
                renderNavContent()
            }
        </nav>
    )
}

export default Nav
