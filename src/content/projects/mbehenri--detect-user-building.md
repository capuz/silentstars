---
repo: "MbeHenri/detect_user_building"
name: "detect_user_building"
description: "Détection automatique de la position d’un usager dans un bâtiment"
readmeQualityOk: true
url: "https://github.com/MbeHenri/detect_user_building"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [98]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-26T07:22:38Z"
lastCommitAt: "2026-11-02T13:38:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 38
maintainers: ["MbeHenri"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eec387a189153572485cadcdb8ca90f841d617b352d17a624e98afe2f2901d8/MbeHenri/detect_user_building"
---

# detect_user_building

Grâce aux points d'accès d'un bâtiment, on souhaite qu'un usager puisse connaître où il se trouve dans ce bâtiment.
Ce projet vise à résoudre ce problème, quelle que soit la dimension avec laquelle on voit le bâtiment.

Il est donc nécessaire d'avoir :

- le plan du bâtiment
- l'échelle du bâtiment (où réaliser les calculs)

## Approches

Considérons qu'on a relevé leurs signaux à des positions données

- On essaye d'estimer les positions des points d'accès, avant de calculer la position de l'usager :expressionless:
")

- On cherche les positions (de zones collectées) les plus proches :smile:
")

- On utilise un modèle d'apprentissage artificielle (de régression) entrainé pour prédire la position de l'usager :fire:
")

## Ressources et Dépendances

On a suivantes:

- `requirements.txt`: fichier de librairies python à installer
- `main.py`: code d'exemple d'utlisation
- `main.ipynb`: notebook de test des algorithmes (sans le modèle d'IA) `(à lire)`
- `detect_model.pkl`: fichier contenant le modèle entrainé (l'IA)
- `ml.ipynb`: notebook d'entrainement et de test d'utilisation du modèle `(à lire)`
- `datas`: dossier des fichiers contenant les signaux collectés…
