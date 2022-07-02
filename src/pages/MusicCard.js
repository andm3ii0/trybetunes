import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: false,
    };
  }

  onHandleChange = async ({ target }) => {
    const { musicId } = this.props;
    const { checked } = target;
    this.setState({ inputValue: checked, loading: true });
    await addSong(musicId);
    this.setState((prevState) => ({ loading: false, inputValue: prevState.inputValue }));
  }

  render() {
    const { musicLink, musicName, musicId } = this.props;
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
                checked={ inputValue }
              />
            </label>)}

      </div>
    );
  }
}

MusicCard.propTypes = {
  musicLink: PropTypes.string.isRequired,
  musicName: PropTypes.string.isRequired,
  musicId: PropTypes.number.isRequired,
  musicObj: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};

export default MusicCard;
