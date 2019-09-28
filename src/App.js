import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withCookies } from "react-cookie";

import "./App.css";
import { setGames } from "./actions/games";
import url from "./constants";
import HomePage from "./components/HomePage";
import GamePageContainer from "./components/GamePage/GamePageContainer";

class App extends React.Component {
  source = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.source.onmessage = event => {
      const { data } = event;

      const games = JSON.parse(data);
      this.props.setGames(games);
    };
  }

  render() {
    return (
      <div>
        <Route
          path="/lobby/:gameId"
          render={props => (
            <GamePageContainer cookies={this.props.cookies} {...props} />
          )}
          // component={({ match }) => console.log(match)}
          // component={GamePageContainer}
        />
        <Route
          exact
          path="/"
          render={() => <HomePage cookies={this.props.cookies} />}
          // component={HomePage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setGames
};

const mapStateToProps = state => {
  return {
    games: state.games,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withCookies(App));
