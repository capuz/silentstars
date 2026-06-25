---
repo: "manakuro/asana-clone-app"
name: "asana-clone-app"
description: "Asana clone app"
url: "https://github.com/manakuro/asana-clone-app"
homepage: "https://project-management-demo.manatoworks.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 17
forks: 14
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-02-11T00:01:31Z"
lastCommitAt: "2026-06-25T01:39:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 65
undervaluedScore: 46
maintainers: ["manakuro"]
openGraphImageUrl: "https://opengraph.githubassets.com/1db86496daa973ff83d93bc098cd18267c8928af5f70214df3cd335d260dca59/manakuro/asana-clone-app"
---

# Asana clone app
An Asana clone application as a portfolio project, built with real-time communication with WebSockets and seamless updates with Optimistic UI.

- [Live Demo](https://project-management-demo.manatoworks.me/)
- [Storybook](https://main--63894befbaf58840c037c246.chromatic.com)

## Development Environment
- Node.js 24.18.0
- pnpm 10.33.4

## Set up safe-chain

```
curl -fsSL https://github.com/AikidoSec/safe-chain/releases/latest/download/install-safe-chain.sh | sh
```

## Installation
```
npm install -g corepack@latest
corepack enable pnpm
pnpm install
pnpm lefthook install
```

## Set up a project

Follow the setup documentation for both frontend and backend to configure this project:

- [Frontend Setup](./apps/nextjs/README.md)
- [Backend Setup](./apps/api/README.md)

## Claude Code
To provide instructions for Claude Code, document them in `AI_INSTRUCTIONS.md` and run the `/ai_instructions` command.

### Example

Create the `AI_INSTRUCTIONS.md` file in the root folder and document the instructions like so:

```markdown
## Overview
Migrate code from Recoil to Jotai.

## Implementation Details
Use commit c491a94f as a reference for this work.

### Target Directory
-…
