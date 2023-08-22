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

function PlayerInput(props) {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(username);
  }

  return (
    <form className="card bg-light" onSubmit={handleSubmit}>
      <label htmlFor="username" className="player-label">
        {props.label}
      </label>
      <div className="input-row">
        <input
          type="text"
          id="username"
          placeholder="github username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn link" type="submit" disabled={!username}>
          Submit
        </button>
      </div>
    </form>
  );
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

export default function Battle() {
  const [playerOne, setPlayerOne] = React.useState(null);
  const [playerTwo, setPlayerTwo] = React.useState(null);

  return (
    <main className="stack main-stack animate-in">
      <div className="split">
        <h1>Players</h1>
        <Link to={{ pathname: "/results", search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`}} className={'btn primary'}>Battle</Link>
      </div>
      <section className="grid">
        { playerOne === null ? (
          <PlayerInput
            label="Player One"
            onSubmit={(player) => setPlayerOne(player)}
          />
        ) : (
          <PlayerPreview
            username={playerOne}
            label="Player One"
            onSubmit={() => setPlayerOne(null)}
          />
        )}
        { playerTwo === null ? (
          <PlayerInput
            label="Player Two"
            onSubmit={(player) => setPlayerTwo(player)}
          />
        ) : (
          <PlayerPreview
            username={playerTwo}
            label="Player Two"
            onSubmit={() => setPlayerTwo(null)}
          />
        )}
      </section>
      <Instructions />
    </main>
  );
}
