import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super();
    }
    state = {}

    handleSubmit = (event) => {
        let email = document.getElementById("email-input-login").value
        let password = document.getElementById("password-input-login").value
        event.preventDefault();
        console.log(email, password);
        this.props.history.push('/dashboard');
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="inputs-login">
                <div className="mb-3">
                    <label htmlFor="email-input-login" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email-input-login" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password-input-login" className="form-label">Passwort</label>
                    <input type="text" className="form-control" id="password-input-login" placeholder="Passwort" />
                </div>
            </div>
            <div className="buttons-login">
                <button type='submit'>anmelden</button>
                <button ><Link to="/register" className='button'>registrieren</Link></button>
            </div>
        </form>
    }
}

export default Login