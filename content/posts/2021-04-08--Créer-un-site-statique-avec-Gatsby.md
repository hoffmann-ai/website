---
title: Créer un site statique avec Gatsby
date: "2021-08-04T23:46:37.121Z"
template: "post"
draft: false
slug: "creer-un-site-statique-avec-gatsby"
socialImage: "/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/Garsby.jpg"
---

##Qu'est ce que Gatsby

Gatsby est un Framework javascript basé sur React, qui permet la génération de sites statiques, alimenté par GraphQL. Gatsby permet à quiconque de créer des sites web rapides et optimisés, autant au niveau des performances que du SEO. Gatsby récupère pour votre site, des données pouvant provenir de differentes sources : d'appels API, d'autres sites web existants et de fichiers via GraphQL. Avec ces données Gatsby construit un site statique en fonction des réglages et configurations que vous avez spécifié.

![Gatsby](/media/2021-04-08--Créer-un-site-statique-avec-Gatsby/Garsby.jpg)

##Pourquoi choisir Gatsby

Le principal avantage de la construction d’un site statique avec Gatsby est la vitesse, que les webmasters ont essayé d’optimiser depuis l’annonce de Google, concernant l'utilisation de la vitesse du site dans le classement de recherche web. Les fortes performances des sites contruits avec Garsby permettent d'avoir un meilleur référencement, donc plus de visibilité.

##Prérequis

l'installation de Gatsby nécessite d'avoir au préalable NodeJS et de git d'installé sur votre machine.
Pour tester l'instalation de ces deux paquets, utilisez les commandes suivantes : 

```console
# Node
$ node -v

# Git
$ git --version
```

Attention, la version de node doit être au minimum v12.13, ou une version ultérieure.

Si il vous manque l'un de ces paquets, voici comment les installer :

Node :
```console
# ubuntu
$ sudo apt install nodejs
```

Git : 

```console
# ubuntu
$ sudo apt install git
```

##Gatsby-CLI

L'interface de ligne de commande Gatsby (CLI) est un outil qui vous permet de créer rapidement de nouveaux sites alimentés par Gatsby et d'exécuter des commandes pour développer des sites Gatsby.
L'interface CLI est un paquet npm, ce qui signifie que vous pouvez l'installer à l'aide de npm.

Installez le CLI de Gatsby globalement en exécutant la commande ci-dessous. (Vous avez installé une ancienne version de Gatsby CLI ? Cette commande vous mettra également à jour vers la dernière version).

```console
$ npm install -g gatsby-cli
```

Vérifiez que vous avez la bonne version installée en exécutant la commande ci-dessous. Vous devez avoir la version 3 ou une version plus récente.

```console
$ gatsby --version
```

##Créer votre premier site avec Gatsby !

Exécutez la commande suivante dans le terminal. Cela lancera un formulaire interactif qui vous aidera à créer un nouveau site Gatsby.
```console
$ gatsby new
```

Entrez un nom pour votre projet
```console
What would you like to call your site?
✔ · My First Gatsby Site
```

Lorsque l'invite demande "Comment voulez-vous nommer le dossier dans lequel votre site sera créé ?", utilisez le nom de dossier par défaut, qui sera basé sur le nom du site que vous avez choisi.
```console
What would you like to name the folder where your site will be created?
✔ my-first-gatsby-site
```

Lorsque l'invite demande "Utiliserez-vous un CMS ?", sélectionnez "Non (ou je l'ajouterai plus tard)".
```console
✔ Will you be using a CMS?
· No (or I'll add it later)
```

Lorsque l'invite demande "Voulez-vous installer un système de style ?", sélectionnez "Non (ou je l'ajouterai plus tard)". (Vous ajouterez les styles manuellement plus tard).
```console
✔ Would you like to install a styling system?
· No (or I'll add it later)
```

Quand Gatsby vous demande "Would you like to install additional features with other plugins?", vous pouvez selectionner "Done" pour passer cette étape.
```console
✔ Would you like to install additional features with other plugins?
· Done
```

L'invite vous montrera un résumé de ce que gatsby new va faire. Cela devrait ressembler à quelque chose comme ci-dessous.
```console
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