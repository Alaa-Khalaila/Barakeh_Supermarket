import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/">
                        <Navbar/>
                    </Route>
                    <Route exact path ="/signup">
                        <Register />
                    </Route>
                    <Route exact path ="/login" >
                        <Login />
                    </Route>
                    <Route exact path ="/contactus" >
                        <Contact/>
                    </Route>
                </Router>

            </div>
        )
    }
}

