import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/Main/Main';
import './App.scss';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { AbilityDetail } from './components/AbilityDetail/AbilityDetail';
import { fetchData } from './redux/actions';
import { connect } from 'react-redux';

class App extends React.Component 
{
  componentDidMount()
  {
    this.props.fetchData();
  }

  render() 
  {
    return (
      <div className="wrapper">
        <div className="container wrapper__content">
          <div className="title wrapper__title">
              <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt=""/>
          </div>
          <React.Fragment>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/pokemon/:id' component={PokemonDetail} />
                <Route path='/ability/:name' component={AbilityDetail} />
              </Switch>
            </BrowserRouter>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});


export default connect(null, mapDispatchToProps)(App);