import React from "react";
import { battle } from "../utils/api";
import Loading from "./Loading";
import withSearchParams from "./withSearchParams";
import { Link } from 'react-router-dom'

function Card({ profile }) {
  return (
    <div className="card bg-light">
      <header className="split">
        <div>
          <h4>
            <a href={`https://github.com/${profile.login}`}>{profile.login}</a>
          </h4>
          <p>{profile.location}</p>
        </div>
        <img className="avatar large" src={profile.avatar_url} alt={`Avatar for ${profile.name}`} />
      </header>
      <ul className="stack">
        <li className="split">
          <span>Name:</span> <span>{profile.login}</span>
        </li>
        <li className="split">
          <span>Company:</span> <span>{profile.company}</span>
        </li>
        <li className="split">
          <span>Followers:</span> <span>{profile.followers}</span>
        </li>
        <li className="split">
          <span>Following:</span> <span>{profile.following}</span>
        </li>
        <li className="split">
          <span>Repositories:</span> <span>{profile.public_repos}</span>
        </li>
      </ul>
    </div>
  )
}

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
  };
  componentDidMount() {
    const sp = this.props.router.searchParams;
    const playerOne = sp.get("playerOne");
    const playerTwo = sp.get("playerTwo");

    battle([playerOne, playerTwo]).then((players) => {
      this.setState({
        winner: players[0],
        loser: players[1],
        loading: false,
        error: null,
      });
    }).catch(({ message }) => {
      this.setState({
        error: message,
        loading: false,
      });
    });
  }
  render() {
    const { error, loading, winner, loser } = this.state;

    if (loading) {
      return <Loading text="Battling" />
    }

    if (error) {
      return <p className="text-center error">{error}</p>
    }
    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h1>Results</h1>
          <Link to="/battle" className='btn secondary'>
            Reset
          </Link>
        </div>
        <section className="grid">
          <article className="results-container">
            <Card profile={winner.profile} />
            <p className="results">
              <span>{ winner.score === loser.score ? 'Tie ' : 'Winner '}{winner.score.toLocaleString()}</span>
              { winner.score !== loser.score && <img width="80" src="https://ui.dev/images/certificate.svg" alt="Certificate" />}
            </p>
          </article>
          <article className="results-container">
          <Card profile={loser.profile} />
            <p className="results">
              <span>{ winner.score === loser.score ? 'Tie ' : 'Loser '} {loser.score.toLocaleString()}</span>
            </p>
          </article>
        </section>
      </main>
    )
  }
}

export default withSearchParams(Results);