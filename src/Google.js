
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Google extends Component {
    state={
        isLoggedIn: false,
        userId:'',
        name:'',
        email:'',
    }
    responseGoogle = (response) => {
        console.log(response);
      }

    componentClicked=(data)=>{
        console.warn(data);
    }
    render() {
        let gContent;
        if(this.state.isLoggedIn){
            gContent= (
                <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
               )
        }
        else{
           gContent= (
            <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
           )
  
  
        }
        return (
            

            <div>
                  {gContent}
            </div>
        );
    }
}

export default Google;