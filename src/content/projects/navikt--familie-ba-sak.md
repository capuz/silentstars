---
repo: "navikt/familie-ba-sak"
name: "familie-ba-sak"
description: "Applikasjon for saksbehandling av barnetrygd"
readmeQualityOk: true
url: "https://github.com/navikt/familie-ba-sak"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
topics: ["baks"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 11
watchers: 8
contributors: 65
recentReleases: 0
createdAt: "2019-11-28T11:37:49Z"
lastCommitAt: "2026-09-15T08:49:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 66
maintainers: ["UyQuangNguyen", "dependabot[bot]", "MagnusTonnessen"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cca896b94356dd4aa7514670f2d94bdd851a436228654c9d50e85507917632f/navikt/familie-ba-sak"
---

# familie-ba-sak

Saksbehandling for barnetrygd

## Kjøring lokalt

For å kjøre opp appen lokalt kan en kjøre

* `DevLauncher`, som kjører opp en H2-(minnebasert) database (obs: kjører med task-rammeverket deaktivert)
* `DevLauncherPostgres`, som kjører opp med Spring-profilen `postgres` satt, og forventer en kjørende database. Samme
  effekt kan du med `DevLauncher` med
  `-Dspring.profiles.active=postgres` satt under `Edit Configurations -> VM Options`.
* `DevLauncherPostgresPreprod`. Kjører mot intergrasjoner og pdl i preprod(ikke q1, men syntetisk). Har støtte for å
  kjøre mot andre miljøer, men da må mock manuelt kommenteres ut i DevLauncherPostgresPreprod. BA_SAK_CLIENT_ID og
  CLIENT_SECRET må settes til familie-ba-sak sin azure client id og secret for å få tilgang til pdl og integrasjoner.
  Frontend må derfor bruke scope mot familie-ba-sak og ikke familie-ba-sak-lokal

Appen tilgjengeliggjøres da på `localhost:8089`. Se [Database](#database) for hvordan du setter opp databasen. For å
tillate kall fra frontend, se [Autentisering](#autentisering).

### Database

#### Embedded database

Bruker du `DevLauncherPostgres`, kan du kjøre opp en embedded database. Da må du sette…
