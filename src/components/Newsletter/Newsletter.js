// @ts-nocheck
import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [email, setEmail] = useState('');
  const validate = () => {
    setValidationMessage('Merci pour votre abonnement.');
    setEmail('');
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then(() => {
        validate();
      })
      .catch(() => {
        setValidationMessage('Une erreur est survenue.');
      });
  };

  return (
    <div className={styles['newsletter__module']}>
      <div className={styles['newsletter__module__inner']}>
        <div className={styles['newsletter__module__form']}>
          <form
            className={styles['newsletter__module__form__subscribe']}
            onSubmit={handleSubmit}
          >
            <input
              value={email}
              className={styles['newsletter__module__form__subscribe__input']}
              type='email'
              onChange={changeEmailHandler}
              name='email'
              id='email'
              placeholder='votre email...'
              required
            />
            <button
              className={styles['newsletter__module__form__subscribe__submit']}
              type='submit'
            >
              S'abonner
            </button>
            <h6>{validationMessage}</h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
