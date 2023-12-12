import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/HomeOld'
import Car from './containers/Car'
import Dashboard from './containers/Dashboard'
import Listings from './containers/Listings'
import Login from './components/Login'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/listings" component={Listings} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Router;