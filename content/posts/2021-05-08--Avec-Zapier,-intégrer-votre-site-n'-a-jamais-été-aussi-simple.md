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

Zapier est une société mondiale à distance qui permet aux utilisateurs finaux d'intégrer les applications Web qu'ils utilisent. C'est une plateforme qui va permettre le lien entre différentes applications (Google sheets, Airtable, Google Calendar, etc.) très facilement. 

## Quels sont les avantages ?

Il y a plusieurs avantages à utiliser Zapier. Le premier avantage est la facilité d'utilisation. 
#### 1.Facile à utiliser
Les Zaps ont été conçu pour être très faciles à utiliser pour n'importe qui. L'interface est très intuitive même pour une personne débutante. 

![dashboard Zapier](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple/dashboardZapier.png)

#### 2. Riche en applications et modulable
Zapier propose plus de 3000 applications que vous pouvez lier entre elles. Parmi elles, on retrouve : Google Sheets, Gmail, Slack, Twitter, Mailchimp, Google Drive, Trello... Vous pouvez lier toutes ces applications entre elles de la manière et l'ordre que vous souhaitez. 

![examples applications](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple)

#### 3. Très performant
Le troisième avantage et le principal, est que passer par Zapier permet de ne pas influer sur les performances de votre site. En effet, le référencement Google se fait désormais en fonction des performances globales de votre site : vitesse de chargement, lisibilité... Cela pousse donc les développeurs à utiliser des plateformes comme React/Gatsby par exemple, qui permettent la créations de sites statiques ultra performants. Lorsque que l'on cherche à avoir un site performant, on tend à être avare sur les lignes de codes et notamment les scripts Javascript. C'est pourquoi utiliser un **webhook** Zapier vous économise beaucoup de script, puisque toute la magie s'oppère indépendamment de votre site web. Vous pouvez tester les performances dee votre site avec <a target = "blank" href = "https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=fr">Google Lighthouse</a>.

![example Lighthouse](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple)


### Un webhook, c'est quoi ? 

![Webhook](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple)

Zapier propose des webhooks pour lier vos sites web. Ils permettent de déclencher une action suite à un évènement : envoi d'un formulaire de contact, abonnement à une newsletter, etc. Ils sont généralement utilisés pour faire communiquer des systèmes entre eux. C'est la façon la plus simple de recevoir une alerte lorsque quelque chose se produit dans un autre système. 

## Créer mon premier Zap avec un Webhook

Nous allons maintenant voir comment utiliser notre premier webhook avec Zapier. Ici, nous souhaitons récupérer les données d'un formulaire de contact, puis envoyer un mail avec les données à l'administrateur du site.

D'abord, créez-vous un compte sur le site officiel de Zapier : <a href = "https://zapier.com/" target = "blank">https://zapier.com</a>. Il faut savoir que Zapier propose une verson gratuite et des versions payantes. Vous avez également droit à des jours d'essai de fonctionnalités payantes.

Après avoir créé votre compte, vous devriez arriver sur votre tableau de bord :

![Dashboard Zapier](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple)

Vous pouvez à présent vous rendre dans l'onglet "Zaps" puis "Make a New Zap".

### 1. Configuer le Webhook

![Make a new zap Button](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple)

Dans la barre de recherche, je tape "Webhook by Zapier" Attention, l'application Webhook by Zapier n'est disponible qu'en version Premium. Ensuite, je choisis l'event Catch Hook, et j'appuie sur continue. Un lien appraît, c'est votre nouveau Webhook. Vous pouvez le copier dans votre presse-papier; nous l'utiliserons un peu plus tard. Enfin, il faut tester le webhook. Dans un premier temps, il faut coller le lien de vottre webhook dans votre navigateur; cela créera une requête que Zapier pourra tester. Après avoir effectué cette requête, vous pouvez appuyer sur le bouton "test trigger" pour vérifier que le webhook fonctionne correctement.
 
Votre Webhook est bien en place, il faut à présent lui donner une action à effectuer lorsqu'il "catchera" une requête.

### 1. Configuer l'action de réponse 

Sous le bloc que vous venez de configuer, vous pouvez à présent choisir l'actionque vous voulez effectuer. Ici, nous souhaitons envoyer un mail; nous allons donc choisir le module "Email by Zapier" puis l'action "Send Outbound Email".
Vous pouvez à présent choisir le déstinataire, objet et le contenu. Vous pouvez récupérer les variables que le hook récupère, et les afficher dans le contenu du mail :

![Make a new zap Button](/media/2021-05-08--Avec-Zapier,-intégrer-votre-site-n'-a-jamais-été-aussi-simple)

Enfin, vous pouvez appuyer sur "continue" puis "test trigger" et le tour ests joué ! 
