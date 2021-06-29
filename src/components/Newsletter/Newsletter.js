// @ts-nocheck
import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [email, setEmail] = useState('');
  const validate = () => {
    setValidationMessage('Merci pour votre abonnement.');
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    addToMailchimp(email)
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log('failed adding email to newsletter.');
      });
    setEmail('');
  };

  return (
    <div className={styles['newsletter__module']}>
      <div className={styles['newsletter__module__inner']}>
        <h4>Abonnez-vous à notre newsletter !</h4>
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
