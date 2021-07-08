import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Image = ({ image, folderName }) => (
  <li className="folder_li">
    <Link to={`/gallery/${image.id_folder}`}>
      <img data-title={image.title} className="folder" src={`/img/${image.path}.jpg`} alt={image.alt} />
    </Link>
    <h2>{folderName}</h2>
  </li>
);

Image.propTypes = {
  image: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    id_folder: PropTypes.number.isRequired,
  }).isRequired,
  folderName: PropTypes.string.isRequired,
};

export default Image;
