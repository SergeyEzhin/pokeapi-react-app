import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import Main from './containers/Main/Main';
import './App.scss';
import { PokemonDetail } from './components/Card/PokemonDetail/PokemonDetail';

class App extends React.Component 
{
  render() 
  {
    let {history} = this.props;

    return (
      <div className="wrapper">
        <div className="container wrapper__content">
          <div className="title wrapper__title">
              <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt=""/>
          </div>
          <React.Fragment>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/pokemon/:id' component={PokemonDetail} />
              </Switch>
            </ConnectedRouter>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;