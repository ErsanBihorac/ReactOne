import React, { Component } from 'react';

class Login extends Component {
    state = {}

    render() {
        return <div>
            <div className="inputs-login">
                <div className="mb-3">
                    <label htmlFor="email-input-login" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email-input-login" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password-input-login" className="form-label">Passwort</label>
                    <input type="email" className="form-control" id="password-input-login" placeholder="Passwort" />
                </div>
            </div>
            <div className="buttons-login">
                <button>anmelden</button>
                <button>registrieren</button>
            </div>
        </div>
    }
}

export default Login