---
title: Créer une application météo avec Bubble.io sans coder
date: "2021-06-25T23:46:37.121Z"
template: "post"
draft: false
slug: "creer-une-application-meteo-avec-bubble-io-sans-coder"
category: "No Code"
tags:
  - "No Code"
  - "Application web"
description: "Création d'une application météo avec Bubble.io, une plateforme No Code conçue pour la création d'applications mobile et web."
socialImage: "/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/Bubble.jpg"
---

Bubble est une plateforme No Code conçue pour la création de logiciels et d'applications web. Mon objectif était de créer une application météo : d’abord pour Paris, puis pour n’importe quelle ville du monde. Dans un premier temps j’ai suivi différents tutoriels proposés par la plateforme qui m’ont appris quelques fonctionnalités de base. Voici le premier rendu, simple et fonctionnel, affichant la météo actuelle à Paris :

![Weather app Paris](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/weatherAppParis.PNG)
 
Bubble a pour particularité de permettre la création d'applications mobiles et web sans coder. Les principales notions, et une certaine logique sont similaires à celles vues en programmation (C/Java) et peuvent aider. Le design, le contenu, et la dynamique de la page peuvent y être travaillés. Avec une palette d’outils à disposition (texte, image, liens…), on peut créer les pages statiques de notre app. 

![Palette outils](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/paletteOutils.PNG)

Ainsi, les éléments de notre choix peuvent être déplacés sur la page, à l’endroit souhaité. Voici par exemple un formulaire de saisie (pour entrer le nom d’une ville) et un bouton visant à déclencher l’affichage de la météo dans cette dernière.

![Elements](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/elements.PNG)
 
Les actions de ces éléments sont accessibles dans un espace appelé le workflow. En effet « workflows » signifie « flux de travail », et ceux-ci vont nous permettre de mettre en place un ensemble d’actions qui sont exécutées à partir d’un événement déclencheur sur la page. Pour mieux illustrer mon propos, voici un exemple d’actions que j’ai mises en place :

![Workflow](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/workflowStructure.PNG)
 
Lorsque l’utilisateur entre le nom de la ville, puis clique sur le bouton « Display the meteo in this city », un nouveau « cityName!» est créé. C’est ici qu’un parallèle est fait avec le fonctionnement des bases de données : cityName! est un type, ou encore une table, qui possède des attributs (ou champs) appelés « fields ». Ici, la classe possède deux attributs : NameCity (valeur saisie par l’utilisateur), et Finished un booléen (initialisé à « no ») permettant de supprimer ou non la ville d’une liste.

![CityName!](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/classeCityName.PNG)

L’action entraînée par le bouton Delete (premier bloc) consiste seulement à changer la valeur du booléen Finished, et ainsi supprimer la ville de la liste.

![Delete](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/boutonDelete.PNG)

Je vous ai parlé d'événements « actifs » (cliquer sur un bouton), mais il existe également des événements « passifs », tels que la connexion ou la déconnexion de l’utilisateur, qui peuvent eux aussi entraîner des actions.
 
Revenons à présent au design de notre application.

![Design](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/designApp.PNG)
 
Le tableau ci-dessus est un repeating groupe : chaque ligne suit un même modèle, et adapte les informations à la ville qu’elle contient. La colonne du milieu est un lien amenant à la page de l’API contenant les informations météorologiques de la ville présente sur sa ligne.

Afin de visualiser toutes les données générées et traitées par notre application, il suffit de se diriger vers la rubrique data, qui constitue en fait notre base de données. Deux parties m'ont particulièrement été utiles :

- Les data types ou les différentes tables existantes avec leurs attributs accompagnés de leur nature (text, yes/no...)

![DataTypes](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/DataTypes.PNG)

- App Data qui correspond à leur contenu : ici chaque ligne correspond à une entrée, et les colonnes représentent les attributs (les deux dernières sont automatiquement ajoutées par Bubble)

![AppData](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/AppData.PNG)

Basculons à présent sur la version qui affiche la météo seulement à Paris pour voir comment a été utilisée l’API météo. 

![APIConnector](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/APIConnector.PNG)
 
J’ai au préalable installé un plugin « API Connector », puis complété ses paramètres avec la clé que j’avais, et enfin configuré un appel : « GET http:/ …. ». Cet appel va simplement récupérer les informations fournies par l’API. Ces données sont sous format JSON, comme vous pouvez le voir ci-dessous.

![JSON](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/JSONParis.PNG)
 
De cette manière, en repartant dans la partie design, n’importe quelle des données correspondant à la météo de Paris est accessible.

![APIAppel](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/APIAppel.PNG)

Il m'est alors rendu possible d'afficher le nom de la ville, sa température (à laquelle je soustrais 273.15 pour la convertir en degrés Celsius), l’icône et enfin une description du temps actuel.

![API](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/composantsAPI.PNG)

La prochaine étape était pour moi de faire un nouvel appel d'API pour chacune des villes saisies : il s'agit alors d'intégrer un paramètre dans l'url de l'API dans sa configuration. Le paramètre "city" a été initialisé à "Paris", et c'est ensuite dans le workflow que l'on pourra le rendre dynamique.

![Parametre](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/APIParameter.png)

De la même manière que pour la première version simple de l'app, au moment de créer un nouvel objet de type "CityTest" à chaque fois que le bouton est cliqué, j'ai créé différents champs. C'est à ce moment que le paramètre est rendu dynamique: lorsque l'on sélectionne l'appel API correspondant, nous voyons apparaître le paramètre "city" et pouvons lui attribuer une valeur. J'ai ainsi choisi de lui attribuer la valeur de la ville saisie par l'utilisateur. 

![Parametre dynamique](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/DynamicParameter.png)

De cette manière, en finalisant le design à ma convenance, et en ajoutant les éléments que je souhaitais l'objectif a été atteint.

Voici ci-dessous l'application finale :

![Final](/media/2021-24-06---Créer-une-application-météo-avec-Bubble-io-sans-coder/FinalApp.png)

Voila une brève présentation des grandes étapes de création de l'application Weather App. Bubble a été pour moi un outil no-code très intéressant, et offrant une riche diversité d'outils. Ce n'est bien évidemment que le début de mon apprentissage sur Bubble, et il reste de nombreuses autres fonctionnalités à découvrir !
