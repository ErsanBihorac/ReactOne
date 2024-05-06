import React, { Component } from 'react';
import Login from "./components/login";
import Register from "./components/register";

class App extends Component {
    state = {}
    render() {
        return <React.Fragment>
            <Login />
        </React.Fragment>;
    }
}

export default App;