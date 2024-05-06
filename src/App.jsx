import React, { Component } from 'react';
import Login from "./components/login";
import Register from "./components/register";
import { Routing } from './Routes';
class App extends Component {
    state = {}

    render() {
        return <div id="page">
            <Routing />
        </div>
    }
}

export default App;