---
repo: "ckuijjer/expatcinema.com"
name: "expatcinema.com"
description: "Expat Cinema - Foreign movies with English subtitles"
readmeQualityOk: true
url: "https://github.com/ckuijjer/expatcinema.com"
homepage: "https://expatcinema.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 1
openIssues: 15
closedIssues: 56
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2018-09-03T20:13:30Z"
lastCommitAt: "2026-09-30T09:58:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 48
maintainers: ["ckuijjer"]
openGraphImageUrl: "https://opengraph.githubassets.com/80d4081fee858e7209ca12ec0c57853f4d8abd7a9d5b0760cd9aece7b2480010/ckuijjer/expatcinema.com"
---

# Expat Cinema

[Expat Cinema](https://expatcinema.com) shows foreign movies with english subtitles that are screened in cinemas in the Netherlands. It can be found at https://expatcinema.com.

## Deploy Cloud

### Deploy Prod

A GitHub Action is used to deploy to AWS. The action is triggered by a push to the `main` branch.

The `.env.local` file from `cloud/` is only used when running it locally, when deploying using CI/CD the environment variables are set in the GitHub _Secrets and Variables > Actions > Repository Secrets_. The `.env.local` file is not checked into git, so it won't be available in the CI/CD environment.

### Deploy Dev

It's possible to create a _dev_ stage, by locally running e.g.

```sh
pnpm run synth  # synthesize the cdk stack for dev
pnpm run watch  # watch for changes, deploy to dev
pnpm run deploy # deploy to dev
```

### Scrapers

For a generated inventory of scrapers, sources, addresses, and map links, see:

- [`SCRAPERS_OVERVIEW.md`](https://github.com/ckuijjer/expatcinema.com/blob/HEAD/SCRAPERS_OVERVIEW.md)

#### Scheduled Prod

The scrapers run on a daily schedule defined in the cdk stack in `cloud/lib/backend-stack.ts`.

#### Manual Prod

- `cd…
