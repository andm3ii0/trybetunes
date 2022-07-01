import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardAlbum extends React.Component {
  render() {
    const { data } = this.props;
    const { artworkUrl100, collectionName, artistName, collectionId } = data;
    return (
      <Link
        to={ `album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <p>{collectionName}</p>
          <p>{artistName}</p>
        </div>
      </Link>

    );
  }
}

CardAlbum.propTypes = {
  data: PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardAlbum;
