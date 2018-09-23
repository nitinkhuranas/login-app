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
        return (
            <div className="header">
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        );
    }   
}

export default Header;