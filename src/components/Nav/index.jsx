import React, { useContext, Fragment } from 'react'
import { UserContext } from '../../context/userContext'
import { useHistory, Link } from 'react-router-dom'
import { LOG_OUT } from '../../constants.json'
import './index.scss'

function Nav(props) {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        dispatch({ type: LOG_OUT })
        history.push('/')
    }

    const renderNavContent = () => (
        <Fragment>
            <Link className="nav-btn" to="/searchScreen">Search</Link>
            <Link className="nav-btn" to="/userManagement">users management table</Link>
            <button className="nav-btn log-out-btn" onClick={logOut}>Log out</button>
        </Fragment>
    )

    return (
        <nav className="nav-container">
            <h3 className="nav-title">
                iTunes App
                {
                    state.user &&
                    state.user.email &&
                    <div className="welcome-statement">
                        Welcome {state.user.email.split('@')[0]}
                    </div>
                }
            </h3>
            {
                state.user &&
                state.user.email &&
                renderNavContent()
            }
        </nav>
    )
}

export default Nav
