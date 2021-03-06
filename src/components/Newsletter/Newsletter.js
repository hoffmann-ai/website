// @flow strict
import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from './Newsletter.module.scss';

type Props = {
  style: string,
};

const Newsletter = ({ style }: Props) => {
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
            className={
              style === 'responsive'
                ? styles['newsletter__module__form__subscribe__navbar']
                : styles['newsletter__module__form__subscribe']
            }
            onSubmit={handleSubmit}
          >
            <input
              value={email}
              className={styles['newsletter__module__form__subscribe__input']}
              type='email'
              onChange={changeEmailHandler}
              name='email'
              id='email'
              placeholder='Newsletter'
              required
            />
            <button
              className={`${styles['newsletter__module__form__subscribe__submit']} ${styles['button']}`}
              type='submit'
            >
              S'abonner
            </button>
            <h6 className={styles['newsletter__module__form__message']}>
              {validationMessage}
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
