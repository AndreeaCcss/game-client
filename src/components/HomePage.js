import React from "react";
import { connect } from "react-redux";

import GamesListContainer from "./GamesList/GamesListContainer";
import GameFormContainer from "./AddGameForm/GameFormContainer";
import LoginFormContainer from "./LoginForm/LoginFormContainer";
import SignupFormContainer from "./SignUpForm/SignupFormContainer";
import Header from "./Header/Header";
import { logOut } from "../actions/user";

class HomePage extends React.Component {
  render() {
    const { cookies } = this.props;
    const userCookie = cookies.get("user");
    return (
      <div>
        <Header />
        {userCookie ? (
          <div>
            <GameFormContainer cookies={this.props.cookies} />
            <GamesListContainer cookies={this.props.cookies} />
            <button onClick={this.props.logOut} className="quitGameButton">
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <SignupFormContainer />
            <LoginFormContainer cookies={this.props.cookies} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    cookies: ownProps.cookies
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(HomePage);
