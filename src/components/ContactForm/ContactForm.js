import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback('***TEMPLAYE_ID***', {
      name,
      company,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(() => {
        setName('');
        setCompany('');
        setPhone('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        document.querySelector('.form-message').innerHTML = 'Une erreur s est produite, veuillez réessayer.';
      });
  };

  return (
    <form className={styles['form__module']}>
      <h1 className={styles['form__title']}>
        Un projet en tête ? Contactez-nous !
      </h1>
      <div className={styles['form__inner__grid']}>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Prénom
            <span className={styles['form__inner__star']}> *</span>
          </label>
          <input
            type='text'
            className={styles['form__inner__grid__element__child']}
            name='name'
            onChange={(e) => setName(e.target.value)}
            placeholder='Saisir votre prénom'
            value={name}
            autoComplete='off'
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Nom <span className={styles['form__inner__star']}> *</span>
          </label>
          <input
            type='text'
            className={styles['form__inner__grid__element__child']}
            name='company'
            onChange={(e) => setCompany(e.target.value)}
            placeholder='Saisir votre Nom'
            value={company}
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Téléphone
          </label>
          <input
            type='text'
            className={styles['form__inner__grid__element__child']}
            name='phone'
            onChange={(e) => setPhone(e.target.value)}
            placeholder='ex : 06 32 32 32 32'
            value={phone}
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Email <span className={styles['form__inner__star']}> *</span>
          </label>
          <label className={styles['form__not-email']}>Email non valide</label>
          <input
            type='mail'
            className={styles['form__inner__grid__element__child']}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email *'
            value={email}
            autoComplete='off'
          />
        </div>
      </div>
      <div className={styles['form__inner__grid__element__message']}>
        <label className={styles['form__inner__grid__element__child']}>
          Message
        </label>
        <textarea
          className={styles['form__inner__grid__element__child']}
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Saisir votre message'
          value={message}
        />
      </div>
      <div className={styles['form__inner__grid__element__terms']}>
        <input
          name='checkbox'
          className={styles['form__inner__grid__element__checkbox']}
          type='checkbox'
        />
        <label
          for='checkbox'
          className={styles['form__inner__grid__element__child']}
        >
          J'accepte de recevoir d'autres communications de HOFFMANN.AI. Vous
          pouvez vous désabonner à tout moment.<br></br>
          <span className={styles['form__inner__checkbox__message']}>
            En validant, vous autorisez HOFMANN.AI à stocker les données
            personnelles soumises afin qu'elles fournissent le contenu souhaité.
          </span>
        </label>
      </div>
      <input
        className={styles['form__input']}
        type='button'
        value='Envoyer'
        onClick={handleSubmit}
      />
      <div className={styles['form__message']}></div>
    </form>
  );
};

export default ContactForm;
