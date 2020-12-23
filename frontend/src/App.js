import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import Cart from './components/Cart';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/">
                        <Navbar/>
                    </Route>
                    <Route exact path ="/signup">
                        <Register/>
                    </Route>
                    <Route exact path ="/login" >
                        <Login/>
                    </Route>
                    <Route exact path ="/contactus" >
                        <Contact/>
                    </Route>
                    <Route exact path ="/cart" >
                        <Cart/>
                    </Route>
                </Router>

            </div>
        )
    }
}

