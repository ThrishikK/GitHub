import {Link} from 'react-router-dom'

import './index.css'

const RepoItem = props => {
  const {repoDetails} = props
  const {owner, name, description, stargazersCount, pushedAt, issuesCount} =
    repoDetails
  /* eslint-disable camelcase */
  const {avatar_url, login} = owner
  const avatarUrl = avatar_url
  return (
    <Link to={`/${login}/${name}`} className="link-styles">
      <div className="repo-item">
        <img src={avatarUrl} alt={name} className="avatar_url" />
        <div className="repo-container">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="container-2">
          <div className="count">
            <p>{stargazersCount}</p>
          </div>
          <div className="count">
            <p>{issuesCount}</p>
          </div>
          <p>Last Published at {pushedAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default RepoItem
