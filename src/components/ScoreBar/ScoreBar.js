import React from "react";

export default class ScoreBar extends React.Component {
  render() {
    const { round, name } = this.props.game;
    const users = this.props.game.users;
    const userOne = users.find(user => user.id === this.props.user.id);
    const userTwo = users.find(user => user.id !== this.props.user.id);

    return (
      <div className="scoreBar">
        <div className="round">Round: {round}</div>
        <div className="room">Room: {name}</div>
        <div className="score">
          Score: {userOne.name} {userOne.score} vs {userTwo.name}{" "}
          {userTwo.score}
        </div>
      </div>
    );
  }
}
