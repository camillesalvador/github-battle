import React from 'react';
import PropTypes from 'prop-types';
import { close } from './icons';
import { Link } from 'react-router-dom';

function Instructions() {
  return (
    <section className="instructions-container">
      <h2>
        Instructions
      </h2>
      <ol>
        <li>
          Enter two Github users
        </li>
        <li>
          Battle
        </li>
        <li>
          See the winner
        </li>
      </ol>
    </section>
  );
}

class PlayerInput extends React.Component {
  state = {
    username: '',
  };
  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }
  render() {
    return (
      <form className="card bg-light" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="input-row">
          <input
            type="text"
            id="username"
            placeholder="github username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button className="btn link" type="submit" disabled={!this.state.username}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

function PlayerPreview({ username, onReset, label }) {
  return (
    <article className='card'>
      <h3 className='player-label'>{label}</h3>
      <div className='split'>
        <div className='row gap-md'>
        <img
            width={32}
            height={32}
            className="avatar"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
        </div>
        <button className="btn secondary icon" onClick={onReset}>
          {close}
        </button>
      </div>
    </article>
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null
  };
  handleSubmit = (id, player) => {
    this.setState({
      [id]: player,
    });
  }
  handleReset = (id) => {
    this.setState({
      [id]: null,
    });
  }
  render() {
    const { playerOne, playerTwo } = this.state;
    const disabled = !playerOne || !playerTwo;

    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h1>Players</h1>
          <Link to={{ pathname: "/results", search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`}} className={'btn primary' + disabled ? 'btn primary disabled' : 'btn primary'}>Battle</Link>
        </div>
        <section className="grid">
          { playerOne === null ? (
            <PlayerInput
              label="Player One"
              onSubmit={(player) => this.handleSubmit('playerOne', player)}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              label="Player One"
              onReset={() => this.handleReset('playerOne')}
            />
          )}
          { playerTwo === null ? (
            <PlayerInput
              label="Player Two"
              onSubmit={(player) => this.handleSubmit('playerTwo', player)}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              label="Player Two"
              onReset={() => this.handleReset('playerTwo')}
            />
          )}
        </section>
        <Instructions />
      </main>
    );
  }
}
