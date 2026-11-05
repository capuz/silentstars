---
repo: "VenusProtocol/venus-protocol-interface"
name: "venus-protocol-interface"
description: "Venus Protocol Frontend Dapp"
readmeQualityOk: true
url: "https://github.com/VenusProtocol/venus-protocol-interface"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 62
forks: 88
openIssues: 0
closedIssues: 34
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2021-05-20T10:30:28Z"
lastCommitAt: "2026-11-05T14:05:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 61
maintainers: ["cuzz-venus", "toolsvenus"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7730f90ec3fb38e7e6e2f9a066fca594a458c7b37f8810255e4d5cba2072ab8/VenusProtocol/venus-protocol-interface"
---

# Venus Protocol Frontend

Official monorepo for the [Venus protocol](https://venus.io) frontend apps.

## Getting started

### Install dependencies with yarn

Yarn version is pinned via Corepack. Enable it once on your machine:

```ssh
corepack enable
```

Then install:

```ssh
yarn
```

### Start a development server for the dApp

```ssh
yarn start --filter=@venusprotocol/evm
```

### Start a development server for the landing page

```ssh
yarn start --filter=@venusprotocol/landing
```

## Useful commands

Run tests

```ssh
yarn test
```

Check Typescript code

```ssh
yarn tsc
```

Lint code

```ssh
yarn lint
```

Format code

```
yarn format
```

Generate production builds

```ssh
yarn build
```

## AI skills

Launch the interactive AI client:

```sh
yarn ai
```

Use `/login` to connect an LLM provider and `Ctrl+L` to select a model. The client automatically
loads the skills defined in `skills/`; run one with `/skill:<skill-name>`. Use `Ctrl+O` to collapse
or expand tool output.

For example:

```text
/skill:sync-translations
```

### sync-translations

Runs translation extraction, fills entries marked `TRANSLATION NEEDED` from the English source, and
updates other locales when…
