import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import store from './configureStore';
import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <h5 style={{ margin: 'auto', width: '80%', textAlign: 'center' }}>
              Click
              {' '}
              <a style={{ decoration: 'none' }} href="/home">here</a>
            </h5>
          )}
        />
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
