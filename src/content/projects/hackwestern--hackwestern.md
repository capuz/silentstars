---
repo: "hackwestern/hackwestern"
name: "hackwestern"
description: "The Home of Hack Western's Web Projects"
readmeQualityOk: true
url: "https://github.com/hackwestern/hackwestern"
homepage: "https://hackwestern.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 11
forks: 2
openIssues: 74
closedIssues: 315
watchers: 14
contributors: 33
recentReleases: 0
createdAt: "2021-03-12T03:41:47Z"
lastCommitAt: "2026-11-05T14:05:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 95
undervaluedScore: 65
maintainers: ["lucianlavric", "Julez14", "kevinli5371"]
openGraphImageUrl: "https://opengraph.githubassets.com/42b0f8e546b5e78722235bbb923a7217806232200b37436a8215ad7c0f7a480c/hackwestern/hackwestern"
---

# hackwestern

Welcome to Hack Western :)

## Pre-requisites

- Linux, MacOS, or Windows with [Windows Subsystem For Linux](https://learn.microsoft.com/en-us/windows/wsl/about) installed.
- Node version 21 or higher with `npm`
  - We recommend using [`nvm`](https://github.com/nvm-sh/nvm) to install node and npm
- A modern browser (Chrome 108+, Edge 108+, Firefox 108+, Safari 16+, etc).
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) or an alternative such as [colima](https://github.com/abiosoft/colima).
- Git installed, GitHub account setup. Been added to our Hack Western GitHub organization.
- A modern text editor like VSCode or Neovim with the TypeScript LSP, Prettier and ESLint plugins installed and configured to run on save/commit.
- Have cloned this repository, and `cd` into it.

## Development Start

1. Get a copy of the `.env` from a web lead.
   - generate your own `NEXTAUTH_SECRET`with `openssl rand -base64 32`
2. Run `npm install` to install dependencies using the node package manager.
3. Run `npm run db:start` to start your dev Postgres database using Docker (see `./start-database.sh`).
4. Run `npm run db:migrate` to push the drizzle database schema…
