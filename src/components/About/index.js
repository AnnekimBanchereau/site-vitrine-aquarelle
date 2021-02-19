import React from 'react';
import { AiOutlineInstagram, AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import './styles.scss';

const About = () => (
  <main className="about_container">
    <section className="about">
      <div className="about_picture">
        <img src="img/agathe.jpg" alt="portrait noir et blanc Agathe Chateauminois" />
      </div>
      <div className="about_content">
        <h2>A propos de moi ...</h2>
        <p className="about_content-text">Depuis l’été 2019, je m’essaye à l’aquarelle. Des paysages bretons aux animaux sauvages, en passant par des estampes japonaises, je teste différentes formes en construisant progressivement mon univers. Ingénieure en Sciences de l’eau de formation et reconvertie en institutrice, la peinture m’a portée pendant cette transition et continue de m’apporter une grande satisfaction. Elle permet des moments de déconnexion avec l’extérieur. En vous souhaitant une bonne déambulation sur ce site ! </p>
        <p className="about_content-signature">Agathe Chateauminois</p>
      </div>
    </section>
    <div className="contacts">
      <ul>
        <li>
          <AiOutlineMail className="contacts_icon" title="email" size="1.5em" />
          <a href="mailto:agathe.chateauminois@gmail.com">agathe.chateauminois@gmail.com</a>
        </li>
        <li>
          <AiFillPhone className="contacts_icon" title="phone" size="1.5em" />
          <a href="tel:+33643259862">+33 6 43 25 98 62</a>
        </li>
        <li>
          <AiOutlineInstagram className="contacts_icon" size="1.5em" title="instagram" />
          <a href="https://instagram.com/agathe.chateauminois">
            @agathe.chateauminois
          </a>
        </li>
      </ul>
    </div>
  </main>
);

export default About;
