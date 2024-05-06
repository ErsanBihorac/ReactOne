import React, { Component } from 'react';
import Login from "./components/login";
import Register from "./components/register";

class App extends Component {
    state = {}

    render() {
        return <div id="page">
            <Login />
        </div>;
    }
}

export default App;