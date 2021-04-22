import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'src/utils';
import Modal from './Modal';
import Image from './Image';
import './styles.scss';

const Gallery = ({ images }) => {
  const [attributesImg, setAttributesImg] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (event) => {
    const attributes = {
      src: event.target.src,
      title: capitalizeFirstLetter(event.target.dataset.title),
      alt: event.target.alt,
    };
    setAttributesImg(attributes);
    setOpenModal(!openModal);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setOpenModal(false);
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <main className="gallery">
      <ul className="container_picture">
        {
          images.map(((image) => (
            <Image image={image} key={image.path} onClick={handleModal} />
          )))
        }
      </ul>
      {openModal
      && <Modal {...attributesImg} onClick={closeModal} onClickImage={handleChildClick} />}
    </main>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

Gallery.defaultProps = {
  images: [],
};
export default Gallery;
