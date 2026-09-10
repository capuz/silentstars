---
repo: "kanzucodefoundation/project-zoe-client"
name: "project-zoe-client"
description: "The Project Zoe church relationship management system (RMS) client"
readmeQualityOk: true
url: "https://github.com/kanzucodefoundation/project-zoe-client"
homepage: "https://projectzoe.kanzucodefoundation.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["church", "react", "rms"]
stars: 10
forks: 41
openIssues: 5
closedIssues: 7
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2020-01-18T06:28:19Z"
lastCommitAt: "2026-09-10T08:19:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 82
maintainers: ["iamMarybrightEE", "NAGERI", "kakoma"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b3bfa10bce2fdad6c8b0a5efd50c1b8de6600b9188f551a1a8189f358411a79/kanzucodefoundation/project-zoe-client"
---

# Project Zoe — Client

Project Zoe is a church relationship management system (RMS) centred on people. The platform simplifies managing people and their relationships within a church, tracking data across the organisation, and provides a foundation for church-specific features.

This repo holds the React client, built with Vite and Material UI.

**Documentation:** [docs.projectzoe.org](https://docs.projectzoe.org)

## Tech stack

- **Framework:** React 19, TypeScript
- **Build tool:** Vite
- **UI:** Material UI (MUI v7)
- **State:** Redux Toolkit, TanStack Query
- **Routing:** React Router v6

## Getting started

### Prerequisites

- Node.js 20+ — [nodejs.org](https://nodejs.org/en/)
- The Project Zoe server running locally — [project-zoe-server](https://github.com/kanzucodefoundation/project-zoe-server)

### Setup

1. Clone the repository and check out `develop`:

   ```bash
   git clone https://github.com/kanzucodefoundation/project-zoe-client.git
   cd project-zoe-client
   git checkout develop
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file from the sample:

   ```bash
   cp .env.sample .env
   ```

   Set `VITE_API_URL` to point at…
