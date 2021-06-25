// @flow strict
import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  const [validationMessage, setValidationMessage] = useState();
  const validate = () => {
    setValidationMessage('Vous venez de vous abonner.');
  };
  return (
    <div className={styles['newsletter__module']}>
      <div className={styles['newsletter__module__inner']}>
        <h4>Abonnez-vous à notre newsletter !</h4>
        <div className={styles['newsletter__module__form']}>
          <form
            className={styles['newsletter__module__form__subscribe']}
            onSubmit={validate}
          >
            <input
              className={styles['newsletter__module__form__subscribe__input']}
              type='email'
              onChange={1}
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
