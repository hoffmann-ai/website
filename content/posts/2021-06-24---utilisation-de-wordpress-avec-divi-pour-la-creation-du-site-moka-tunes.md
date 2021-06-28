---
title: Utilisation de WordPress avec Divi pour la création du site Moka Tunes
date: "2021-06-24T22:40:32.169Z"
template: "post"
draft: false
slug: "utilisation-de-wordpress-avec-divi-pour-la-creation-du-site-moka-tunes"
category: "Web design"
tags:
  - "Web design"
  - "Web Development"
description: "WordPress est devenu un outil très utile et facile d'utilisation dans le monde du web design, notament avec les thèmes proposés, tels que Divi. C'est pourquoi j'ai utilisé ces outils afin de créear le site de web radio du nom de Moka Tunes."
socialImage: "/media/2021-06-24---utilisation-de-wordpress-avec-divi-pour-la-creation-du-site-moka-tunes/imagepage.png"
---

## QU'EST-CE QUE WORDPRESS ?

Il s'agit d'un système de gestion de contenu (SGC) qui permet la création rapide de sites web, de blogs, de boutiques en ligne et bien d'autres types de sites. En plus d'être gratuit, WordPress est facile et rapide à installer, et permet une prise en main accessible à tous, de par l'ergonomie de son interface permettant une grande intuitivité. De plus, WordPress s'adresse à tous grâce à une interface ne nécessitant pas forcément de connaissances approfondies en programmation, tout en permettant aux plus avancés d'utiliser du code pour implémenter davantage leur site.

WordPress permet également l'installation de divers thèmes, utiles à la personnalisation des pages du site, ce qui permet de multiplier ses possibilités d'utilisation

## QU'EST-CE QUE DIVI ?

Il s'agit d'un des thèmes les plus connus de WordPress, mais aussi d'un plugin, permettant à tous les utilisateurs, même les moins expérimentés en programmation, de créer des sites web. En effet, Divi propose un éventail de possibilités en terme de création de contenu, tout en offrant un éditeur visuel, idéal pour la création et la modification de pages web sans avoir nécessairement recours au code informatique. Grâce à son concept de base, "WYSIWYG", c'est-à-dire "What You See Is What You Get", Divi permet une grande interactivité entre l'utilisateur et son site.

## CREATION DE MOKA TUNES AVEC DIVI

Moka Tunes est un site de web radio.

### Problématique :

Le site originel, qui avait été créé par le client avec un autre thème de WordPress appelé Elementor, contenait plusieurs pages, disposant chacune d'éléments précis. Or, étant une web radio, le créateur de Moka Tunes recharchait un site où toutes les informations pourraient être bien organisées mais, avant tout, disponibles sur la même page afin de pouvoir écouter le son de la radio en continu, tout en naviguant comme à son bon vouloir sur le site, sans risquer d'interrompre le son à chaque changement.

### Les principaux élements qu'il a fallu implémenter

- **Création de la page du site**

![logo Moka Tunes](media/2021-06-24---utilisation-de-wordpress-avec-divi-pour-la-creation-du-site-moka-tunes/logo.png)

Pour créer une page, 3 choix s'offrent à nous avec Divi.

![3 choix](choix.png )

  1. Le premier choix, aussi appelé "from scratch", permet de partir d'une page vierge et de créer son propre design, tout en implémentant les élements souhaités. Cela permet de laisser libre cours à son imagination, d'explorer sa créativité, mais représente également une bonne méthode de prise en main de Divi lorsque l'on débute.

  2. Le deuxième choix est une excellente alternative au premier lorsque l'on recherche un design préconçu. En effet, "choisir sa mise en page" permet d'accéder à un large choix de layouts déjà conçus sur lesquels on peut apporter toutes les modifications souhaitées afin de personnaliser sa page et de rajouter, supprimer ou modifier les éléments de son choix.

  3. Le troisième choix consiste à cloner une page déjà existante, ce qui s'avère particulièrement utile lorsque l'on ne recherche que des modificatios mineures, telles que des changements de textes, d'images, etc d'une page à l'autre mais que l'on souhaite conserver le design déjà établi.

Pour la création de la page du site Moka Tunes, j'ai donc opté pour un layout préconçu nommé "Design Agency Landing Page", que j'ai, par la suite, modifié afin de qu'il corresponde aux attentes pour le site Moka Tunes.

