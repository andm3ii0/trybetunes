import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../CSS/header.css';

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
        <p className="headerTitle">TrybeTunes</p>
        <div className="headerContent">
          <p data-testid="header-user-name">{loading ? <Loading /> : user.name}</p>
          <div className="headerLinks">
            <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
