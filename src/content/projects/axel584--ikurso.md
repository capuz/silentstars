---
repo: "axel584/ikurso"
name: "ikurso"
description: "kurso de esperanto"
readmeQualityOk: true
url: "https://github.com/axel584/ikurso"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [44, 26]
stars: 23
forks: 7
openIssues: 181
closedIssues: 919
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2013-02-12T15:59:47Z"
lastCommitAt: "2026-11-08T14:14:30Z"
lastReleaseAt: "2017-03-17T19:02:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 89
undervaluedScore: 62
maintainers: ["axel584", "emmrichard"]
openGraphImageUrl: "https://opengraph.githubassets.com/a932ac198587c3df530fa5f6f7f050e6a1c86779d800865b5f93f27a44daf7f5/axel584/ikurso"
---

# ikurso
kurso de esperanto

Logiciel web contenant le cours et les outils d'administration du site https://ikurso.esperanto-france.org
Le cours initial est dans domaine public et les modifications qui y ont été apportées sont sous licence libre.

# Comment nous aider ?

Nous avons besoin d'aide pour un certain nombre d'améliorations que nous avons en tête (voir la liste des issues pour le détail). Nous avons taggué comme "facile" celles qui sont plus abordables à des débutants dans le projet.

1. INSTALLER EN LOCAL UNE VERSION DU SITE UTILISABLE, il vous suffit d'installer un serveur apache+php+mysql (Wamp fonctionne bien sous Windows). Le site tourne en PHP 8.1 (en prod depuis le 21/10/2026, voir `AGENTS.md`) ; le plus simple est d’utiliser Docker (`docker compose up --build`).

2. TÉLÉCHARGER LE COURS. Pour cela vous suffit de le cloner avec la commande : 

git clone git@github.com:axel584/ikurso.git

3. À LA RACINE CRÉER LE FICHIER config.php contenant les informations suivante :
```php
<?php
$urlDb = "db";
$base = "ikurso";
$login = "ikurso_user";
$motDePasse = "ikurso_pass";
$urlracine = "http://localhost:8080";
$hostSmtp = "smtp.free.fr";
$portSmtp = 587;
$hostSmtpSES =…
