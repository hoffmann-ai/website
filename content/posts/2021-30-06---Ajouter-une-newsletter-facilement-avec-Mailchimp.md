---
title: Ajouter une newsletter facilement avec Mailchimp
date: "2021-06-30T23:46:37.121Z"
template: "post"
draft: false
slug: "ajouter-un-newsletter-facilement-avec-mailchimp"
category: "plugin"
tags:
  - "Newsletter"
  - "Extension"
description: "Ajoutez facilement une newsletter à votre site n'a jamais été aussi facile grâce à Mailchimmp."
socialImage: "/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/Mailchimp-logo.jpg"
---

Si vous souhaitez regrouper les données de votre audience et communiquer facilement avec celle-ci, intégrer une newsletter à votre site n'est pas forcément une mauvaise idée. Heureusement pour nous, la tâche nous est grandement facilitée avec Mailchimp !

## Mailchimp, c'est quoi ?

![Logo Mailchimp](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/Mailchimp-logo.jpg)

Mailchimp, c'est une plateforme qui offre des services de marketing diversifiés pour les petites et moyennes entreprises. L'un des pricipaux services proposés, et celui qui vas nous intéresser aujourd'hui, est celui de la gestion de newsletter.

## Comment ajouter une newsletter sur mon site avec Mailchimp ?

La première étape va être de vous créer un compte sur Mailchimp si cela n'est pas déjà fait. Pour cela, rendez-vous sur https://login.mailchimp.com/signup. Après connexion, vous devriez vous retrouvez sur le dashboard :

![dashboard Mailchimp](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/dashboard.png)

Ensuite, il faut ajouter un module de newsletter à votre site internet.

### Sur Wordpress

Sur Wordpress, plusieurs options s'offrent à vous, mais toutes les méthodes sont relativement simples.
La première méthode consiste à ajouter un module de code à votre site. Sur votre espace admin de Mailchimp, rendez-vous dans l'onglet "Create" puis "Signup Form" et choisissez "Embedded Form"; appuyez enfin sur "Begin". Copiez-collez le code qui s'y trouve un peu plus bas.
Vous pourrez ensuite l'ajouter dans une balise code de votre builder Wordpress.
Une autre possibilité implémentable très facilement, est d'utiliser directement les extensions Mailchimp disponibles dans votre gestionnaire de plugins. Au moins 3 extensions s'offrent à vous : "MC4WP: Mailchimp for Wordpress", "Easy Forms for MailChimp" et "Mailchimp for WooCommerce" si vous utilisez WooCommmerce. Téléchargez l'une de ces extensions et suivez les étapes d'installation.

![dashboard Mailchimp](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/plugins.png)

### Sur Gatsby avec ReactJS

![Gatsby](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/gatsby.png)

Si vous travaillez sur un site statique avec Gatsby, l'étape reste relativement simple. Il nous faut d'abord installer le plugin Mailchimp.
Rendez-vous sur le terminal de la racine de votre projet, et tapez l'une des lignes suivantes (yarn ou npm en fonction du manager de paquets que vous utilisez) :

```js
# npm
$ npm install gatsby-plugin-mailchimp

# yarn
$ yarn add gatsby-plugin-mailchimp
```

L'extension est maintenant installée. Allez maintenant dans votre fichier gatsby-config.js. Dans la section plugins, ajoutez ces lignes de codes :

```js
plugins: [
  ...{
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint: "https://votre-endpoint",
      timeout: 3500,
    },
  },
];
```

Vous devez ensuite entrez votre "endpoint". Le "endpoint" est un url que vous pouvez facilement retrouver sur votre admin mailchimp, dans le code que nous trouvé dans <a href="#sur-wordpress">cette section.</a>
Le lien recherché se trouve dans le "action" de la balise "form" :

![dashboard Mailchimp](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/lien.png)

Après avoir renseigné l'url, le tour est joué ! Il ne reste plus qu'à créer un formulaire et appeler la fonction addToMailchimp.

#### Étape 1 : Créer le formulaire

Nous allons dans un premier temps créer un component ReactJS que l'on va appeler Newsletter. Dans mon dossier components, je crée un nouveau dossier Newsletter, dans lequel je vais créer un fichier Newsletter.js. Dans mon cas je priviligirai l'utilisation des Hooks React, mais vous aurez le même résultat si vous passez par les classes React.
D'abord, on importe React et ce dont on aura besoin :

```js
import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
```

Puis l'on crée un component Newsletter que l'on va exporter:

```js
import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Newsletter = () => {
  return <div className="newsletter__module"></div>;
};
```

Ensuite, il faut créer le module en JSX. Ici, rien de bien compliqué : la fonction return doit retourner une seule balise "div", dans laquelle se trouve une balise "form" (formulaire). Dans cette balise "form", on ajoute un champ pour entrer son email ainsi qu'un bouton s'abonner. Voici à quoi ressemble le JSX :

```js
import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Newsletter = () => {
  return (
    <div className="newsletter__module">
      <div className="newsletter__module__inner">
        <h4>Abonnez-vous à notre newsletter !</h4>
        <div className="newsletter__module__form">
          <form
            className="newsletter__module__form__subscribe"
            onSubmit={handleSubmit}
          >
            <input
              value={email}
              className="newsletter__module__form__subscribe__input"
              type="email"
              onChange={changeEmailHandler}
              name="email"
              id="email"
              placeholder="votre email..."
              required
            />
            <button
              className="newsletter__module__form__subscribe__submit"
              type="submit"
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
```

On ajoute un peu de CSS:

