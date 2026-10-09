---
repo: "donjonfi/donjon"
name: "donjon"
description: "Donjon FI 3.0 est un éditeur de fictions interactives à interpréteur. Tout est en français. Il fonctionne en ligne, pas d'installation requise."
readmeQualityOk: true
url: "https://github.com/donjonfi/donjon"
homepage: "https://donjon.fi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["fictions-interactives", "donjon-fi", "angular"]
stars: 11
forks: 2
openIssues: 18
closedIssues: 208
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2018-04-03T17:35:59Z"
lastCommitAt: "2026-10-09T18:56:04Z"
lastReleaseAt: "2022-02-25T15:22:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 64
maintainers: ["donjonfi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a66f8f5f38aa9fcff14432b3ef00d6489491e4494c36ce38a4c5ec82f6c71b7/donjonfi/donjon"
---

# Donjon FI

*Le jeu à énigmes en mode texte*

Donjon FI vous permet d’écrire des *fictions interactives* et d’y jouer.\
Tout est en français.

Vous pouvez utiliser Donjon FI directement sur le site [donjon.fi](https://donjon.fi) . Il y a également des exemples de jeux.

## Documentation et site officiel Donjon FI

## Compilation de Donjon FI

Donjon IDE est développé avec *Angular*.\
Les langages utilisés sont le *TypeScript*, *HTML* et *SCSS*.

### Pré-requis

#### NodeJS

Il vous faut installer [Node.js](https://nodejs.org) qui va vous permettre d'installer Angular et les bibliothèques de composants nécessaires.

#### Angular-cli

Il vous faut ensuite installer [Angular CLI](https://cli.angular.io) :
```shell
npm install -g @angular/cli
```

#### Bibliothèques de composants (dépendances)

Ouvrir un terminal à la racine du projet (`webapp\donjon`) et exécuter la commande suivante pour télécharger les bibliothèques de composants utilisées dans l'application :
```shell
npm install
```

### Test local

*Ouvrir un terminal* à la racine du projet (`webapp\donjon`).

1. Lancer la compilation de la librairie et attendre qu’il ait terminé.

```shell
ng build donjon --watch
```
2. Lancer…
