import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Register extends Component {
    state = {}
    render() {
        return <div>
            <div className="inputs-login">
                <div className="mb-3">
                    <label htmlFor="name-input-login" className="form-label">Name</label>
                    <input type="email" className="form-control" id="name-input-login" placeholder="Name" />
                </div>
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
                <button ><Link to="/" className='button'>registrierung abschließen</Link></button>
            </div>
        </div>
    }
}

export default Register;