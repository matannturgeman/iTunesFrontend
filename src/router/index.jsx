import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import SearchScreen from '../screens/SearchScreen'
import Details from '../screens/Details'

const RouterComponent = props => {

    return (
        <Router>
            <Switch>
                <Route path="/searchScreen">
                    <SearchScreen />
                </Route>
                <Route path="/details">
                    <Details />
                </Route>
                <Redirect from="/" to="/searchScreen" />
            </Switch>
        </Router>
    )

}

export default RouterComponent