---
title: Comment Gatsby vous permet de créer des sites statiques ultras performants
date: "2021-08-04T23:46:37.121Z"
template: "post"
draft: false
slug: "creer-un-site-statique-avec-gatsby"
socialImage: "/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/Garsby.jpg"
category: "Web"
tags:
  - "site statique"
  - "performance"
  - "SEO"
  - "Gatsby"
description: "Création d'un site statique performant avec Gatsby. Quel sont les avantages et comment ça marche ?"
---

##Qu'est ce que Gatsby

Gatsby est un Framework javascript basé sur React, qui permet la génération de sites statiques, alimenté par GraphQL. Gatsby permet à quiconque de créer des sites web rapides et optimisés, autant au niveau des performances que du SEO. Gatsby récupère pour votre site, des données pouvant provenir de differentes sources : d'appels API, d'autres sites web existants et de fichiers via GraphQL. Avec ces données Gatsby construit un site statique en fonction des réglages et configurations que vous avez spécifié.

![Gatsby](/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/Garsby.jpg)

##Pourquoi choisir Gatsby

Le principal avantage de la construction d’un site statique avec Gatsby est la vitesse, que les webmasters ont essayé d’optimiser depuis l’annonce de Google, concernant l'utilisation de la vitesse du site dans le classement de recherche web. Les fortes performances des sites contruits avec Garsby permettent d'avoir un meilleur référencement, donc plus de visibilité.

##Site statique vs site dynamique, quelle est la différence ?

Un site web dynamique n'affiche pas toujours les mêmes informations à chaque fois, en fonction de l'utilisateur, du lieu de la connexion ou encore de l'heure. Dans un site dynamique, le client envoie une requête au serveur, contenant certaines informations, par exemple ses identifiants. Le serveur à l'aide de ces informations va générer la page à afficher, éventuellement chercher des informations dans une base de données, puis la renvoyer au client. L'avantage d'un site dynamique est donc la très grande souplesse d'affichage. Avec un seul code source, on peut générer de nombreuses pages différentes en fonctions des données envoyé par le client.

![site dynamique](/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/site_dynamique.jpg)

Un site statique, lui, diffère d'un site dynamique par le fait qu'il affichera toujours le même contenu à chaque fois. À moins, bien sûr qu'on modifie le code source. La page est déjà générée, et lorsque un client fait une requête au serveur, celui-ci peut directement lui renvoyer la page. Coté client, on verra donc la page se charger beaucoup plus rapidement. L'avantage d'un site statique est surtout la performance élevée dont il fait preuve.

![site statique](/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/site-statique.jpg)

##Comment Gatsby fonctionne

On peut résumer la génération d'un site Gatsby en 3 étapes.
Premièrement, Gatsby récupère les différentes données dont il a besoin pour le site. Ces données peuvent venir de fichier local, comme des images ou des fichiers markdown, mais aussi d'api ou de CMS.
Ensuite, le site va être compilé pour générer une page statique qui pourra être affichée par un navigateur.
Enfin, lorsque le site est hébergé, quand un client va faire une requête pour obtenir une page web, le serveur va lui renvoyer instantanément la page qui aura été générée à l'avance

![fonctionnement gatsby](/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/how-Gatsby-work.png)

Bien que ça apporte beaucoup d'avantages, le défaut de cette méthode est que le site à besoin d'être recompilé à chaque fois que le contenu est modifié.

##Les avantages de Gatsby

L'avantage le plus notable de Gatsby est, vous l'aurez compris, la forte performance des sites. Cela est en grande partie dû au fait qu'il s'agit de sites statiques, donc rapides à charge. Mais pas que, Gatsby est complètement optimisé dans ce but. Il permet par exemple de faire du LazyLoading, c'est-à-dire du chargement asynchrone. Par exemple : si les images peuvent parfois ralentir le changement du site, Gatsby propose dès les charger en parallèle, sans bloquer l'affichage de la page.
Gatsby est un avantage aussi au niveau du SEO. En effet la performance du site à des conséquences directes sur le référencement, depuis l'annonce de Google disant inclure la vitesse d'affichage comme facteur pour le référencement.
Le dernier avantage important de Gatsby est la sécurité. Comme les pages sont pré-généré, il n’y a pas de connexion directe à la base de données, aux dépendances, aux données utilisateur ou à d’autres informations sensibles.

