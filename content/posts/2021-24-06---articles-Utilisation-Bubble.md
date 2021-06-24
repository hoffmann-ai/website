---
title: Utilisation de Bubble.io
date: "2021-24-06T23:46:37.121Z"
template: "post"
draft: false
slug: "articles-Utilisation-Bubble"
category: "No-code tools"
tags:
  - "Creating an application"
  - "Learning to use Bubble"
description: "Application météo avec une API"
socialImage: "/media/2021-24-06---articles-Utilisation-Bubble/FinalApp.png"
---

Cela fait maintenant 3 jours que j’utilise l’application Bubble. Dans un premier temps j’ai suivi différents tutoriels proposés par la plateforme qui m’ont appris quelques fonctionnalités. Mon objectif était de créer une application météo : d’abord pour Paris, puis pour n’importe quelle ville du monde. L’objectif a été atteint pour afficher la météo à Paris, mais pas encore totalement pour toutes les villes. 

Voici le premier rendu, simple et fonctionnel, affichant la météo actuelle à Paris :

![Weather app Paris](weatherAppParis.PNG)
 
Bubble a pour particularité de permettre la création d'applications mobiles et web sans coder. Bien sûr, les principales notions, et une certaine logique sont similaires à celles vues en programmation (C/Java) et peuvent aider. 

Le design, le contenu, et la dynamique de la page peuvent y être travaillés. Avec une palette d’outils à disposition (texte, image, liens…) on peut, dans un premier temps, créer manuellement les pages de notre app. 

![Palette outils](paletteOutils.PNG)
 
Ainsi, les éléments de notre choix peuvent être déplacés sur la page, à l’endroit souhaité. Voici par exemple un formulaire de saisie (pour entrer le nom d’une ville) et un bouton visant à déclencher l’affichage de la météo dans cette dernière.

![Elements](elements.PNG)
 
Les actions de ces éléments ne sont accessibles que dans un espace appelé le workflow. En effet «workflows» signifie « flux de travail », et ceux-ci vont nous permettre de mettre en place un ensemble d’actions qui démarre à partir d’un événement déclenché sur la page. Pour mieux illustrer mon propos voici un exemple d’actions que j’ai mises en place :

![Workflow](workflowStructure.PNG)
 
Lorsque l’utilisateur entre le nom de la ville, puis clique sur le bouton « Display the meteo in this city », un nouveau « cityName!» est créé. C’est ici qu’un parallèle est fait avec le fonctionnement des bases de données : cityName! est un type, ou encore une table, qui possède des attributs (ou champs) appelés « fields ». Ici, la classe possède deux attributs : NameCity (valeur saisie par l’utilisateur), et Finished un booléen (initialisé à « no ») permettant de supprimer ou non la ville d’une liste.

![CityName!](classeCityName!.PNG)
 

L’action entraînée par le bouton Delete (premier bloc) consiste seulement à changer la valeur du booléen Finished, et ainsi supprimer la ville de la liste.

![Delete](boutonDelete.PNG)

Je vous ai parlé d'événements « actifs » (cliquer sur un bouton), mais il existe également des événements « passifs », tels que la connexion ou la déconnexion de l’utilisateur, qui peuvent eux aussi entraîner des actions.
 
Revenons à présent au design de notre application.

![Design](designApp.PNG)
 
Le tableau ci-dessus est un repeating groupe : chaque ligne suit un même modèle, et adapte les informations à la ville qu’elle contient. La colonne du milieu est un lien amenant à la page de l’API contenant les informations météorologiques de la ville présente sur sa ligne.

Afin de visualiser toutes les données générées et traitées par notre application, il suffit de se dirigier vers la rubrique data, qui constitue en fait notre base de données. Deux parties m'ont particulièrement été utiles :

- Les data types ou les différentes tables existantes avec leurs attributs accompagnés de leur nature (text, yes/no...)

![DataTypes](DataTypes.PNG)

- App Data qui correspond à leur contenu : ici chaque ligne correspond à une entrée, et les colonnes représentent les attributs (les deux dernières sont automatiquement ajoutées par Bubble)

![AppData](AppData.PNG)

Basculons à présent sur la version qui affiche la météo seulement à Paris pour voir comment a été utilisée l’API météo. 

![APIConnector](APIConnector.PNG)
 
Pour ma part, j’ai au préalable installé un plugin « API Connector », puis complété ses paramètres avec la clé que j’avais, et enfin configuré un appel : « GET http:/ …. ». Cet appel va simplement récupérer les informations fournies par l’API et présentes sur la page correspondant à cet URL. Ces données sont sous format JSON, comme vous pouvez le voir ci-dessous.


![JSON](JSONParis.PNG)
 
De cette manière, en repartant dans la partie design, n’importe quelle des données correspondant à la météo de Paris est accessible.

![APIAppel](APIAppel.PNG)
 

Il m'est alors rendu possible d'afficher le nom de la ville, sa température (à laquelle je soustrais 273.15 pour la convertir en degrés Celsius), l’icône et enfin une description du temps actuel.

![API](composantsAPI.PNG)

La prochaine étape était pour moi de faire un nouvel appel d'API pour chacune des villes saisies : il s'agit alors d'intégrer un paramètre dans l'url de l'API dans sa configuration. Le paramètre "city" a été initialisé à "Paris", et c'est ensuite dans le workflow que l'on pourra le rendre dynamique.

![Parametre](APIParameter.png)

De la même manière que pour la première version simple de l'app, au moment de créer un nouvel objet de type "CityTest" à chaque fois que le bouton est cliqué, j'ai créé différents champs. C'est à ce moment que le paramètre est rendu dynamique: lorsque l'on sélectionne l'appel API correspondant, nous voyons apparaître le paramètre "city" et pouvons lui attribuer une valeur. J'ai ainsi choisi de lui attribuer la valeur de la ville saisie par l'utilisateur. 

![Parametre dynamique](DynamicParameter.png)

De cette manière, en finalisant le design à ma convenance, et en ajoutant les éléments que je souhaitais l'objectif a été atteint.

Voici ci-dessous l'application finale :

![Final](FinalApp.png)


Voila une brève présentation des grandes étapes de création de l'application Weather App. Bubble a été pour moi un outil no-code très intéressant, et offrant une riche diversité d'outils. Ce n'est bien évidemment que le début de mon apprentissage sur Bubble, et il reste de nombreuses autres fonctionnalités à découvrir !


