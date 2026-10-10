---
repo: "Aatu/FieryVoid"
name: "FieryVoid"
description: "A browser game based on AOGwars"
readmeQualityOk: true
url: "https://github.com/Aatu/FieryVoid"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [72, 23]
stars: 9
forks: 12
openIssues: 3
closedIssues: 600
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2012-02-24T23:23:03Z"
lastCommitAt: "2026-10-10T10:04:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 81
maintainers: ["melkorium", "gstano"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d089fc06e8bcb363a277b3d42a331184549b409cc78c482e6f0a892950575c8/Aatu/FieryVoid"
---

# Introduction

Fiery Void is a turn based strategy game based on B5Wars tabletop game by Agents of Gaming.

# License

FV is licensed under GNU GPLv3

# Installing development environment

Make sure you have the following installed on your machine:

- Docker and Docker Compose
- Node.js and Yarn (for client-side frontend bundling) - Primarily Yarn.

### Installing Node.js and Yarn

Docker runs the server (Nginx/PHP/MariaDB), but the client-side JS bundling (`yarn build` / `yarn watch:legacy`) runs on your host machine, so Node.js and Yarn need to be installed locally.

1. Install Node.js (this also installs npm). Use the current LTS release.
   - Windows: download the LTS installer from https://nodejs.org/, or run `winget install OpenJS.NodeJS.LTS`
   - macOS: `brew install node`
   - Linux: use your distro's package manager (e.g. `sudo apt install nodejs npm`) or https://github.com/nvm-sh/nvm

2. Enable Yarn. Modern Node.js ships with Corepack, which is the recommended way to get Yarn — no separate install needed:

   corepack enable
   corepack prepare yarn@stable --activate

   (Alternatively, the classic global install still works: `npm install -g yarn`.)

3. Verify both are…
