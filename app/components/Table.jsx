import * as React from "react";
import PropTypes from "prop-types";
import { hashtag } from "./icons";
import Tooltip from "./Tooltip";

function MoreInfo({ created_at, forked_count, language, updated_at, watchers, login }) {
  return (
    <ul className="tooltip stack">
      <li className="split">
        <span>By:</span> <span>{login}</span>
      </li>
      { language && (
        <li className="split">
          <span>Language:</span> <span>{language}</span>
        </li>
      )}
      <li className="split">
        <span>Created:</span> <span>{new Date(created_at).toLocaleDateString()}</span>
      </li>
      <li className="split">
        <span>Last Updated:</span> <span>{new Date(updated_at).toLocaleDateString()}</span>
      </li>
      <li className="split">
        <span>Watchers:</span> <span>{watchers}</span>
      </li>
      { forked_count && (
        <li className="split">
          <span>Forks:</span> <span>{forked_count}</span>
        </li>
      )}
    </ul>
  )
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ width: "5%" }}>{hashtag}</th>
        <th style={{ width: "50%" }}>Repository</th>
        <th style={{ width: "15%" }}>Stars</th>
        <th style={{ width: "15%" }}>Forks</th>
        <th style={{ width: "15%" }}>Open Issue</th>
      </tr>
    </thead>
  );
}

function TableRow({
  index,
  owner,
  stargazers_count,
  forks,
  open_issues,
  name,
  created_at,
  updated_at,
  language,
  watchers,
}) {
  const { login, avatar_url, type } = owner;
  return (
    <tr key={name}>
      <td>{index + 1}</td>
      <td>
        <Tooltip 
          element={
            <MoreInfo
              created_at={created_at}
              language={language}
              updated_at={updated_at}
              watchers={watchers}
              type={type}
              login={login}
            />
          }
        >
          <div>
            <div style={{position: "relative", display: "flex"}}>
              <div className="row gap-md">
                <img src={avatar_url} alt={`Avatar for ${login}`} className="avatar" width={32} height={32} />
                <a href={`https://github.com/${login}/${name}`}>{name}</a>
              </div>
            </div>
          </div>
        </Tooltip>
      </td>
      <td>{stargazers_count}</td>
      <td>{forks}</td>
      <td>{open_issues}</td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  stargazers_count: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
  open_issues: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default function Table({ repos }) {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => (
          <TableRow key={index} {...repo} index={index} />
          ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  repos: PropTypes.array.isRequired,
};