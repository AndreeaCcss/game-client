import React from "react";
import { connect } from "react-redux";

import GamesList from "./GamesList";

class GamesListContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.games.length === 0 ? (
          "No rooms available"
        ) : (
          <GamesList games={this.props.games} cookies={this.props.cookies} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownPros) => {
  return {
    games: state.games,
    cookies: ownPros.cookies
  };
};

export default connect(mapStateToProps)(GamesListContainer);
