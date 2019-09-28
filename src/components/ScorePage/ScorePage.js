import React from "react";

export default class ScorePage extends React.Component {
  render() {
    const { cookies } = this.props;
    const userId = cookies.get("userId");

    const users = this.props.game.users;
    const userOne = users.find(user => user.id === parseInt(userId));
    const userTwo = users.find(user => user.id !== parseInt(userId));
    const winner = users.find(user => {
      return user.isRoundWinner === true;
    });

    const rock = "✊";
    const paper = "✋";
    const scissors = "✌️";

    const gameEnd = winner && winner.score >= 5;
    const userIsWinner = userOne === winner;
    const userIsVictorious = gameEnd && userIsWinner;

    return (
      <div>
        {userOne ? (
          <div className="scorePage">
            {!gameEnd ? null : userIsVictorious ? (
              <div className="victory">Victory!</div>
            ) : (
              <div className="defeat">Crushing defeat!</div>
            )}

            {gameEnd ? null : (
              <div className="roundScore">
                {!winner
                  ? "It's a draw!"
                  : userIsWinner
                  ? "You win the round!"
                  : `${winner.name} wins the round.`}
              </div>
            )}

            <div className="scoreDivs">
              <div className="userScore">
                <h2 className="nameScore">{userOne.name}</h2>
                <div className="scoreEmojiOne">
                  <span aria-label={userOne.current_choice}>
                    {userOne.current_choice === "rock"
                      ? rock
                      : userOne.current_choice === "paper"
                      ? paper
                      : scissors}
                  </span>
                </div>
              </div>

              <div className="userScore">
                <h2 className="nameScore">{userTwo.name}</h2>
                <div className="scoreEmojiTwo">
                  <span aria-label={userTwo.current_choice}>
                    {userTwo.current_choice === "rock"
                      ? rock
                      : userTwo.current_choice === "paper"
                      ? paper
                      : scissors}
                  </span>
                </div>
              </div>
            </div>

            {gameEnd ? null : userOne.hasClickedNext ? (
              <p className="waiting">Waiting for opponent</p>
            ) : (
              <button onClick={this.props.onClick}>Next Round</button>
            )}
          </div>
        ) : (
          <p className="waiting">Something went wrong</p>
        )}
      </div>
    );
  }
}
