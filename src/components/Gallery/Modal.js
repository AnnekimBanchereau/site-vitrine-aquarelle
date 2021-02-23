import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Modal = ({ src, title, onClick, onClickImage }) => (
  <div className="modal" onClick={onClick}>
    <span className="modal-close" onClick={onClick}>&times;</span>
    <img className="modal-content" onClick={onClickImage} src={src} alt="toto" />
    <div className="modal-title">{title}</div>
  </div>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default Modal;
