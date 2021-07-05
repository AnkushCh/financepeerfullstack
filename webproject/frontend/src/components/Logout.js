import React , { Component } from 'react';
import { Redirect, } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { Button } from 'reactstrap';


class Logout extends Component{
    state = {
        navigate: false
    };


    logout = () => {
        localStorage.clear("access_token");
        this.setState({ navigate: true});
    };

    render(){
        const { navigate } = this.state;

        if (navigate){
            return <BrowserRouter><Redirect to='/' push={true} /></BrowserRouter>
        }

        return <Button className='btn btn-danger' onClick={this.logout}>LogOut`</Button>
    }
}

export default Logout;