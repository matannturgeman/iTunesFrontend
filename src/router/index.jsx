import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import SearchScreen from '../screens/SearchScreen'
import SongDetails from '../screens/SongDetails'

import {
    Provider,
    KeepAlive,
} from 'react-keep-alive';

const RouterComponent = props => {

    const renderComponent = (componentProps, component) => (
        <KeepAlive name={component.name}>
            <SearchScreen {...componentProps} />
        </KeepAlive>
    )

    return (
        <Router>
            <Provider>
                <Switch>
                    <Route
                        path="/searchScreen"
                        render={componentProps => renderComponent(componentProps, SearchScreen)}
                    />
                    <Route path="/songDetails" component={SongDetails} />
                    <Redirect from="/" to="/searchScreen" />
                </Switch>
            </Provider>
        </Router>

    )

}

export default RouterComponent