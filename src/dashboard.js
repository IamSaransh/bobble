import React, {Component} from "react";import axios from 'axios'
import '../src/dashboard.css'



class Dashboard extends Component{
    constructor(props){
        super(props);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        console.log(this.props)
    }
    handleSuccessfulAuth(data){
        this.props.history.push("/dashboard");
    }
  render(){
    return(
     
      <div>
          
          <h1 className="dashboard">Message : {this.props.loggedInStatus}</h1>
          <p> {this.props.key} </p>
       </div>
    )
  }
}


  


export default Dashboard;