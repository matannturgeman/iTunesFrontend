import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Provider, KeepAlive } from 'react-keep-alive';

import { UserContext } from '../context/userContext'
import Nav from '../components/Nav'

import UserManagementScreen from '../screens/UserManagementScreen'
import SignUpScreen from '../screens/SignUpScreen'
import SearchScreen from '../screens/SearchScreen'
import TuneDetails from '../screens/TuneDetails'
import Top10Screen from '../screens/Top10Screen'
import AuthScreen from '../screens/AuthScreen'

import './index.scss'

const RouterComponent = props => {
    const { state, dispatch } = useContext(UserContext)

    const keepCmpAlive = (componentProps, component) => (
        <KeepAlive name={component.name}>
            <SearchScreen {...componentProps} />
        </KeepAlive>
    )

    return (
        <Router>
            <Nav />
            <div className="nav-view">
                <Provider>
                    <Switch>
                        <Route path="/auth" component={AuthScreen} />
                        <Route path="/signUp" component={SignUpScreen} />
                        <Route path="/userManagement" component={UserManagementScreen} />
                        <Route path="/search" render={componentProps => keepCmpAlive(componentProps, SearchScreen)} />
                        <Route path="/top10" component={Top10Screen} />
                        <Route path="/tuneDetails" component={TuneDetails} />
                        <Redirect from="/" to={state.user ? "/search" : "/auth"} />
                    </Switch>
                </Provider>
            </div>
        </Router>
    )
}

export default RouterComponent