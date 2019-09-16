import "./App.css";

import React from "react";
import { connect } from "react-redux";

import { setGames } from './actions/games'
import GamesListContainer from './components/GamesList/GamesListContainer'

const url = 'http://localhost:4000'

class App extends React.Component {
  source = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.source.onmessage = event => {
      const { data } = event

      const games = JSON.parse(data)
      this.props.setGames(games)
    }
  }

  render() {
    return <div>{this.props.games.map(game => <div>{game.name}</div>)}
      <GamesListContainer />
    </div>
  }
}

const mapDispatchToProps = {
  setGames
};

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
