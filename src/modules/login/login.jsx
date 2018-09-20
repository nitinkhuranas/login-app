import React from "react";
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleEmailChange(evt){
        this.setState({
            email: evt.target.value,
        })
    }

    handlePasswordChange(evt){
        this.setState({
            password: evt.target.value,
        })
    }
    
    handleLoginClick(evt){
        const {
            email,
            password,
        } = this.state;

        this.props.onLoginClick(email, password);
    }

    handleSignUpClick(){
        const {
            email,
            password,
        } = this.state;

        this.props.onSignUpClick(email, password);
    }

    handleKeyUp(evt){
        if(evt.keyCode === 13){
            this.handleLoginClick();
            return;
        }
    }

    render(){    
        const {
            email,
            password,
        } = this.state;

        const {
            isAuthenticated,
            authenticationMsg,
        } = this.props;
        
        if(isAuthenticated){
            return <Redirect to='/' />
        }
    
        return (
                <div className="app-container">
                    <div className="logo"></div>
                    <h3>Login</h3>
                    <div className="login-container">
                        <input
                            type="email"
                            className="text-box"
                            placeholder="Email"
                            value={email}
                            onChange={this.handleEmailChange}
                            onKeyUp={this.handleKeyUp}
                            required
                        />
                        <input
                            type="password"
                            className="text-box"
                            placeholder="Password"
                            value={password} 
                            onChange={this.handlePasswordChange}
                            onKeyUp={this.handleKeyUp}
                            required
                        />
                        <button className="login-button" onClick={this.handleLoginClick}>Login</button>
                        <span className="create-account" onClick={this.handleSignUpClick}>Create Account</span>
                        <span className="auth-msg">{authenticationMsg}</span>
                    </div>    
                </div>
        );
    }
}

export default Login;