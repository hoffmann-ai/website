// @flow strict
import axios from 'axios';
import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

const url = process.env.GATSBY_WEBHOOK_URL;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [credits, setCredits] = useState(
    'En validant, vous autorisez HOFFMANN.AI à stocker les données personnelles soumises afin qu\'elles fournissent le contenu souhaité.'
  );
  const [contactCheck, setContactCheck] = useState('');
  if (url === null || url === undefined) return <></>;
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name,
      firstname,
      phone,
      email,
      message
    };
    axios
      .post(url, contact, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then(() => {
        setName('');
        setFirstname('');
        setEmail('');
        setPhone('');
        setMessage('');
        setContactCheck('Contact');
        setCredits(
          'Nous avons bien pris en compte votre contact\n. Nous reviendrons vers vous dans les plus brefs délais.'
        );
      })
      .catch(() => {
        setCredits('Une erreur est survenue. Veuillez recommencer plus tard.');
      });
  };

  return (
    <form
      className={styles['form__module']}
      name="contact"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <h1 className={styles['form__title']}>Un projet en tête ? Contactez-nous !</h1>
      <div className={styles['form__inner__grid']}>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Prénom
            <span className={styles['form__inner__star']}> *</span>
          </label>
          <input
            type="name"
            className={styles['form__inner__grid__element__child']}
            name="name"
            placeholder="Saisir votre prénom"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Nom <span className={styles['form__inner__star']}> *</span>
          </label>
          <input
            type="name"
            className={styles['form__inner__grid__element__child']}
            name="firstname"
            placeholder="Saisir votre nom"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>Téléphone</label>
          <input
            type="text"
            className={styles['form__inner__grid__element__child']}
            name="phone"
            placeholder="ex : 06 32 32 32 32"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Email <span className={styles['form__inner__star']}> *</span>
          </label>
          <label className={styles['form__not-email']}>Email non valide</label>
          <input
            type="mail"
            className={styles['form__inner__grid__element__child']}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            required
          />
        </div>
      </div>
      <div className={styles['form__inner__grid__element__message']}>
        <label className={styles['form__inner__grid__element__child']}>Message</label>
        <textarea
          className={styles['form__inner__grid__element__child']}
          name="message"
          placeholder="Saisir votre message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <div className={styles['form__inner__grid__element__terms']}>
        <span className={styles['form__inner__checkbox__message']}>
          {contactCheck !== '' && (
            <>
              <span className={styles['form__inner__checkbox__message__submit']}>
                {contactCheck}
              </span>
              <br></br>
            </>
          )}
          {credits}
        </span>
      </div>
      <div className={styles['form__inner__grid__element__message']}>
        <input className={styles['form__input']} name="submit" type="submit" value="Envoyer" />
        <div className={styles['form__message']}></div>
      </div>
    </form>
  );
};

export default ContactForm;
