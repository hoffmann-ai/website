import React from 'react';
import { Link } from 'gatsby';
import { getIcon } from '../../utils';
import styles from './Footer.module.scss';
import Newsletter from '../Newsletter/Newsletter';
import Icon from '../Icon';

const Footer = () => (
  <div className={styles['footer']}>
    <div className={styles['footer__inner']}>
      <div className={styles['footer__inner__row']}>
        <h6 className={styles['footer__hoffmann__title']}>
          <img
            className={styles['footer__hoffmann__title__image']}
            src='/logo.png'
          ></img>
          HOFFMANN.AI
        </h6>
        <ul className={styles['footer__list']}>
          <li className={styles['footer__list__first__row']}>
            Société par actions simplifiée, spécialisée dans le secteur
            d'activité du conseil pour les affaires et autres conseils de
            gestion.
          </li>
        </ul>
      </div>
      <div className={styles['footer__inner__row__liens']}>
        <h6 className={styles['footer__liens__title']}>Liens</h6>
        <ul className={styles['footer__list']}>
          <li className={styles['footer__list__other__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              À propos
            </Link>
          </li>
          <li className={styles['footer__list__other__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              Blog
            </Link>
          </li>
          <li className={styles['footer__list__other__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['footer__inner__row']}>
        <h6 className={styles['footer__legal__title']}>Légal</h6>
        <ul className={styles['footer__list']}>
          <li className={styles['footer__list__other__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              Politique de confidentialité
            </Link>
          </li>
          <li className={styles['footer__list__other__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              Conditions d'utilisation
            </Link>
          </li>
          <li className={styles['footer__list__other__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              Cookies
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['footer__inner__row__contact']}>
        <h6 className={styles['footer__contact__title']}>Contact</h6>

        <ul className={styles['footer__list']}>
          <li className={styles['footer__list__first__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              <Icon
                className={styles['footer__list__icon']}
                name='email'
                icon={getIcon('email')}
              />
              contact@hoffmann.ai
            </Link>
          </li>
          <li className={styles['footer__list__first__row']}>
            <Link to='/#' className={styles['footer__list__link']}>
              <Icon
                className={styles['footer__list__icon']}
                name='phone'
                icon={getIcon('line')}
              />
              +33 6 21 19 56 74
            </Link>
          </li>
        </ul>
        <div className={styles['footer__newsletter']}>
          <Newsletter />
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
