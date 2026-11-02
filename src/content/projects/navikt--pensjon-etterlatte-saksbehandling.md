---
repo: "navikt/pensjon-etterlatte-saksbehandling"
name: "pensjon-etterlatte-saksbehandling"
description: "Saksbehandlingsløsning for barnepensjon og omstillingsstønad"
readmeQualityOk: true
url: "https://github.com/navikt/pensjon-etterlatte-saksbehandling"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [80]
topics: ["gjenny", "barnepensjon", "omstillingsstoenad", "etterlatteytelser"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 4
watchers: 67
contributors: 55
recentReleases: 0
createdAt: "2021-10-14T08:01:51Z"
lastCommitAt: "2026-11-02T11:36:46Z"
lastReleaseAt: "2024-04-19T10:06:05Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 99
undervaluedScore: 54
maintainers: ["zubaiersayed96", "trondvalen", "hallaelsa"]
openGraphImageUrl: "https://opengraph.githubassets.com/467b2985e6c594ed702a77a89c5a08ff6c1fe4ac5058e2b21e57449f8cf4ee3d/navikt/pensjon-etterlatte-saksbehandling"
---

# pensjon-etterlatte-saksbehandling

### Ny saksbehandlingsløsning for ytelser til etterlatte

Monorepoet bruker `husky` for pre-commit-hooks. Denne kjører `Prettier` for frontend og `ktlint` for backend.
Før man starter å kode er det derfor viktig å kjøre `bash get-started.sh` fra Root. Da vil alle de tre overnevnte bli
installert.

## Gradle

Vi bruker personal access token (PAT) til autentisering for å hente intern pakker til prosjektet. Se [opprett nytt personlig token](https://github.com/settings/tokens/new).   
Legg til token i `$HOME/.zshrc` t.d `export GITHUB_TOKEN=<TOKEN>` for å opprette miljøvariabel. NB! Husk å autorisere tokenet mot navikt i Github

## Lokal bygg/test - docker

Docker må være installert og kjørende for at lokal bygg/test skal fungere. Hvis man bruker docker desktop så klarer
testene å finne docker socket automatisk. Hvis man har colima kjørende så må man sette opp noen miljøvariabler.

```
DOCKER_HOST=unix://${HOME}/.colima/default/docker.sock
TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock
```

* DOCKER_HOST peker docker app osv mot sock filen fra colima
* TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE setter sock adressen på innsiden av kontainere…
