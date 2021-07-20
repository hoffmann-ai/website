// @ts-nocheck
import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [newsletterAgree, setSewsletterAgree] = useState(false);
  const [email, setEmail] = useState('');
  const handleClickCheckBox = () => setSewsletterAgree(!newsletterAgree);

  const sendFeedback = () => {
    if (newsletterAgree) addToMailchimp(email);
  };

  return (
    <form
      className={styles['form__module']}
      name='contact'
      method='POST'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contact' />
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
            placeholder='Saisir votre prénom'
            autoComplete='off'
            required
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Nom <span className={styles['form__inner__star']}> *</span>
          </label>
          <input
            type='text'
            className={styles['form__inner__grid__element__child']}
            name='firstname'
            placeholder='Saisir votre Nom'
            required
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
            placeholder='ex : 06 32 32 32 32'
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
            autoComplete='off'
            required
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
          placeholder='Saisir votre message'
        />
      </div>
      <div className={styles['form__inner__grid__element__terms']}>
        <input
          name='checkbox'
          className={styles['form__inner__grid__element__checkbox']}
          type='checkbox'
          onChange={handleClickCheckBox}
          checked={newsletterAgree}
        />
        <label className={styles['form__inner__grid__element__child']}>
          J'accepte de recevoir d'autres communications de HOFFMANN.AI. Vous
          pouvez vous désabonner à tout moment.<br></br>
          <span className={styles['form__inner__checkbox__message']}>
            En validant, vous autorisez HOFMANN.AI à stocker les données
            personnelles soumises afin qu'elles fournissent le contenu souhaité.
          </span>
        </label>
      </div>
      <div className={styles['form__inner__grid__element__message']}>
        <input
          className={styles['form__input']}
          type='submit'
          onClick={sendFeedback}
          value='Envoyer'
        />
        <div className={styles['form__message']}></div>
      </div>
    </form>
  );
};

export default ContactForm;
