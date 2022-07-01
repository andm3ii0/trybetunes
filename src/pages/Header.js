import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>

      </header>
    );
  }
}

export default Header;
