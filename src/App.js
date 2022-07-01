import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      buttonDisabled: true,
    };
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    const caractersButtonEnabled = 3;
    this.setState(() => ({
      name: value,
      buttonDisabled: value.length < caractersButtonEnabled }));
  }

  render() {
    const { name, buttonDisabled } = this.state;
    return (
      <Switch>
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/profile/:edit" component={ ProfileEdit } />
        <Route
          exact
          path="/"
          render={ (props) => (<Login
            { ...props }
            name={ name }
            buttonDisabled={ buttonDisabled }
            funcOnChange={ this.onHandleChange }
          />) }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
