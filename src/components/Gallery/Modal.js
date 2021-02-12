import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Modal = ({ src, title, onClick }) => (
  <div className="modal">
    <span className="modal-close" onClick={onClick}>&times;</span>
    <img className="modal-content" src={src} alt="toto" />
    <div className="modal-title">{title}</div>
  </div>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
