import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    state={
        isLoggedIn: false,
        userId:'',
        name:'',
        email:'',
    };
    responseFacebook=response=>{
        console.log(response);

    }

    componentClicked=(data)=>{
        console.warn(data);
    }
    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent= (
                <FacebookLogin
                appId="4452617941478128"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
               )
        }
        else{
           fbContent= (
            <FacebookLogin
            appId="4452617941478128"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
           )
  
  
        }
        return (
            

            <div>
                  {fbContent}
            </div>
        );
    }
}

export default Facebook;