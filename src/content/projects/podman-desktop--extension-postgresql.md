---
repo: "podman-desktop/extension-postgresql"
name: "extension-postgresql"
description: "A Podman Desktop extension to help manage local PostgreSQL services for development"
readmeQualityOk: true
url: "https://github.com/podman-desktop/extension-postgresql"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [56, 28]
stars: 15
forks: 7
openIssues: 10
closedIssues: 7
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2024-11-06T12:21:52Z"
lastCommitAt: "2026-11-06T13:20:37Z"
lastReleaseAt: "2026-01-26T17:40:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 65
maintainers: ["dependabot[bot]", "benoitf", "feloy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e888ee800d469331e163915665a3eb2e59a9cb9576e07e428633da8d5863d4e/podman-desktop/extension-postgresql"
---

# PostgreSQL Extension for Podman Desktop

PostgreSQL extension gives the user tools to discover PostgreSQL services
running on Podman, and start new services, with advanced options.

## Discover PostgreSQL instances

The extension discovers existing PostgreSQL instances where configuration is set using environment variables.

## Start a PgAdmin instance connected to an existing PostgreSQL instance

From the Containers List page, you can start a PgAdmin instance connected to a discovered PostgreSQL instance.

## Start a new PostgreSQL instance, with optional PgAdmin

From the dashboard of the extension, you can create a new PostgreSQL instance, with your preferred postgres image, port, database name, user and password, and
optionally attach a PgAdmin instance to the PostgreSQL instance. 

If the PgAdmin option is chosen, two containers will be created in a Pod, one for the PostgreSQL instance and one for the PgAdmin instance.

## Start a new PostgreSQL instance, with initial scripts

You can pass init scripts (either shell or SQL), which will be executed the first time the container is started, to help you create the schema of your database, and populate the database.
