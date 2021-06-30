import React from "react";
import styles from "./Footer.module.scss";
import Newsletter from "../Newsletter/Newsletter";
import { useSiteMetadata } from '../../hooks';
import { Link } from 'gatsby';

const Footer = () => {
  const {
     menu
  } = useSiteMetadata();
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__inner"]}>
        <div className={styles["footer__inner__row"]}>
          <h6 className={styles["footer__hoffmann__title"]}>
            <img
              className={styles["footer__hoffmann__title__image"]}
              src="/logo.png"
            ></img>{" "}
            HOFFMANN.AI
          </h6>
          <ul className={styles["footer__list"]}>
            <li className={styles["footer__list__first__row"]}>
              Société par actions simplifiée, spécialisée dans le secteur
              d'activité du conseil pour les affaires et autres conseils de
              gestion.
            </li>
          </ul>
        </div>
        <div className={styles["footer__inner__row__liens"]}>
          <h6 className={styles["footer__legal__title"]}>Liens</h6>
          <ul className={styles["footer__list"]}>
            <li className={styles["footer__list__other__row"]}>
              <Link className={styles["footer__list__link"]} to={menu[1].path}>
                À propos
              </Link>
            </li>
            <li className={styles["footer__list__other__row"]}>
              <Link className={styles["footer__list__link"]} to={menu[0].path}>
                Blog
              </Link>
            </li>
            <li className={styles["footer__list__other__row"]}>
              <Link className={styles["footer__list__link"]} to={menu[2].path}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__inner__row"]}>
          <h6 className={styles["footer__liens__title"]}>Légal</h6>
          <ul className={styles["footer__list"]}>
            <li className={styles["footer__list__other__row"]}>
              <Link className={styles["footer__list__link"]} to="#">
                Politique de confidentialité
              </Link>
            </li>
            <li className={styles["footer__list__other__row"]}>
              <Link className={styles["footer__list__link"]} to="#">
                Conditions d'utilisation
              </Link>
            </li>
            <li className={styles["footer__list__other__row"]}>
              <Link className={styles["footer__list__link"]} to="#">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__inner__row"]}>
          <h6 className={styles["footer__contact__title"]}>Contact</h6>

          <ul>
            {" "}
            <li className={styles["footer__list__first__row"]}>
              <Link
                target="blank"
                className={styles["footer__list__link__contact"]}
                to="#"
              >
                <img src="https://www.clipartmax.com/png/middle/35-351662_update-to-our-address-email-icon-png.png"></img>
                contact@hoffmann.ai
              </Link>
            </li>
            <li className={styles["footer__list__first__row"]}>
              <Link
                target="blank"
                className={styles["footer__list__link__contact"]}
                to="#"
              >
                <img src="https://venus-sauna.fr/wp-content/uploads/2019/12/phone.png"></img>
                06 21 19 56 74
              </Link>
            </li>
          </ul>
          <div className={styles["footer__newsletter"]} >
          <Newsletter></Newsletter>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
