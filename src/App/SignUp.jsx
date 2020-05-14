import React from "react";
import validateEmail from "./Validation";

class SignUp extends React.Component {
  render(props) { 

    return (
      <div className="form-container">
        <h2>Create new Account</h2>
        <input
            type="text"
            name="login"
            className= "form-input"
            placeholder="Enter login"
            value = {this.props.login}
            onChange = {this.props.onChange}
        />

        <input 
            type="text" 
            name="email"
            className = "form-input"
            placeholder="Enter email" 
            value = {this.props.email}
            onChange = {this.props.onChange}
        />

        <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter password"
            value = {this.props.password}
            onChange = {this.props.onChange}
        />

        <input
            type="password"
            name="secondPassword"
            className="form-input"
            placeholder="Confirm password"
            value = {this.props.secondPassword}
            onChange = {this.props.onChange}
        />

        <button className="submit-btn"
            onClick = {this.props.onClick}
        >
                
                Sign Up
        </button>
       
        <p>
            Already have an account?{" "}
            <span 
                className="go-to-sign-link" 
                onClick={this.props.onClickChangeForm}>
                Sign In
          </span>
        </p>
      </div>
    );
  }
  
}

export default SignUp;
