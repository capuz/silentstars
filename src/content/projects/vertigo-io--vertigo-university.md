---
repo: "vertigo-io/vertigo-university"
name: "vertigo-university"
description: "A set of samples, tutorials and demos for Vertigo"
readmeQualityOk: true
url: "https://github.com/vertigo-io/vertigo-university"
language: "Java"
languages: ["Java"]
languagePcts: [88]
topics: ["vertigo"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 9
recentReleases: 0
createdAt: "2015-12-03T21:15:11Z"
lastCommitAt: "2026-11-08T13:55:09Z"
lastReleaseAt: "2021-02-22T17:02:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 68
undervaluedScore: 55
maintainers: ["NPi2Loup"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c41537441af74cb7db763e108531f2c512d28ca0f7ecfae63e885874438b9fd/vertigo-io/vertigo-university"
---

# vertigo-university
=================

A sample library for [Vertigo](https://vertigo.io) — the Java application development platform.
Each sample is a self-contained Maven project demonstrating a specific Vertigo topic, with hands-on exercises.

# vertigo-university

Vertigo university est une bibliothèque de samples couvrant Vertigo : chaque sample est un projet Maven autonome, ciblant un sujet précis.

Les samples ne contiennent pas de tests automatisés : chaque sample se lance par une ou plusieurs classes `main` (voir le README de chaque module).

## Prérequis

- JDK 17
- Maven 3.9+
- Eclipse (recommandé ; plugin [Vertigo Dsl Plugin 3.5.0](https://marketplace.eclipse.org/content/vertigo-3-dsl-plugin) — Eclipse et VSCode — en option pour l'expérience de développement)
- Les samples sont autonomes : Elasticsearch embarqué quand c'est nécessaire, bases H2 créées au démarrage ou initialisées par les scripts SQL du dépôt, aucun service externe requis (sauf les identifiants mail/Twitter/IFTTT du sample notifications).

## Build

```bash
mvn clean install -DskipTests
```

27 modules.

## Inventaire des samples

| Sample | Sujet | Démarrage | Doc |
|---|---|---|---|
|…