```css
* {
  --primary-color: #0873e8;
  --text-color-dark-light: #d4d4d4;
  --text-color-dark: #4a4a4a;
}
.newsletter__module {
  color: #222;
  line-height: 1.625;
  font-size: 1rem;
  background-color: transparent;
  padding: 0% 10px 0% 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.newsletter__module__form__subscribe {
  background-color: transparent;
  width: 100%;
  display: grid;
  margin: auto;
  grid-template-columns: 70% 30%;
}
.newsletter__module__form__subscribe__input {
  font-size: 1rem;
  height: 35px;
  border-radius: 3px;
  border: 1px solid rgb(146, 146, 146, 0.5);
  padding-left: 8px;
  background-color: transparent;
}
.newsletter__module__form__subscribe__submit {
  font-size: 1rem;
  height: 39px;
  margin-left: 7%;
  border-radius: 3px;
  background-color: var(--primary-color);
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.1s ease-in;
  border: 1px solid rgb(146, 146, 146, 0.5);
}
.newsletter__module__form__subscribe__submit:hover {
  font-size: 1rem;
  height: 39px;
  margin-left: 7%;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  color: var(--primary-color);
  cursor: pointer;
  transition: 0.1s ease-in;
  border: 1px solid var(--primary-color);
}
```

et voilà le résultat :
![form](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/form.png)

La partie front-end est terminée. Maintenant, intéressons-nous au développement du back-end.
D'abord, nous allons créer un hook qui va permettre de mettre à jour notre variable "email" qui correspond à l'email de l'utilisateur.

```js
const[email, setEmail] = useState(''):
```

Qui sera appellé dans une nouvelle fonction `changeEmailHandler()` :

```js
const changeEmailHandler = (event) => {
  setEmail(event.target.value);
};
```

On crée également un second hook qui va simplement permettre d'actualiser le message, qui est vide au début :

```js
const [validationMessage, setValidationMessage] = useState("");
```

Et une fonction ` validate()` qui appellera notre hook :

```js
const validate = () => {
  setValidationMessage("Merci pour votre abonnement.");
};
```

La fonction ` changeEmailHandler()` est ensuite appelée dès que le champ (dans lequel l'utilisateur entre son email) subit un changement d'état. <br>

Parfait, nous arrivons à récupérer l'email de l'utilisateur et le stocker dans une variable.
Maintenant, il faut que lorsque l'utilisateur soumet son email, celui-ci soit ajouté à notre liste d'emails Mailchimp. Pour cela, on va faire appel à la fonction ` addToMailchimp()` que l'on a importée.
On commence par créer une fonction ` handleSubmit()` qui sera appelée lorsque le formulaire sera soumis (lorsque l'utilisateur aura appuyé sur "s'abonner").

```js
const handleSubmit = (e) => {
  e.preventDefault();
  validate();
  addToMailchimp(email)
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.log("failed adding email to newsletter.");
    });
  setEmail("");
};
```

Cette fonction, lorsqu'elle est appelée, fait en sorte que la page ne se recharge pas avec ` e.preventDefault()`, puis change le message en appelant la fonction ` validate()`. Enfin, elle appelle ` addToMailchimp()` en lui passant en paramètre l'email de l'utilisateur, qui s'occupe de l'ajouter à notre compte Mailchimp. Elle appelle en dernier ` setEmail()` pour remettre le champ à vide.

On y est presque ! <br>
Il suffit maintenant d'appeler nos fonctions ` handleSubmit()` et ` changeEmailHandler()`.<br>
On appelle la fonction ` handleSubmit()` dans l'attribut "onSubmit" de notre formulaire, et la fonction ` changeEmailHandler()` dans l'attribut "onChange" de notre input, ce qui donne :

```js
<form className="newsletter__module__form__subscribe" onSubmit={handleSubmit}>
  <input
    value={email}
    className="newsletter__module__form__subscribe__input"
    type="email"
    onChange={changeEmailHandler}
    name="email"
    id="email"
    placeholder="votre email..."
    required
  />
  <button className="newsletter__module__form__subscribe__submit" type="submit">
    S'abonner
  </button>
  <h6>{validationMessage}</h6>
</form>
```

Félicitations, le tour est joué ! Voyons maintenant comment envoyer un premier email à votre audience.
Vous trouverez les codes à télécharger <a href="#les-codes-à-télécharger">ici</a>.

### Envoyer son premier email à la communauté

Nous venons d'installer, d'une manière ou d'une autre, un formulaire à notre site.
Nous allons créer notre premier email. Rendez-vous sur l'onglet "Create" en haut à gauche du dashboard. Cliquez sur "Email". Vous avez le choix entre trois options : "Regular", "Plain text" et "Template".

![choix Format](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/choix-mail.png)

Nous allons choisir "Regular" pour débuter, mais libre à vous d'utiliser l'un des nombreux templates à votre disposition.
Ensuite, il faut donner un nom à votre campagne. Je vais l'appeler "premier mail".
Vous pouvez voir que par défaut le mail sera envoyé à votre audience entière, mais cette option est personnalisable.

![choix Format](/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/premier-mail.png)

Nous allons maintenant créer notre premier template. Allez sur l'onglet "Email templates" puis "Create template". Personnellement, je souhaite juste afficher un message de remerciements pour l'abonnement à la newsletter. Je choisis donc le template "Simple Text".
Indiquez l'email d'envoi, le sujet et le contenu.
Enfin, vous pouvez envoyer votre email grâce au bouton "Send" en haut à droite, et le tour est joué !

Mailchimp nous mâche grandement la tâche dans l'implémentation de newsletter, que l'on soit développeur ou non.

#### Les codes à télécharger

<a href="/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/exemple.js" download>Newsletter.js</a> <br>
<a href="/media/2021-30-06---Ajouter-une-newsletter-facilement-avec-Mailchimp/exemple.scss" download>Newsletter.scss</a>

<a href="#top">Retour en haut</a>
