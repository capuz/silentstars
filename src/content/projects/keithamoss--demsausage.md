---
repo: "keithamoss/demsausage"
name: "demsausage"
description: "Democracy Sausage"
readmeQualityOk: true
url: "https://github.com/keithamoss/demsausage"
homepage: "https://democracysausage.org"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 10
forks: 5
openIssues: 297
closedIssues: 259
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2017-11-12T13:34:29Z"
lastCommitAt: "2026-09-19T01:42:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 87
undervaluedScore: 75
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a6c3b33d3b6262346b61cd7dfd0f499e8aee13e36f57636639dab63e975cf09/keithamoss/demsausage"
discussionCount: 0
---

# Democracy Sausage

## Installing and building

Requirements:

- Docker 18.09.0+
- Docker Compose 1.23.2+

### First Time

If this is the first time you're running Democracy Sausage you'll need to do a few things:

#### Hosts file

Add the following to your [hosts file](https://github.com/keithamoss/demsausage/blob/HEAD/<https://en.wikipedia.org/wiki/Hosts_(file)>).

```
127.0.0.1 public.test.democracysausage.org
127.0.0.1 admin.test.democracysausage.org
```

#### Generate self-signed SSL certs

Install [mkcert](https://github.com/FiloSottile/mkcert) and generate self-signed certs for local dev.

```
brew install mkcert
mkcert -install
```

```
mkdir keys && cd $_
mkcert public.test.democracysausage.org
mkcert admin.test.democracysausage.org
```

#### .env files

Use the template .env files in `secrets-tmpl` to create corresponding files under `secrets/` for:

1. `sausage-web.dev.env`
2. `sausage-web-db.dev.env`
3. `sausage-db.dev.env`
4. `sausage-public-frontend.dev.env`
5. `sausage-admin-frontend.dev.env`

#### Load data

If you're starting from scratch:

##### Load electoral boundaries data

Follow the instructions in `data/federal_2019/electoral_boundaries/README.md` to load…
