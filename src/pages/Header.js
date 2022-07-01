import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: true,
    };
  }

  componentDidMount() {
    getUser().then((response) => this.setState({ user: response, loading: false }));
  }

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">{loading ? <Loading /> : user.name}</p>
      </header>
    );
  }
}

export default Header;
