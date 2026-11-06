---
repo: "betagouv/portail-rse"
name: "portail-rse"
description: "Proposer aux entreprises un espace unique gratuit pour renseigner leurs indicateurs ESG (Environnement, Social, Gouvernance) et piloter leurs obligations extra-financières."
readmeQualityOk: true
url: "https://github.com/betagouv/portail-rse"
homepage: "https://portail-rse.beta.gouv.fr"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [65, 20]
stars: 5
forks: 6
openIssues: 203
closedIssues: 310
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2022-09-06T13:22:35Z"
lastCommitAt: "2026-11-06T11:23:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 89
maintainers: ["sblondon", "dependabot[bot]", "emillumine"]
openGraphImageUrl: "https://opengraph.githubassets.com/181ebc0a7aaeaaa47eecca397933e511532f1e12ea7a490cd1914363a599864d/betagouv/portail-rse"
discussionCount: 9
---

# Portail RSE

## Liens utiles

Présentation du service :
https://beta.gouv.fr/startups/portail-rse.html

Site vitrine :
https://portail-rse.beta.gouv.fr

Service de gestion (correspond au code de ce dépôt) :
https://app.portail-rse.beta.gouv.fr

Il existe un service supplémentaire externe pour l'API d'analyse de documents.

## Développement local

### Installation du projet

- Installer [`uv`](https://docs.astral.sh/uv/getting-started/installation/)
- Créer le fichier de variable d'environnement `.env` à partir du fichier d'exemple `.env.example`. Si nécessaire, il est possible d'activer l'intégration avec Sentry en local en renseignant la variable d'environnement `SENTRY_DSN`.
- Installer le projet avec :

```
make install
```

ℹ️ Il est nécessaire d'installer le paquet système `libpq-dev` pour avoir `pg_config`.

### Lancement en local

- Lancer le projet avec :

```
make migrate
make run
```

- Le service est disponible sur http://127.0.0.1:8000

- Pour lancer une commande du projet django en local :

```
uv run python3 impact/manage.py my_command
```

### Migration des données

Pour générer les nouvelles migrations éventuelles et les appliquer :

```
make migrations
make…
