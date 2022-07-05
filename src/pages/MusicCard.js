import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: false,
    };
  }

  componentDidMount() {
    const { isFavorite } = this.props;
    this.setState({ inputValue: isFavorite });
  }

  onHandleChange = async ({ target }) => {
    const { musicId, musicObj } = this.props;
    const { checked } = target;
    const { inputValue } = this.state;
    console.log(musicId);
    this.setState({ inputValue: checked, loading: true });
    if (!inputValue) {
      await addSong(musicObj);
    } else {
      await removeSong(musicObj);
    }
    this.setState((prevState) => ({ loading: false, inputValue: prevState.inputValue }));
  }

  render() {
    const { musicLink, musicName, musicId, removeSongs } = this.props;
    const { inputValue, loading } = this.state;

    return (
      <div>
        <p>{ musicName }</p>
        <audio data-testid="audio-component" src={ musicLink } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        {loading ? <Loading />
          : (
            <label htmlFor={ musicId }>
              Favorita
              <input
                type="checkbox"
                id={ musicId }
                data-testid={ `checkbox-music-${musicId}` }
                onChange={ this.onHandleChange }
                onClick={ removeSongs }
                checked={ inputValue }
              />
            </label>)}

      </div>
    );
  }
}

MusicCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  removeSongs: PropTypes.func,
  musicLink: PropTypes.string.isRequired,
  musicName: PropTypes.string.isRequired,
  musicId: PropTypes.number.isRequired,
  musicObj: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};

MusicCard.defaultProps = {
  removeSongs: () => {},
};

export default MusicCard;
