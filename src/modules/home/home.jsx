import React from "react";
import { Redirect } from 'react-router-dom';
import Output from "../output/container";
import Input from "../input/container";

function Home(props) {
    if(!props.isAuthenticated){
        return <Redirect to='/login' />
    }
    return (
        <div>
            <h1>Find info of all commits between 2 commits</h1>
                <div>
                    <Input/>
                    <Output/>
                </div>
        </div>
    );
}

export default Home;