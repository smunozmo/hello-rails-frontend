import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import store from './configureStore';
import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
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
    </BrowserRouter>
  </Provider>
);

export default App;
