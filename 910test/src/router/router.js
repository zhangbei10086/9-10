import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import Home from '../components/home/home';
import Detail from '../components/detail/detail';

class MyRouter extends Component {
    render() {
        return (
            <div className="myrouter">
                <Route path="/home" component={Home}></Route>
                <Route path="/detail" componbent={Detail}></Route>
                <Redirect to="/home"></Redirect>
            </div>
        );
    }
}

export default MyRouter;