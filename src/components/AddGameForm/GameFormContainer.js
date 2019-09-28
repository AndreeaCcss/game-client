import React from "react";
import request from "superagent";

import GameForm from "./GameForm";
import url from "../../constants";
import { connect } from "react-redux";

class GameFormContainer extends React.Component {
  state = {
    name: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { name } = this.state;
    const { cookies } = this.props;
    const user = cookies.get("user");

    request
      .post(`${url}/game`)
      .set("Authorization", `Bearer ${user}`)
      .send({ name })
      .then(() => {
        this.setState({ name: "" });
      })
      .catch(console.error);
  };

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <GameForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.name}
      />
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(GameFormContainer);
