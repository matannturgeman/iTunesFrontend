import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Provider, KeepAlive } from 'react-keep-alive';
import Nav from '../components/Nav'
import { UserContext } from '../context/userContext'

import SearchScreen from '../screens/SearchScreen'
import TuneDetails from '../screens/TuneDetails'
import Top10Screen from '../screens/Top10Screen'
import AuthScreen from '../screens/AuthScreen'
import SignUpScreen from '../screens/SignUpScreen'
import UserManagementScreen from '../screens/UserManagementScreen'

import './index.scss'

const RouterComponent = props => {
    const {state, dispatch} = useContext(UserContext)

    const renderComponent = (componentProps, component) => (
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
                        <Route path="/authScreen" component={AuthScreen} />
                        <Route path="/signUp" component={SignUpScreen} />
                        <Route path="/userManagement" component={UserManagementScreen} />
                        <Route
                            path="/searchScreen"
                            render={componentProps => renderComponent(componentProps, SearchScreen)}
                        />
                        <Route path="/top10Screen" component={Top10Screen} />
                        <Route path="/tuneDetails" component={TuneDetails} />
                        <Redirect from="/" to={state.user ? "/searchScreen" :"/authScreen"} />
                    </Switch>
                </Provider>
            </div>

        </Router>

    )

}

export default RouterComponent