---
repo: "bccsa/luminary"
name: "luminary"
description: "Offline-first content platform"
readmeQualityOk: true
url: "https://github.com/bccsa/luminary"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 5
forks: 2
openIssues: 107
closedIssues: 911
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2023-11-21T09:57:12Z"
lastCommitAt: "2026-09-23T08:46:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 84
maintainers: ["MrDirkelz", "johan-bell", "brucefrankstad26-beep"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e0a6ae40067428a91bce794e0b63c062d943f101ce79ec13e410fd7894cf3ae/bccsa/luminary"
discussionCount: 0
---

Offline-first content platform consisting of an API, CMS and web app.

   

## Name

lu·​mi·​nary - ˈlü-mə-ˌner-ē

1. a person of prominence or brilliant achievement
2. a body that gives light

## Folder structure

- `api`: API layer over CouchDB
- `app`: Web and native frontend app
- `cms`: Backend CMS for managing content
- `shared`: Shared library used by the CMS and app
- `docs`: Cross-cutting documentation — see [docs/README.md](https://github.com/bccsa/luminary/blob/HEAD/docs/README.md) (ADRs, cross-package guides, architecture diagrams). Package-specific docs live with their code (each package's own `README.md`).

## Architectural Decision Records

We record our decisions in the `docs/adr` folder. See the [first ADR](https://github.com/bccsa/luminary/blob/HEAD/docs/adr/0001-record-architecture-decisions.md) for more information on this process. You can install [adr-tools](https://github.com/npryce/adr-tools) to manage ADRs locally, such as creating one with this command:

```sh
adr new Branching strategy
```

## Running Luminary

For Visual Studio Code users, `./.vscode/launch.json` includes debug configurations for the API, CMS and reference App.

### API

See the [API…
