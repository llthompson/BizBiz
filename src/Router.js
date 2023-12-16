//Router.js

import React from 'react';
import { Switch, Route } from 'react-router';
import Listings from './containers/Listings';
import Login from './containers/Login';
import Details from './containers/Details';
import Logout from './components/Logout'; 
import AddBusiness from './components/AddBusiness';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/details/:id" component={Details} />
            <Route path="/add" component={AddBusiness} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} /> 
        </Switch>
    );
};

export default Router;
