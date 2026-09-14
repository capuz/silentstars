---
repo: "feds01/durachok"
name: "durachok"
description: "Sources for API, Frontend and engine for the Durak card game."
readmeQualityOk: true
url: "https://github.com/feds01/durachok"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 2
closedIssues: 39
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-09-10T22:20:04Z"
lastCommitAt: "2026-09-14T09:12:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 79
maintainers: ["feds01", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/294534919/2d21a500-5772-11eb-909e-9edb35ef1275"
---

# Durachok

This is the repository that contains the sources to the Durachok game server, game client and the
library that is shared between the two.

## Structure

The repository is structured as follows:

- `apps/web` - The client for the game, a React application that serves as the client for the game.
- `apps/server` - The server for the game, a Node.js application that serves as the server for the game.
- `packages/engine` - The shared library for the game, a TypeScript library that contains the shared code between the client and the server.
- `packages/transport` - Shared data transport types used for communication between client and server.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22 or later recommended)
- [pnpm](https://pnpm.io/) (v10 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (see [server README](https://github.com/feds01/durachok/blob/HEAD/apps/server/README.md) for details)

## Installation

1. Install the dependencies for the repository:

```bash
pnpm install
```

2. Set up pre-commit hooks (see [Pre-commit Setup](#pre-commit-setup) below).

3. Configure the…
