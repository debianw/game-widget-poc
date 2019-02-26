//
import React, { Component } from 'react'

//
class Backgammon extends React.Component {
  state = {
    count: 0,
    gameId: null,
  }

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  decrement = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }))
  }

  componentDidMount() {
    const { gameId } = this.props;
    this.setState({ gameId })
  }

  render() {
    return (
      <div style={{ border: '2px solid orange', padding: '10px', fontSize: '20px', textAlign: 'center' }}>
        <h4> Playing Backgammon {this.state.gameId} </h4>

        <div>{this.state.count}</div>
        <button onClick={this.decrement}> Decrement </button> 
        <button onClick={this.increment}> Increment </button>
      </div>
    )
  }

}

//
export default Backgammon