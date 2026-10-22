---
repo: "MTES-MCT/dialog"
name: "dialog"
description: "Intégration de la réglementation de circulation dans les solutions numériques"
readmeQualityOk: true
url: "https://github.com/MTES-MCT/dialog"
homepage: "https://dialog.beta.gouv.fr"
language: "PHP"
languages: ["PHP"]
languagePcts: [81]
stars: 19
forks: 4
openIssues: 177
closedIssues: 708
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2022-10-19T14:36:48Z"
lastCommitAt: "2026-10-22T08:51:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 67
maintainers: ["AntoineSmagghe", "mmarchois", "eglantine"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b4a8de3855fc550c62138cb14e030b14b7e5957f0e0e75b5df5bee31b3ae98f/MTES-MCT/dialog"
discussionCount: 1
---

# DiaLog

Digitaliser, diagnostiquer, diffuser l’information réglementaire de logistique.

## Environnement technique

- [Docker](https://www.docker.com/) / [Compose](https://docs.docker.com/compose/)
- [PHP](https://www.php.net/)
- [Symfony](https://www.symfony.com/)
- [Twig](https://twig.symfony.com/)
- [Turbo](https://turbo.hotwired.dev/) / [Stimulus](https://stimulus.hotwired.dev/)
- [PostgreSQL](https://www.postgresql.org/)

## Démarrage du projet

ℹ️ Vous devez avoir **[Docker](https://www.docker.com/)** et **[Docker Compose](https://docs.docker.com/compose/)** d'installés sur votre machine.

Tout d'abord, demandez à un membre de l'équipe la valeur de la variable d'environnement `BDTOPO_DATABASE_URL`, et ajoutez-la à `.env.local` (créez le fichier si besoin) :

```bash
# .env.local
BDTOPO_DATABASE_URL=postgres://dialog_app:...
```

Pour démarrer l'application (http://localhost:8000) :

```bash
make install
```

ou lancez la commande suivante si le projet avait déjà été installé :

```bash
make start
```

## Environnements

### 🚀 Production

[https://dialog.beta.gouv.fr](https://dialog.beta.gouv.fr)

### 🛠️ Staging…
