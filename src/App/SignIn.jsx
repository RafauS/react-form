import React from "react";

class SignIn extends React.Component {
  render(props) {
    return (
      <div className="form-container">
        <h2>Login to Account</h2>
        <input
            type="text"
            name="login"
            className="form-input"
            placeholder="Enter login"
            value={this.props.login}
            onChange={this.props.onChange}
        />
        <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter password"
            value={this.props.password}
            onChange={this.props.onChange}
        />
        <label className="remember-container">
            <input type="checkbox" name="checkbox" value="value" />
            Remember me
        </label>

        <button className="submit-btn" onClick={this.props.onClick}>
            Sign In
        </button>
        <p>
          Don't have an account?{" "}
          <span className="go-to-sign-link" onClick={this.props.onClickChangeForm}>
            Sign Up
          </span>
        </p>
      </div>
    );
  }
}

export default SignIn;
