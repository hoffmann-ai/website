import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  // variables
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  // empty inputs messages
  const error = 'Ce champ est requis.';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    sendFeedback('***TEMPLATE_ID***', {
      name,
      firstname,
      phone,
      email,
      message,
    });
  };

  // reeceives templateId, variables in parameters
  const sendFeedback = () => {
    // window.emailjs
    //   .send('gmail', templateId, variables)
    //   .then(() => {
    //     setName('');
    //     setFirstname('');
    //     setPhone('');
    //     setEmail('');
    //     setMessage('');
    //   })
    //   .catch(() => {
    //     document.querySelector('.form-message').innerHTML =
    //       'Une erreur s est produite, veuillez réessayer.';
    //   });
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
            <span className={styles['form__inner__error__message']}>
              {firstname.length === 0 && submit ? error : ''}
            </span>
          </label>
          <input
            type='text'
            className={styles['form__inner__grid__element__child']}
            name='name'
            onChange={(e) => setFirstname(e.target.value)}
            placeholder='Saisir votre prénom'
            value={firstname}
            autoComplete='off'
          />
        </div>
        <div className={styles['form__inner__grid__element']}>
          <label className={styles['form__inner__grid__element__child']}>
            Nom <span className={styles['form__inner__star']}> *</span>
            <span className={styles['form__inner__error__message']}>
              {name.length === 0 && submit ? error : ''}
            </span>
          </label>
          <input
            type='text'
            className={styles['form__inner__grid__element__child']}
            name='firstname'
            onChange={(e) => setName(e.target.value)}
            placeholder='Saisir votre Nom'
            value={name}
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
            <span className={styles['form__inner__error__message']}>
              {email.length === 0 && submit ? error : ''}
            </span>
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
          type='button'
          value='Envoyer'
          onClick={handleSubmit}
        />
        <div className={styles['form__message']}></div>
      </div>
    </form>
  );
};

export default ContactForm;
