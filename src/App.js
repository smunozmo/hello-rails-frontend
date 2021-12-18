import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import store from './configureStore';
import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <div>
            <Greeting />
          </div>
        </Route>
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;
