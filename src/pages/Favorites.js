import React from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Header from './Header';
import MusicCard from './MusicCard';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteSongs: [],
    };
  }

  async componentDidMount() {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({ favoriteSongs });
  }

  removeSong = ({ target }) => {
    this.setState((prevState) => ({
      favoriteSongs: prevState.favoriteSongs
        .filter((song) => `${song.trackId}` !== target.attributes.id.nodeValue),
    }));
  }

  render() {
    const { favoriteSongs } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {favoriteSongs.map((music) => (<MusicCard
          key={ music.trackId }
          musicLink={ music.previewUrl }
          musicName={ music.trackName }
          musicId={ music.trackId }
          musicObj={ music }
          removeSongs={ this.removeSong }
          isFavorite={
            favoriteSongs.find((song) => song.trackId === music.trackId) !== undefined
          }
        />))}
      </div>
    );
  }
}

export default Favorites;