![Design Agency](designagency.png)

Afin de modifier ce layout et d'y ajouter les éléments essentiels au site Moka Tunes, je me suis servie du site déjà existant afin de repérer les parties à implémenter pour ensuite les organiser de façon élégante sur la nouvelle page.
L'avantage de choisir un layout dans ce cas a été pour moi d'avoir un modèle de page élégant, avec des couleurs et des polices d'écriture spécifiques. J'ai ensuite pu modifier à ma guise l'intégralité de la page afin de la personnaliser pour le site Moka Tunes.

- **Un menu**

![menu](menu.png)

Sur le précédent site, en cliquant sur un élément du menu, le site envoyait la personne sur la page correspondante, la faisant ainsi quitter la page sur laquelle elle se trouvait. Or, il ne fallait qu'une seule page sur le site et donc un menu renvoyant à un endroit précis d’une même page. Pour cela, une manipulation très simple permet de créer des liens internes à une même page.

La première étape consiste à aller sur l'élément sur lequel on souhaiterait se rendre après avoir cliqué sur un élément du menu et d'accéder à la partie "Avancé" de ses paramètres. Dans le champs ID CSS, on attribue le nom de notre choix à l'élément : par exemple, ci-dessous, "mokatqui" correspond à la partie intitulée "Moka, t'es qui ?".

![Moka, t'es qui ? (élément)](mokatquielement.png)

La deuxième et dernière étape consiste à se rendre sur l'élément sur lequel on cliquera pour nous renvoyer sur une partie de la page. Dans notre exemple, cet élément est le troisième du menu. Dans les paramètres, on accède au "Contenu" puis on rentre l'URL du lien. Cet URL doit porter le même nom que celui attribué à la première étape, par exemple, "mokatqui", mais en précédant ce nom de #.

![Moka, t'es qui ? (menu)](mokatquimenu.png)

Ainsi, au lieu de changer de page en cliquant sur un élément du menu, on reste sur la même page mais chaque élément renvoie à la partie correspondante de la page.

- **Liens externes**

Les liens externes sont souvent nécessaires à de nombreux sites. Ils permettent, en cliquant sur un élément de notre choix, d'être envoyé sur une page externe au site WordPress. Dans le cas de Moka Tunes, j'ai opté pour un clic gauche sur certains mots ou groupes de mots, par exemple, "Facebook" et "Instagram" sur l'image ci-dessous, afin de renvoyer l'utilisateur sur une page externe au site. Pour se faire, il suffit de sélectionner le texte que l'on souhaite puis de cliquer sur l'icône "Insérer un lien" qui s'affiche après la séléction et de rentrer l'URL voulu dans le champ.

![Liens externes](lienextfi.png)

Pour associer un élément, tel qu'une image, à un lien, il suffit de se rendre dans les paramètres de cet élément, puis dans "Contenu", et entrer l'URL du lien de la page externe dans le champs URL de l'élément (ici, dans le champ "URL du lien de l'image".

![Liens externes](lienbouton.png)

- **Radio player**

Le radio player, permettant d'écouter les sons diffusés sur Moka Tunes et de voir les 5 derniers sons écoutés, représente la partie la plus avancée du site en terme de code dans la mesure où il a fallu utiliser le CSS afin d'obtenir la barre ci-dessous :

![Radio Player](radioplayer.png)

Divi propose également de nombreuses possibilités afin de rendre le site que l'on crée le plus interactif et intuitif possible. Par exemple, j'ai rajouté une flèche à droite de la barre du radio player afin de pouvoir revenir au menu du début de page facilement et rapidement, par un simple clic sur la flèche. De plus, j'ai rendu cette barre "sticky to Bottom", c'est-à-dire qu'elle reste toujours présente sur le bas de la page, même en faisant défiler cette dernière.
        
Pour conclure, j'ai apprécié travailler sur WordPress avec Divi pour la création de ce site, notamment grâce aux nombreux choix que propose Divi en terme de design et de personnalisation. De plus, la caractère intuitif de Divi le rend facile d'utilisation et permet de créer la page que l'on souhaite, sans être contraint par des connaissances précises dans un certain langage de programmation. Mais, appréciant programmer, j'ai aimé avoir la possibilité d'explorer le CSS, langage que je n'avais encore jamais utilisé auparavant.
