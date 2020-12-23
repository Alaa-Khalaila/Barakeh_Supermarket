import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Register from './components/Register';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Register/>
            </div>
        )
    }
}

