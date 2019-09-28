import React from "react";
import { Link } from "react-router-dom";
import request from "superagent";
import url from "../../constants";
import { connect } from "react-redux";

class GamesList extends React.Component {
  onClick = (e, gameId) => {
    console.log("props", this.props);
    const { cookies } = this.props;
    const user = cookies.get("user");
    request
      .put(`${url}/join/${gameId}`)
      .set("Authorization", `Bearer ${user}`)
      .catch(console.error);
  };

  render() {
    return (
      <div>
        <h1>
          {this.props.games.length > 0
            ? "Available rooms:"
            : "No rooms available"}
        </h1>
        <div className="roomlist">
          {this.props.games.map((game, i) => (
            <Link to={`/lobby/${game.id}`} key={i}>
              <div onClick={e => this.onClick(e, game.id)} className="gameroom">
                <h2>{game.name}</h2>
                <p>
                  {game.users.length === 0
                    ? "empty"
                    : game.users.length === 2
                    ? "full"
                    : game.users[0]["name"]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.games,
    user: state.user,
    cookies: ownProps.cookies
  };
};

export default connect(mapStateToProps)(GamesList);
