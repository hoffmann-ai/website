# **Utilisation de BUBBLE.IO**

## **Application météo avec une API**

Cela fait maintenant 3 jours que j’utilise l’application Bubble. Dans un premier temps j’ai suivi différents tutoriels proposés par la plateforme qui m’ont appris quelques fonctionnalités. Mon objectif était de créer une application météo : d’abord pour Paris, puis pour n’importe quelle ville du monde. L’objectif a été atteint pour afficher la météo à Paris, mais pas encore totalement pour toutes les villes. 

Voici le premier rendu, simple et fonctionnel, affichant la météo actuelle à Paris :

<img style="display: block; margin: auto;"
src="weatherAppParis.PNG">
</p>
 
Bubble a pour particularité de permettre la création d'applications mobiles et web sans coder. Bien sûr, les principales notions, et une certaine logique sont similaires à celles vues en programmation (C/Java) et peuvent aider. 

Le design, le contenu, et la dynamique de la page peuvent y être travaillés. Avec une palette d’outils à disposition (texte, image, liens…) on peut, dans un premier temps, créer manuellement les pages de notre app. 

<img style="display: block; margin: auto;"
src="paletteOutils.PNG">
</p>
 
Ainsi, les éléments de notre choix peuvent être déplacés sur la page, à l’endroit souhaité. Voici par exemple un formulaire de saisie (pour entrer le nom d’une ville) et un bouton visant à déclencher l’affichage de la météo dans cette dernière.

<img style="display: block; margin: auto;"
src="elements.PNG">
</p>
 
Les actions de ces éléments ne sont accessibles que dans un espace appelé le workflow. En effet «workflows» signifie « flux de travail », et ceux-ci vont nous permettre de mettre en place un ensemble d’actions qui démarre à partir d’un événement déclenché sur la page. Pour mieux illustrer mon propos voici un exemple d’actions que j’ai mises en place :

<img style="display: block; margin: auto;"
src="workflowStructure.PNG">
</p>
 
Lorsque l’utilisateur entre le nom de la ville, puis clique sur le bouton « Display the meteo in this city », un nouveau « cityName!» est créé. C’est ici qu’un parallèle est fait avec le fonctionnement des bases de données : cityName! est un type, ou encore une table, qui possède des attributs (ou champs) appelés « fields ». Ici, la classe possède deux attributs : NameCity (valeur saisie par l’utilisateur), et Finished un booléen (initialisé à « no ») permettant de supprimer ou non la ville d’une liste.

<img style="display: block; margin: auto;"
src="classeCityName!.PNG">
</p>
 
L’action entraînée par le bouton Delete (premier bloc) consiste seulement à changer la valeur du booléen Finished, et ainsi supprimer la ville de la liste.

<img style="display: block; margin: auto;"
src="boutonDelete.PNG">
</p>

Je vous ai parlé d'événements « actifs » (cliquer sur un bouton), mais il existe également des événements « passifs », tels que la connexion ou la déconnexion de l’utilisateur, qui peuvent eux aussi entraîner des actions.
 
Revenons à présent au design de notre application.

<img style="display: block; margin: auto;"
src="designApp.PNG">
</p>
 
Le tableau ci-dessus est un repeating groupe : chaque ligne suit un même modèle, et adapte les informations à la ville qu’elle contient. La colonne du milieu est un lien amenant à la page de l’API contenant les informations météorologiques de la ville présente sur sa ligne.

Afin de visualiser toutes les données générées et traitées par notre application, il suffit de se dirigier vers la rubrique data, qui constitue en fait notre base de données. Deux parties m'ont particulièrement été utiles :

- Les data types ou les différentes tables existantes avec leurs attributs accompagnés de leur nature (text, yes/no...)

<img style="display: block; margin: auto;"
src="DataTypes.PNG">
</p>

- App Data qui correspond à leur contenu : ici chaque ligne correspond à une entrée, et les colonnes représentent les attributs (les deux dernières sont automatiquement ajoutées par Bubble)

<img style="display: block; margin: auto;"
src="AppData.PNG">
</p>

Basculons à présent sur la version qui affiche la météo seulement à Paris pour voir comment a été utilisée l’API météo. 

<img style="display: block; margin: auto;"
src="APIConnector.PNG">
</p>
 
Pour ma part, j’ai au préalable installé un plugin « API Connector », puis complété ses paramètres avec la clé que j’avais, et enfin configuré un appel : « GET http:/ …. ». Cet appel va simplement récupérer les informations fournies par l’API et présentes sur la page correspondant à cet URL. Ces données sont sous format JSON, comme vous pouvez le voir ci-dessous.

<img style="display: block; margin: auto;"
src="JSONParis.PNG">
</p>
 
De cette manière, en repartant dans la partie design, n’importe quelle des données correspondant à la météo de Paris est accessible.

<img style="display: block; margin: auto;"
src="APIAppel.PNG">
</p>
 

Il m'est alors rendu possible d'afficher le nom de la ville, sa température (à laquelle je soustrais 273.15 pour la convertir en degrés Celsius), l’icône et enfin une description du temps actuel.

<img style="display: block; margin: auto;"
src="composantsAPI.PNG">
</p>

La prochaine étape est pour moi de faire un nouvel appel d'API pour chacune des villes saisies : il s'agirait alors d'intégrer un paramètre dans l'url de l'API dans sa configuration.

Voila une brève présentation des grandes étapes de création de l'application Weather App. Bubble a été pour moi un outil no-code très intéressant, et offrant une riche diversité d'outils. Ce n'est bien évidemment que le début de mon apprentissage sur Bubble, et il reste de nombreuses autres fonctionnalités à découvrir !


