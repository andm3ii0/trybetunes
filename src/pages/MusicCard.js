import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musicLink, musicName } = this.props;
    console.log(musicLink);
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
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicLink: PropTypes.string.isRequired,
  musicName: PropTypes.string.isRequired,
};

export default MusicCard;
