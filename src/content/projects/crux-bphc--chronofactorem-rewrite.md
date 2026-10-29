---
repo: "crux-bphc/chronofactorem-rewrite"
name: "chronofactorem-rewrite"
description: "A rewrite of our ChronoFactorem project"
readmeQualityOk: true
url: "https://github.com/crux-bphc/chronofactorem-rewrite"
homepage: "https://www.chrono.crux-bphc.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 21
forks: 3
openIssues: 7
closedIssues: 66
watchers: 5
contributors: 63
recentReleases: 0
createdAt: "2023-06-17T15:20:05Z"
lastCommitAt: "2026-10-29T21:24:11Z"
lastReleaseAt: "2024-01-06T06:41:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 65
maintainers: ["soumitradev", "Proteus26", "zeeshanok"]
openGraphImageUrl: "https://opengraph.githubassets.com/00efa14f3577a32dfe06cf991f4134c05d67fe1c9de1af5c2c97656a050ed559/crux-bphc/chronofactorem-rewrite"
---

# ChronoFactorem (rewrite)

**NOTE:** Before contributing changes, we recommend you read the [Contributing Guide](https://github.com/crux-bphc/chronofactorem-rewrite/blob/HEAD/CONTRIBUTING.md).

## Steps for setup:

1. Install [nvm](https://github.com/nvm-sh/nvm) and install Node v24.14.0 LTS using `nvm install v24.14.1`. If you're using a different Node version manager, do the equivalent.
2. Activate Node v24.14.1 using `nvm use v24.14.1`.
3. Install pnpm, using `npm i -g pnpm`.
4. Install the packages in this repo by running `pnpm i -r` in the root of this repository.

> [!tip]
> Typescript 7 is now out, and we find the Typescript 7 dev experience to be quite a bit faster than the default in VSCode. We recommend installing the plugins in `.vscode` and setting them up to enable TS7 support.

Check [.env.example](https://github.com/crux-bphc/chronofactorem-rewrite/blob/HEAD/.env.example) for an example env file. It can be arbitrary, though we recommend using:

```
POSTGRES_USER="chrono"
PGUSER="chrono" # should be same as POSTGRES_USER
POSTGRES_PASSWORD="aSBrbm93IHdoYXQgeW91IGFyZQ=="
POSTGRES_DB="chrono" # should be same as POSTGRES_USER for some reason
PGPORT=5432
DB_HOST="db"…
