import React from "react";

export default class GamePage extends React.Component {
  render() {
    const user = this.props.game.users.find(user => user.id === this.props.user.id)
    const chosen = typeof user.current_choice === "string"
    const theChosenOne = user.current_choice

    return (
      <div>
        <div className="imageContainer">

          <div
            onClick={e => this.props.onClick(e, "rock")}
            className={!chosen ? "emoji" :
              (theChosenOne === "rock" ? "emoji afterChoice chosen" :
                "emoji afterChoice")}>
            <span role="img" aria-label="rock">
              ✊
            </span>
          </div>

          <div
            onClick={e => this.props.onClick(e, "paper")}
            className={!chosen ? "emoji" :
              (theChosenOne === "paper" ? "emoji afterChoice chosen" :
                "emoji afterChoice")}>
            <span role="img" aria-label="paper">
              ✋
            </span>
          </div>

          <div
            onClick={e => this.props.onClick(e, "scissors")}
            className={!chosen ? "emoji" :
              (theChosenOne === "scissors" ? "emoji afterChoice chosen" :
                "emoji afterChoice")}>
            <span role="img" aria-label="scissors">
              ✌️
            </span>
          </div>

        </div>
      </div>
    );
  }
}
