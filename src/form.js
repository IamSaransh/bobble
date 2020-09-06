import React, {Component} from "react";
import {Button } from 'react-bootstrap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../src/logo.png'
import ai from '../src/assets/ai.svg'
import '../src/form.css'
import Fb from '../src/assets/facebook.svg'
import Google from '../src/Google'
import Facebook from '../src/facebook'




class FormPage extends Component{
  constructor(props){
    super(props)

    this.state ={
      fname:'',
      lname:'',
      email:'',
      password: '',
      loggedInStatus:'Logged IN ',
    }
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
  //we are creating a new post request to this url and it sends us back the same data!!!!!!!!!!1
  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('https://reqres.in/api/users',this.state)
    .then(response=>{
      console.log(response)
      
       this.setState({ 
        fname:response.data.fname,
        lname:response.data.lname,
        email:response.data.email,
        password: response.data.password,
        status:response.status,
        loggedInStatus:'logged in',
        });
        
        console.log(this.state)
        this.props.history.push("/dashboard")
        
    })
    .catch(error=>{
      console.log(error)
    })
  }

  render(){
    const {fname, lname, email, password}= this.setState
    return(
      //main container div 
      <div className="App">
      <div className="brand-logo">
       <img className="bobble" src={ai}></img>
      </div>
       <div className="container">
        <p className="p-head">SIGN UP</p>
        <h1 className="heading1">Create Your Account</h1>
        <p className="p-head-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="oAuth-buttons">    
            <div className="google-button">
                <a className="btn-google" href="">
                  <Google/>
                </a>
            </div>
            <div className="fb-button">
                <a className="btn-google" href="">
                  <Facebook />
                </a>
            </div>
        </div>
        
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        
        <form className="form-signup" onSubmit={this.submitHandler}>
            <div className="first-name input-container">
                <input type="text" name="fname" autoComplete="off" id="fname"  value={fname}  onChange={this.changeHandler} placeholder="First Name"></input>
            </div>
            <div className="email input-container">
                <input type="text" name="lname" id="lname" value={lname} onChange={this.changeHandler}  placeholder="Last Name" autoComplete="off"></input>
            </div>
            <div className="password input-container">
                <input type="email" name="email" id="email" value={email} onChange={this.changeHandler}  placeholder="Email" required></input>
            </div>
            <div className="re-password input-container">
                <input type="password" name="password" id="password" value={password} onChange={this.changeHandler}  placeholder="Password" autoComplete="off"></input>
                <p className="p-head-lorem">By clicking sign Up, you agree to our Terms of Use ad our Privacy Policy. </p>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
            
        </form>
      </div>
    </div>
    
    )
  }
}


  


export default FormPage;