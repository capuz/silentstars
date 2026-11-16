---
repo: "dxe/adb"
name: "adb"
description: "Activist Database Project"
readmeQualityOk: true
url: "https://github.com/dxe/adb"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [49, 47]
stars: 13
forks: 9
openIssues: 36
closedIssues: 44
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2016-12-22T03:19:57Z"
lastCommitAt: "2026-11-16T04:26:59Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 69
maintainers: ["alexsapps", "jakehobbs", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6466cd30cdec513790d93c7ed6606a3c0b8b143ad0f9029ab99d6ead43f72b9e/dxe/adb"
---

# ADB

Activist Database Project

## Local development

### Dependencies

The following dependencies are required to run this project and will be already
installed if using the devcontainer:

- Make
- Go and Delve (Go debugger)
- NVM (node version manager)
- docker
- mysql (CLI for database)

Running this command is required to download all the go and node dependencies:

```bash
make deps
```

#### Set up mysql locally for development

If you are not using the devcontainer, you can use our Docker Compose configuration
to run MySQL locally:

```bash
( cd server/ && docker compose up -d --wait )
make dev_db
```

If you are using the devcontainer, just run this command in the container:

```bash
make dev_db
```

You can log into the database from the devcontainer by just typing `db` in the shell.

To seed data into the database for various testing scenarios, check out the [ADB CLI](https://github.com/dxe/adb/blob/HEAD/cli/README.md) "seed" command.

Note that for the activists pages, you can see the generated SQL queries and
their EXPLAIN ANALYZE results by adding "debug=true" to the page URL and
clicking the "Debug" button.

### Run

After downloading the dependencies, start the…
