// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Newsletter from '../Newsletter/Newsletter';
import styles from './Footer.module.scss';
import MiniLogo from './MiniLogo';

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
};

const Footer = ({ menu }: Props) => (
    <div className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <div className={styles['footer__inner__row']}>
          <ul className={styles['footer__list']}>
            <li>
              <h6 className={styles['footer__hoffmann__title']}>
                <MiniLogo />
                HOFFMANN.AI
              </h6>
            </li>
            <li className={styles['footer__list__text']}>
              Experts en Cloud, DevOps & InfraOps, Web.
            </li>
          </ul>
        </div>
        <div className={styles['footer__inner__row__liens']}>
          <ul className={styles['footer__list']}>
            <li>
              <h6 className={styles['footer__liens__title']}>Liens</h6>
            </li>
            {menu.map((item) => (
              <li
                className={styles['footer__list__other__row']}
                key={item.path}
              >
                <Link
                  to={item.path}
                  className={styles['footer__list__link']}
                  activeClassName={styles['menu__list-item-link--active']}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['footer__inner__row']}>
          <ul className={styles['footer__list']}>
            <li>
              <h6 className={styles['footer__legal__title']}>Légal</h6>
            </li>
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
          </ul>
        </div>
        <div className={styles['footer__inner__row__contact']}>
          <ul className={styles['footer__list']}>
            <li>
              <h6 className={styles['footer__legal__title']}>Contact</h6>
            </li>
            <li className={styles['footer__list__first__row']}>
              <a
                href='mailto:contact@hoffmann.ai'
                className={styles['footer__list__link']}
              >
                contact@hoffmann.ai
              </a>
            </li>
            <li className={styles['footer__list__first__row']}>
              <a
                href='tel:+33 6 21 19 56 74'
                className={styles['footer__list__link']}
              >
                +33 6 21 19 56 74
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['footer__newsletter']}>
        <div className={styles['footer__newsletter__credits']}>
          <p className={styles['text_light']}>©2021 HOFFMANN.AI. Tous droits réservés.</p>
        </div>
        <div className={styles['footer__newsletter__newsletter']}>
          <Newsletter style={'footer'} />
        </div>
      </div>
    </div>
);
export default Footer;