##Gatsby vs Nextjs

NextJS est un autre framework permettant de générer des sites statiques.
La principale différence entre NextJS et Gatsby se situe au niveau du chargement des données.
Si Gatsby est si avantageux au niveau des performances, c'est parce que les données sont téléchargées au moment du build. Le désavantage, c'est que le site doit repasser par une phase de build à chaque fois que l'on souhaite en modifier le contenu.
Next.js en revanche propose un rendu côté serveur. Cela signifie que les pages sont traitées par un serveur NodeJS au moment de la requête par le client et le HTML est envoyé tel-quel. Une surcouche JavaScript va ensuite permettre de dynamiser le contenu ainsi récupéré.

Il est donc préférable d'utiliser Gatsby si votre site n'a pas vocation à être modifieé régulièrement. Autrement, NextJS est une bonne alternative, en dépit d'une petite perte de performance.

![comparaison framework site statique](/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/comparatifs.png)

##Créer votre site avec Gatsby

l'installation de Gatsby nécessite d'avoir au préalable NodeJS et de git d'installé sur votre machine.
Attention, la version de node doit être au minimum v12.13, ou une version ultérieure.

L'interface de ligne de commande Gatsby (CLI) est un outil qui vous permet de créer rapidement de nouveaux sites alimentés par Gatsby et d'exécuter des commandes pour développer des sites Gatsby.
L'interface CLI est un paquet npm, ce qui signifie que vous pouvez l'installer à l'aide de npm.

Installez le CLI de Gatsby globalement en exécutant la commande ci-dessous. (Vous avez installé une ancienne version de Gatsby CLI ? Cette commande vous mettra également à jour vers la dernière version).
```console
$ npm install -g gatsby-cli
```

Pour créer votre site, exécutez la commande suivante dans le terminal. Cela lancera un formulaire interactif qui vous aidera à créer un nouveau site Gatsby.
```console
$ gatsby new
```

Suivez le formulaire en selectionnant vos options.
Voici les options que je vous conseil:
```console
✔ What would you like to call your site?
· My First Gatsby Site

✔ What would you like to name the folder where your site will be created?
· my-first-gatsby-site

✔ Will you be using a CMS?
· No (or I'll add it later)

✔ Would you like to install a styling system?
· No (or I'll add it later)

✔ Would you like to install additional features with other plugins?
· Done

Thanks! Here's what we'll now do:

  🛠  Create a new Gatsby site in the folder my-first-gatsby-site

? Shall we do this? (Y/n) › Yes
```

Lorsque l'invite demande "Shall we do this ?", entrez "Y". La commande gatsby new va commencer à construire votre site. La vitesse de téléchargement de votre Internet influencera la durée d'exécution de cette commande. Une fois qu'elle est terminée, vous devriez voir un message comme celui-ci :
```console
🎉  Your new Gatsby site My First Gatsby Site has been successfully
created at ~/Desktop/my-first-gatsby-site.
Start by going to the directory with

  cd my-first-gatsby-site

Start the local development server with

  npm run develop

See all commands at

  https://www.gatsbyjs.com/docs/gatsby-cli/
```

Une fois la commande executé, votre tout nouveau site Gatsby à été créé !

##Lancer votre site en local

Tout d'abord commencez par rentrer dans le dossier contenat votre projet.
Puis, depuis ce dossier, lancer le serveur de developpement avec la commande suivante :
```console
# renter dans le dossier
$ cd my-first-gatsby-site

# lancer le serveur de developpement
$ gatsby develop
```

Apres un court instant, la console devrait vous afficher le message suivant :
```console
You can now view my-first-gatsby-site in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
```

Vous pouvez maintenant ouvrir votre navigateur à l'url : http://localhost:8000/
Et.. Tada !!

![siet statique Gatsby](/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/Gatsby_site_result.png)

Votre premier site Gatsby est lancé et près à être édité !