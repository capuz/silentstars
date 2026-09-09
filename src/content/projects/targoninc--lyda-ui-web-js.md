---
repo: "targoninc/lyda-ui-web-js"
name: "lyda-ui-web-js"
description: "Music service"
readmeQualityOk: true
url: "https://github.com/targoninc/lyda-ui-web-js"
homepage: "https://lyda.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["music-player", "music", "platform"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-07-17T17:29:43Z"
lastCommitAt: "2026-09-09T08:19:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 65
maintainers: ["loudar"]
openGraphImageUrl: "https://opengraph.githubassets.com/82dc814e92aca1a580a19aee48446f8a2c2450cd97aaa6f029848ed8e517163b/targoninc/lyda-ui-web-js"
---

# Lyda Web

This repository contains the public Lyda web application. Internal administration pages live in the `lyda-internal-dashboard` repository.

# Preconditions

It's recommended to use [bun](https://bun.sh/) to run this project.

Install bun:

`powershell -c "irm bun.sh/install.ps1 | iex"` (Windows)

`curl -fsSL https://bun.sh/install | bash` (Linux/Mac)

# Start

`bun run build-dev` to run a continuous build of the web app.

`bun run start-dev` to run a dev server that will automatically reload the web app when you make changes.

# Host

Use the [Dockerfile](https://github.com/targoninc/lyda-ui-web-js/blob/HEAD/Dockerfile) to build a docker image that can be deployed to a server.

# Code Quality Tools

This project uses ESLint to maintain code quality and consistency.

## Automatic Formatting and Linting

The project is configured to automatically:

- Remove unused imports
- Format code according to the project's style guidelines
- Check for common errors and issues

These checks run automatically when you commit code, thanks to husky and lint-staged.

## Manual Commands

You can also run these tools manually:

- `bun run lint` - Check for linting issues
- `bun run…
