import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'
import Login from './containers/Login';
import Details from './containers/Details';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route path='/details/:id' component={Details} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Router;