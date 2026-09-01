---
repo: "navikt/testnorge"
name: "testnorge"
description: "Applikasjoner for orkestering av syntetiske testdata for fagsystemer i nav."
readmeQualityOk: true
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
contributors: 49
recentReleases: 0
createdAt: "2020-05-25T10:14:59Z"
lastCommitAt: "2026-09-01T08:43:51Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 75
maintainers: ["betsytraran", "krharum", "stigus"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc843a0bf9ca0e91836d66a1cc9321bd579132454c7c55babda5ce23ea0045d9/navikt/testnorge"
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
