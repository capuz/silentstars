---
repo: "SocialGouv/fiches-vdd"
name: "fiches-vdd"
description: "Fiches vos droits et démarches au format JSON"
url: "https://github.com/SocialGouv/fiches-vdd"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 4
closedIssues: 3
watchers: 4
contributors: 23
recentReleases: 0
createdAt: "2019-09-23T13:32:24Z"
lastCommitAt: "2026-07-04T19:19:16Z"
lastReleaseAt: "2020-04-07T04:45:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 63
maintainers: ["SocialGroovyBot"]
openGraphImageUrl: "https://opengraph.githubassets.com/61b481d569bb920f0563f01a00213c52e5db4cb5c2b8484ba73c45111a9b3c46/SocialGouv/fiches-vdd"
---

# @socialgouv/fiches-vdd [](https://www.npmjs.com/package/@socialgouv/fiches-vdd)

Fiches vos droits et démarches au format JSON, mises à jour quotidiennement

| Dataset        | Url                                                                          |
| -------------- | ---------------------------------------------------------------------------- |
| particuliers   | https://lecomarquage.service-public.fr/vdd/3.3/part/zip/vosdroits-latest.zip |
| professionnels | https://lecomarquage.service-public.fr/vdd/3.3/pro/zip/vosdroits-latest.zip  |
| associations   | https://lecomarquage.service-public.fr/vdd/3.3/asso/zip/vosdroits-latest.zip |

:warning: Le package contient toutes les fiches soit ~500Mo de JSON.

## Usage

```js
const fiches = require("@socialgouv/fiches-vdd");

// liste des fiches associations disponibles
console.log(fiches.associations);

// récupérer une fiche en particulier
fiches.getFiche("associations", "F3180");

// index de toutes les fiches (titre, theme...)
const index = require("@socialgouv/fiches-vdd/data/index.json");
```

## Dev

Pour mettre à jour les fiches :

```
yarn
yarn fetch
```
