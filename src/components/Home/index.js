import React from 'react';
import PropTypes from 'prop-types';
import Folder from './Folder';
import './styles.scss';

const Home = ({ images, folders }) => (
  <main className="home">
    <ul className="container_folder">
      {
        folders.map((folder) => {
          const imageCover = images.find((image) => (image.id === folder.cover));
          return <Folder image={imageCover} key={imageCover.path} folderName={folder.name} />;
        })
      }
    </ul>
  </main>
);

Home.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  folders: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

Home.defaultProps = {
  images: [],
  folders: [],
};
export default Home;
