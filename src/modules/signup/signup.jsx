import React from "react";
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }

    handleNameChange(evt){
        this.setState({
            name: evt.target.value,
        })
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

    handleConfirmPasswordChange(evt){
        this.setState({
            confirmPassword: evt.target.value,
        })
    }

    handleSignupClick(){
        const {
            name,
            email,
            password,
        } = this.state;

        this.props.onSignupClick(name, email, password);
    }

    render(){    
        const {
            name,
            email,
            password,
            confirmPassword,
        } = this.state;

        const {
            signupMsg,
            isSuccess
        } = this.props;

        if(isSuccess){
            return <Redirect to='/login' />
        }
        
        return (
                <div className="app-container">
                    <div className="logo"></div>
                    <h3>Login</h3>
                    <div className="login-container">
                        <input
                            type="text"
                            className="text-box"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleNameChange}
                            required
                        />
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
                            required
                        />
                        <input
                            type="password"
                            className="text-box"
                            placeholder="Confirm Password"
                            value={confirmPassword} 
                            onChange={this.handleConfirmPasswordChange}
                            required
                        />
                        <span className="create-account" onClick={this.handleSignupClick}>Signup</span>
                        <span className="auth-msg">{signupMsg}</span>
                    </div>    
                </div>
        );
    }
}

export default Signup;