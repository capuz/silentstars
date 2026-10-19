---
repo: "adacta-rdm/adacta"
name: "adacta"
description: "A New Approach to Research Data Management with a Focus on Traceability"
readmeQualityOk: true
url: "https://github.com/adacta-rdm/adacta"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 1
openIssues: 5
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-07-01T12:59:57Z"
lastCommitAt: "2026-10-19T09:14:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 65
maintainers: ["hgossler", "joeried"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1409281c47848b6dbf2c2744dd9a8ac1cefa3a421211c8fea4f77f9eca5e929/adacta-rdm/adacta"
---

# Adacta

A research data management system for experimental science, built for the
[NFDI4Cat](https://nfdi4cat.org) project.

> This file is for developers. It describes how to run and develop Adacta
> locally. It is not an end-user guide.

## Prerequisites

[Bun](https://bun.sh/) 1.3 or later.

## Quick start

```bash
bun install
bun run seed:load
bun run dev
```

Open <http://localhost:5173> and sign in as `dev@adacta.test` with the password
`password`. `seed:load` loads the `demo` preset. Run `bun run seed:load pilot`
to load `pilot` instead.

`bun run dev` and `bun run start` apply pending SQL migrations before starting
the server. A rebuilt baseline requires a database reset. Run
`bun run seed:load` after pulling that change.

## Application version

Open `/version` without signing in to see the full Git commit and the UTC build
time of the running application. The suffix ` (modified)` means tracked or
untracked files had changes when the Vite configuration loaded; ignored files
do not count. In development, both values are recorded when the server starts.

## Data

One database holds authentication and laboratory records. The file storage
holds the bytes of uploaded files.…
