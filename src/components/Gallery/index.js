import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import './styles.scss';

const Gallery = ({ images }) => (
  <main className="gallery">
    <ul className="container_picture">
      {
        images.map(((image) => (
          <Image image={image} key={image.path}/>
        )))
      }
    </ul>
  </main>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

Gallery.defaultProps = {
  images: [],
};
export default Gallery;
