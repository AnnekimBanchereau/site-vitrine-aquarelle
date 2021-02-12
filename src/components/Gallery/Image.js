import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Image = ({ image, onClick }) => (
  <li className="picture_li">
    <img data-title={image.title} className="picture" src={`./img/${image.path}.jpg`} alt={image.alt} onClick={onClick} />
  </li>
);

Image.propTypes = {
  image: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Image;
