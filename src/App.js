import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Switch, Route } from 'react-router-dom';
import FormPage from '../src/form.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from '../src/dashboard'
import '../src/form.css'



export default class App extends Component{
  constructor(){
    super();
    this.state ={
      loggedInStatus:"Logged In",
      user: {
        fname:'',
        lname:'',
        email:'',
        passworrd:'',
      },
      
    }
  }
    
  render(){
    return(
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}
           render={props=> (
             <FormPage {...props } loggedInStatus={this.state.loggedInStatus} />
           )}
           />
            <Route exact path={"/dashboard"}
           render={props=> (
             <Dashboard {...props } loggedInStatus={this.state.loggedInStatus} />
           )}
           />
        </Switch>
      </BrowserRouter>      
      
     
    </div>
    )
  }
    
  
}

  
