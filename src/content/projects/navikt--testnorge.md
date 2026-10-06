---
repo: "navikt/testnorge"
name: "testnorge"
description: "Applikasjoner for orkestering av syntetiske testdata for fagsystemer i nav."
readmeQualityOk: true
url: "https://github.com/navikt/testnorge"
homepage: "https://navikt.github.io/testnorge-syntetiseringspakker"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [74, 25]
topics: ["testdata", "testing-tools", "test", "testing"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 48
recentReleases: 0
createdAt: "2020-05-25T10:14:59Z"
lastCommitAt: "2026-10-06T10:42:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 75
maintainers: ["stigus", "betsytraran", "krharum"]
openGraphImageUrl: "https://opengraph.githubassets.com/53b171bb54df54e2055d06be8908e8b22169d3825c491bebb149bf622201fe20/navikt/testnorge"
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

Se `README.md` for hver enkelt applikasjon/proxy. Felles dokumentasjon ligger i [/docs](https://github.com/navikt/testnorge/blob/HEAD/docs).

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
>…
