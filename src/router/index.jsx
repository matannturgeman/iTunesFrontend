import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import SearchScreen from '../screens/SearchScreen'
import SongDetails from '../screens/SongDetails'

const RouterComponent = props => {

    return (
        <Router>
            <Switch>
                <Route path="/searchScreen" component={SearchScreen} />
                <Route path="/songDetails" component={SongDetails} />
                <Redirect from="/" to="/searchScreen" />
            </Switch>
        </Router>
    )

}

export default RouterComponent