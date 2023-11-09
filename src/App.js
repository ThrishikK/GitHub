import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css'
import Main from './components/Counter'
import RepoDetailsPage from './components/RepoDetailsPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/:login/:name" component={RepoDetailsPage} />
    </Switch>
  </BrowserRouter>
)
export default App
