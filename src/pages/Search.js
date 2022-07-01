import React from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardAlbum from './CardAlbum';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      prevSearch: '',
      buttonDisabled: true,
      searchResult: [],
      searchClick: false,
    };
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    const caracteresButonEnabled = 2;
    this.setState({ search: value,
      buttonDisabled: value.length < caracteresButonEnabled,
    });
  }

  onHandleClick = async () => {
    const { search } = this.state;
    this.setState((prevState) => ({ search: '',
      prevSearch: prevState.search,
      searchClick: true }));
    const searchResult = await searchAlbumsAPI(search);
    this.setState({ searchResult });
  }

  render() {
    const { search, buttonDisabled, searchResult, searchClick, prevSearch } = this.state;

    const searchResultComponentAlbuns = (
      <div>
        <p>
          {`Resultado de álbuns de: ${prevSearch}`}
        </p>
        {searchResult.map((album) => (<CardAlbum
          key={ album.colectionId }
          data={ album }
        />))}
      </div>);

    const searchResultComponentNotFound = (<p>Nenhum álbum foi encontrado</p>);

    const searchResultComponent = searchResult.length !== 0
      ? searchResultComponentAlbuns
      : searchResultComponentNotFound;

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
              onClick={ this.onHandleClick }
            >
              Pesquisar

            </button>
          </label>
        </form>
        {searchClick && searchResultComponent}

      </div>
    );
  }
}

export default Search;
