import {Component} from 'react'
import './index.css'

class RepoDetailsPage extends Component {
  state = {
    isLoading: true,
    reposList: [],
  }

  componentDidMount() {
    this.getRepoDetails()
  }

  getRepoDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {login, name} = params
    const url = `https://api.github.com/repos/${login}/${name}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  getLoadingText = () => (
    <div className="loading-text">
      <h1>Loading </h1>
    </div>
  )

  render() {
    const {isLoading, reposList} = this.state
    return (
      <div className="main">{isLoading ? this.getLoadingText() : null}</div>
    )
  }
}

export default RepoDetailsPage
