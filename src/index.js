import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './main/containers/Root'
import configureStore from './main/store/configureStore'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
