import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { login } from "../../actions/user";

class LoginFormContainer extends React.Component {
  state = {
    name: "",
    password: ""
  };

  onSubmit = event => {
    const { cookies } = this.props;
    event.preventDefault();
    this.props.login(this.state.name, this.state.password, cookies);
    this.setState({
      name: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.user.message ? (
          <p className="errorMessage">{this.props.user.message}</p>
        ) : null}
        <LoginForm
          value={this.state}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    cookies: ownProps.cookies
  };
}

export default connect(
  mapStateToProps,
  { login }
)(LoginFormContainer);
