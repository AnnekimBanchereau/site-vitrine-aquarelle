import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import './styles.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="nav_footer">
      <li>© {new Date().getFullYear()}</li>
      <li>Mentions Légales</li>
      <li> <a href="mailto:agathe.chateauminois@gmail.com">agathe.chateauminois@gmail.com</a></li>
      <li>
        <a href="https://instagram.com/castelface" className="icone-insta">
          <AiOutlineInstagram className="icone-insta-svg" size="1.5em" title="instagram" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
