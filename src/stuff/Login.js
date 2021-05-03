import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Route>
                    <Link to="/register">register</Link>
                </Route>
            </div>
        )
    }
}

export {Login}