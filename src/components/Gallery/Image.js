import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Image = ({ image }) => (
  <li className="picture_li">
    <img className="picture" src={`./img/${image.path}.jpg`} alt={image.alt} />
  </li>
);

Image.propTypes = {
  image: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  }),
};

Image.defaultProps = {
  image: {},
};

export default Image;
