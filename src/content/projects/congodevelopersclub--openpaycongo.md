---
repo: "congodevelopersclub/openpaycongo"
name: "openpaycongo"
description: "Le système de paiement distribué a pour objectif de permettre aux développeurs Congolais d'accepter les paiements mobiles sans avoir à créer un compte marchand avec les compagnies de télécommunications."
readmeQualityOk: true
url: "https://github.com/congodevelopersclub/openpaycongo"
language: "Dart"
languages: ["Dart", "PHP"]
languagePcts: [38, 31]
stars: 9
forks: 5
openIssues: 72
closedIssues: 25
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2023-02-12T18:57:19Z"
lastCommitAt: "2026-08-30T09:25:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 67
maintainers: ["fabricekabongo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9883ec84081e67176414a33f341aeb655dde71dc6ba312056eb62dbe3fa1b39f/congodevelopersclub/openpaycongo"
discussionCount: 1
---

# Congo OpenPay

> **Prototype status — not production-ready.** Congo OpenPay Server is the one
> canonical backend implementation. It is a native Laravel application in
> `server/`. Do not process real payments, SMS, credentials, or enrollment data.

## Repository map

- `server/` — Congo OpenPay Server, the canonical Laravel backend.
- `android-client/` — Flutter mobile prototype.
- `docs/` — public contracts, runtime-neutral fixtures, ADRs, and design notes.

The public contracts describe planned behavior; they are not proof that every
endpoint is implemented. Runtime-neutral fixtures remain in `docs/` so future
Laravel tests can consume their canonical bytes without a competing backend.

## Reproducible Docker checks

```bash
docker build --target test -f docs/Dockerfile .
docker build --target test -f server/Dockerfile .
docker build --target analyze -f android-client/Dockerfile.ci android-client
docker build --target test -f android-client/Dockerfile.ci android-client
docker build --target artifact --output type=local,dest=android-client/build/ci \
  -f android-client/Dockerfile.ci android-client
```

The Laravel server build runs Pint in check mode, Laravel-aware static…
