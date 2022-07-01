import React from 'react';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      buttonDisabled: true,
    };
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    const caracteresButonEnabled = 2;
    this.setState({ search: value,
      buttonDisabled: value.length < caracteresButonEnabled,
    });
  }

  render() {
    const { search, buttonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search">
            <input
              name="search"
              value={ search }
              id="serch"
              data-testid="search-artist-input"
              onChange={ this.onHandleChange }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ buttonDisabled }
            >
              Pesquisar

            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
