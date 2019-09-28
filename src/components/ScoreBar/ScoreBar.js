import React from "react";

export default class ScoreBar extends React.Component {
  render() {
    const { cookies } = this.props;
    const userId = cookies.get("userId");

    const { round, name } = this.props.game;
    const users = this.props.game.users;
    const userOne = users.find(user => user.id === parseInt(userId));
    const userTwo = users.find(user => user.id !== parseInt(userId));

    return (
      <div>
        {userOne ? (
          <div className="scoreBar">
            <div className="round">Round: {round}</div>
            <div className="room">{name}</div>
            <div className="score">
              Score: {userOne.score} vs {userTwo.score}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
