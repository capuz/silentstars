---
repo: "beren2/catalogue_script_agrosyst"
name: "catalogue_script_agrosyst"
description: "Catalogue des pré-traitements usuels déjà réalisés sur les données d'Agrosyst afin d'en faire bénéficier la communauté de chercheurs."
readmeQualityOk: true
url: "https://github.com/beren2/catalogue_script_agrosyst"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [83]
stars: 5
forks: 1
openIssues: 1
closedIssues: 3
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2023-02-17T10:56:40Z"
lastCommitAt: "2026-08-05T06:08:21Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 74
maintainers: ["ThBadie", "beren2", "JulienDeleau"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c02df09c7d0a2f4e8c188830cb5ca553d3f9d5af3fa02c077ea366242f3d12e/beren2/catalogue_script_agrosyst"
---

## Catalogue_script_agrosyst

Catalogue des pré-traitements des données issues du système d'information Agrosyst (https://agrosyst.fr). Les données sont disponibles au téléchargement sur (https://agrosyst.fr/datagrosyst/) sous réserve d'avoir déposé une demande d'accès et que celle-ci ait été approuvée par l'intégralité du comité des partenaires.

## Organisation du répertoire

### 00_config
Contient : 
- un fichier requirements.txt listant les libraries python utilisées.
- un fichier config.ini listant les connexions aux bases de données ou le chemin de données: 

### 01_entrepot
Permet la génération de l'entrepot de données d'agrosyst. <br> 
Les données issues de cette source correspondent à un remaniement des tables de la base de données opérationnelle d'Agrosyst. Elles n'ont pas été corrigées ou modifiées.

### 02_outils
Permet la génération des outils d'aide à la valorisation. <br> 
Ces outils sont produits à partir des données de l'entrepot, ou bien font intervenir des données extérieures. <br> 
Ces outils correspondent à des tables stockées avec les données de l'entrepot.

Plus d'informations sont disponibles dans le README.md du répertoire.

### 03_magasins
Permet la…
