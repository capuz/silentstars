---
repo: "navikt/testnorge"
name: "testnorge"
description: "Applikasjoner for orkestering av syntetiske testdata for fagsystemer i nav."
url: "https://github.com/navikt/testnorge"
homepage: "https://navikt.github.io/testnorge-syntetiseringspakker"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [72, 27]
topics: ["testdata", "testing-tools", "test", "testing"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 48
recentReleases: 0
createdAt: "2020-05-25T10:14:59Z"
lastCommitAt: "2026-06-29T07:21:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 75
maintainers: ["betsytraran", "stigus", "krharum"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1db15090af2417d474b09d7422c32c75502a4f7c3a6388131c4a6ca88d33173/navikt/testnorge"
---

# testnav

Info/lenker til Team Dollys interne verktøy finnes [her](https://navikt.github.io/testnorge/).

## Bygging/Kjøring

> **Mac:**
>
> For å kjøre tester som bruker Testcontainers eller kjøre en applikasjon lokalt som krever en tjeneste kjørende i
> Docker, så må disse miljøvariablene settes:
>
> `DOCKER_HOST=unix://${HOME}/.colima/default/docker.sock`\
> `TESTCONTAINERS_DOCKER_SOCKET_OVERRIDE=/var/run/docker.sock`\
> `TESTCONTAINERS_RYUK_DISABLED=true`

### Lokal kjøring

Se `README.md` for hver enkelt applikasjon/proxy. Felles dokumentasjon ligger i [/docs](./docs).

## Migrering inn i monorepo

Migrering av andre repoer inn i monorepo.

```
git remote add -f $REPO_NAVN https://github.com/navikt/$REPO_NAVN.git
git merge -s ours --no-commit $REPO_NAVN/master --allow-unrelated-histories
git read-tree --prefix=apps/$REPO_NAVN/ -u $REPO_NAVN/master
git commit -m "Migrering av $REPO_NAVN inn i testnorge"
git push
```

Eller kjør:

```
/bin/bash  ./.tools/migrate.sh $REPO_NAVN
```

## Virtuelt miljø

Kjør kommandoen:

```aiexclude
> JWK=$(cat ./mocks/jwk.json) docker compose up --build
```

Evt. i PowerShell:

```aiexclude
> $env:JWK=(Get-Content -Path ./mocks/jwk.json -Raw) ;…
