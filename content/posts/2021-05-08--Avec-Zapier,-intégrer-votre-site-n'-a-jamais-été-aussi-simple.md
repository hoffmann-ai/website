---
title: Avec Zapier, intégrer votre site n'a jamais été aussi simple
date: "2021-08-05T23:46:37.121Z"
template: "post"
draft: false
slug: "avec-zapier-integrer-votre-site-n-a-jamais-ete-aussi-simple"
category: "integration"
tags:
  - "performance"
  - "integration"
  - "webhook"
description: "Si vous voulez personnaliser les actions qui suivent l'envoi d'un formulaire, par exemple envoyer les données dans un google sheets puis envoyer un mail de notification, et tout cela sans endommager la performance de votre site, Zapier est fait pour vous !"
socialImage: "/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/logoZapier.png"
---

Si vous voulez personnaliser les actions qui suivent l'envoi d'un formulaire, par exemple envoyer les données dans un google sheets puis envoyer un mail de notification, et tout cela sans endommager la performance de votre site, Zapier est fait pour vous !

## Tout savoir sur Zapier

![Logo Zapier](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/logoZapier.png)

Zapier est une société qui permet aux utilisateurs finaux d'intégrer les applications Web qu'ils utilisent, telles que Google sheets, Airtable, Google Calendar, etc. C'est une plateforme qui va permettre le lien entre différentes applications très facilement. 

## Quels sont les avantages ?

Il y a plusieurs avantages à utiliser Zapier. La facilité d'utilisation, le grand nombre d'applications, ainsi que  le gain de temps et  de performances font de Zapier un outil incontournable.

#### 1.Facile à utiliser
Les Zaps ont été conçus pour être très faciles à utiliser pour n'importe qui. L'interface est très intuitive même pour une personne débutante. 

![dashboard Zapier](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/dashboardZapier.png)

#### 2. Riche en applications et modulable
Zapier propose plus de 3000 applications que vous pouvez lier entre elles. Parmi elles, on retrouve : Google Sheets, Gmail, Slack, Twitter, Mailchimp, Google Drive, Trello... Vous pouvez lier toutes ces applications entre elles de la manière et l'ordre que vous souhaitez. 

![examples applications](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/apps.png)

#### 3. Permet un gain de temps considérable
Le but principal de Zapier est d'automatiser toutes les actions qui peuvent être faites manuellement mais qui demandent de longues semaines de travail. Avec Zapier, vous n'avez plus à devoir gérer l'intégration de vos différentes applications, puisque tout se passe désormais sur une seule plateforme.


#### 4. Très performant
Le dernier avantage et le principal, est que passer par Zapier permet de ne pas influer sur les performances de votre site. En effet, le référencement Google se fait désormais en fonction des performances globales de votre site : vitesse de chargement, lisibilité... Cela pousse donc les développeurs à utiliser des plateformes comme React/Gatsby par exemple, qui permettent la créations de sites statiques ultra performants. Lorsque que l'on cherche à avoir un site performant, on tend à être avare sur les lignes de codes et notamment les scripts Javascript. C'est pourquoi utiliser un **webhook** Zapier vous économise beaucoup de script, puisque toute la magie s'oppère indépendamment de votre site web. Vous pouvez tester les performances dee votre site avec <a target = "blank" href = "https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=fr">Google Lighthouse</a>.

![example Lighthouse](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/lighthouse.png)


### Un webhook, c'est quoi ? 

![Webhook](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/webhook.png)

Zapier propose des webhooks pour lier vos sites web. Ils permettent de déclencher une action suite à un évènement : envoi d'un formulaire de contact, abonnement à une newsletter, etc. Ils sont généralement utilisés pour faire communiquer des systèmes entre eux. C'est la façon la plus simple de recevoir une alerte lorsque quelque chose se produit dans un autre système. 

## Créer mon premier Zap avec un Webhook

Nous allons maintenant voir comment utiliser notre premier webhook avec Zapier. Ici, nous souhaitons récupérer les données d'un formulaire de contact, puis envoyer un mail avec les données à l'administrateur du site.

D'abord, créez-vous un compte sur le site officiel de Zapier : <a href = "https://zapier.com/" target = "blank">https://zapier.com</a>. Il faut savoir que Zapier propose une verson gratuite et des versions payantes. Vous avez également droit à des jours d'essai de fonctionnalités payantes.

Après avoir créé votre compte, vous devriez arriver sur votre tableau de bord :

![dashboard Zapier](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/dashboardZapier.png)

Vous pouvez à présent vous rendre dans l'onglet "Zaps" puis "Make a New Zap".

![Make a new zap Button](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/button.png)


### 1. Configuer le Webhook

Dans la barre de recherche, vous pouvez taper "Webhook by Zapier". Attention, l'application Webhook by Zapier n'est disponible qu'en version Premium. Ensuite, choisissez l'event Catch Hook, et appuyez sur continue. Un lien appraît, c'est votre nouveau Webhook. Vous pouvez le copier dans votre presse-papier; nous l'utiliserons un peu plus tard. Enfin, il faut tester le webhook. Dans un premier temps, il faut coller le lien de votre webhook dans votre navigateur; cela créera une requête que Zapier pourra tester. Après avoir effectué cette requête, vous pouvez appuyer sur le bouton "Test Trigger" pour vérifier que le webhook fonctionne correctement.
 
Votre Webhook est bien en place, il faut à présent lui donner une action à effectuer lorsqu'il "catchera" une requête.

### 1. Configuer l'action de réponse 

Sous le bloc que vous venez de configuer, vous pouvez à présent choisir l'action que vous voulez effectuer. Ici, nous souhaitons envoyer un mail; nous allons donc choisir le module "Email by Zapier" puis l'action "Send Outbound Email".

![Make a new zap Button](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/schema.png)


Vous pouvez à présent choisir le destinataire, l'objet et le contenu. Vous pouvez également récupérer les variables envoyées au webhook, et les afficher dans le contenu du mail :

![mail content](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/mailBody.png)

Enfin, vous pouvez appuyer sur "Continue" puis "Test Trigger" et le tour est joué ! 
