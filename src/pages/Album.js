import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from './Header';
import MusicCard from './MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      albumMusics: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const albumMusics = await getMusics(id);
    const albumInfo = albumMusics.shift();
    this.setState({ albumMusics,
      artistName: albumInfo.artistName,
      albumName: albumInfo.collectionName,
    });
  }

  render() {
    const { albumMusics, artistName, albumName } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <p data-testid="artist-name">{artistName}</p>
          <p data-testid="album-name">{`${albumName}`}</p>
          {albumMusics.map((music) => (<MusicCard
            key={ music.trackId }
            musicLink={ music.trackViewUrl }
            musicName={ music.trackName }
            musicId={ music.trackId }
            musicObj={ music }
          />))}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
