import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import rootReducer from './redux/reducers/rootReducer';
import history from './history';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer(history), compose(
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
