import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Fab from '../feature/components/Fab'

export default <Route path="/" component={App}>
    <Route path="/:var" component={Fab} />
</Route>

//import UserPage from './containers/UserPage'
//import RepoPage from './containers/RepoPage'

/*export default <Route path="/" component={App}>
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserPage} />
</Route>*/
