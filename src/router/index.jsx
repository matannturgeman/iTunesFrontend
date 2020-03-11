import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Provider, KeepAlive } from 'react-keep-alive';
import SearchScreen from '../screens/SearchScreen'
import TuneDetails from '../screens/TuneDetails'
import Top10Screen from '../screens/Top10Screen'

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
                    <Route path="/top10Screen" component={Top10Screen} />
                    <Route path="/tuneDetails" component={TuneDetails} />
                    <Redirect from="/" to="/searchScreen" />
                </Switch>
            </Provider>
        </Router>

    )

}

export default RouterComponent