---
repo: "IGNF/route-graph-generator"
name: "route-graph-generator"
description: "Script collection used to generate routing data for Road2 (https://github.com/IGNF/road2)"
readmeQualityOk: true
url: "https://github.com/IGNF/route-graph-generator"
homepage: "https://ignf.github.io/route-graph-generator/"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["road2", "routing", "generation-algorithms", "pgrouting", "osrm", "valhalla", "isochrone"]
stars: 9
forks: 4
openIssues: 12
closedIssues: 15
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2021-12-15T16:01:19Z"
lastCommitAt: "2026-09-22T08:46:00Z"
lastReleaseAt: "2024-10-14T08:12:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 49
maintainers: ["azarz"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4ab0850eda9825d251aa7b344a98bd433faa65daed93450065f7c7644639618/IGNF/route-graph-generator"
discussionCount: 1
---

# Route Graph Generator

## Présentation

Route Graph Generator (r2gg) est un script Python qui permet la génération de graphes pour des moteurs de calcul d'itinéraire. Il a été développé pour générer les données directement utilisable par [Road2](https://github.com/IGNF/road2).

Actuellement, il y a trois formats de sortie : OSRM, pgRouting et Valhalla.

La conversion se fait via les fonctions de la bibliothèque r2gg développée dans ce but. Une documentation plus détaillée de r2gg est consultable [ici](https://ignf.github.io/route-graph-generator/).

## Génerer des données en local

Un docker compose est mis à disposition pour générer des données Valhalla en local.

```
UID=$(id -u) GID=$(id -g) docker compose up --build
```

Les données se trouveront dans le dossier ./data/generation

Le docker compose lance aussi un serveur road2, pour lancer un calcul d'itinéraire, copier le lien suivant
```
http://localhost:8080/simple/1.0.0/route?resource=bdtopo-valhalla&profile=pedestrian&start=2.320041,48.8588897&end=2.3380277,48.8611473
```

Pour faire tourner un service test valhalla sans la surcouche road2 sur les données générées, utiliser la commande suivante:
```
docker run valhalla…
