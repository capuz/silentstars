---
repo: "etalab-ia/codebox"
name: "codebox"
description: "Sandbox de R&D : backend OpenCode dans un conteneur isolé, piloté par le TUI natif (piste exécution distante pour Albert Code)"
readmeQualityOk: true
url: "https://github.com/etalab-ia/codebox"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 7
forks: 0
openIssues: 6
closedIssues: 180
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-09-08T14:29:11Z"
lastCommitAt: "2026-11-23T13:27:17Z"
lastReleaseAt: "2026-11-18T07:20:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["kaaloo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee7f9b8403c3a1e65df5b6b897a034dd5a4da165d9a03f1c7195860b8dbdc5ac/etalab-ia/codebox"
---

```
               _      _
  ___ ___   __| | ___| |__   _____  __
 / __/ _ \ / _` |/ _ \ '_ \ / _ \ \/ /
| (_| (_) | (_| |  __/ |_) | (_) >  <
 \___\___/ \__,_|\___|_.__/ \___/_/\_\
```

⚠️ **PROJET EXPÉRIMENTAL : bac à sable de R&D pour évaluer l'exécution distante d'agents de code avec Albert API. Rien de stable, tout peut changer.** ⚠️

# codebox

**Un environnement OpenCode isolé dans une microVM Microsandbox, piloté par le TUI dans l'invité par défaut ou par le TUI hôte en mode backend explicite.**

Par défaut, l'agent et son TUI tournent dans la microVM Microsandbox avec les modèles souverains d'[Albert API](https://albert.api.etalab.gouv.fr). Le mode backend, Tart et agent-vm restent des choix explicites.

```text
full (défaut) : terminal hôte ──> TUI OpenCode dans l'invité
                                  /workspace = volume invité, fichiers transférés par filtre
                                  aucun port serveur OpenCode hôte (4096)

backend (explicite) : TUI hôte ──> 127.0.0.1:4096 ──> opencode serve dans l'invité
                                  previews invitées : 127.0.0.1:3000-3010
```
