import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props)
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick(){
        this.props.onLogoutClick();
    }

    render(){
        const { userName } = this.props;
console.log("in header = " + userName)
        return (
            <div className="header">
                <span>Hi {userName}</span>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        );
    }   
}

export default Header;