---
repo: "luanti-org/contentdb"
name: "contentdb"
description: "Luanti (Minetest) mods, games, and more"
readmeQualityOk: true
url: "https://github.com/luanti-org/contentdb"
homepage: "https://content.luanti.org"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [68, 20]
topics: ["website", "restful-api", "mod", "minetest", "hacktoberfest"]
stars: 118
forks: 64
openIssues: 80
closedIssues: 454
watchers: 16
contributors: 149
recentReleases: 0
createdAt: "2018-03-18T17:07:27Z"
lastCommitAt: "2026-11-07T22:51:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 50
maintainers: ["rubenwardy", "ZenonSeth", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/16f14b6cf4dd2d548fe4c05a3d548a2eba9d8f440b22974c7dd740c8b34273dd/luanti-org/contentdb"
fundingLinks: ["LIBERAPAY:https://liberapay.com/rubenwardy", "PATREON:https://patreon.com/rubenwardy", "CUSTOM:https://rubenwardy.com/donate/"]
---

# ContentDB

A content database for Luanti mods, games, and more.\
Developed by rubenwardy, license AGPLv3.0+.

See [Getting Started](https://github.com/luanti-org/contentdb/blob/HEAD/docs/getting_started.md) for setting up a development environment,
and [Deploying](https://github.com/luanti-org/contentdb/blob/HEAD/docs/deploying.md) for production.

See [Developer Intro](https://github.com/luanti-org/contentdb/blob/HEAD/docs/dev_intro.md) for an overview of the code organisation.

## Credits

* `app/public/static/placeholder.png`: erlehmann, Warr1024. License: CC BY-SA 3.0

## How-tos

```sh
# Enter docker
./utils/bash.sh

# Run migrations
./utils/run_migrations.sh

# Create new migration
./utils/create_migration.sh

# Run e2e UI tests (needs Node.js, and CDB to be running)
npm install
npm run e2e

# Open the Cypress test runner
npm run e2e:open

# Delete database
docker compose down && sudo rm -rf data/postgres
```

### VSCode: Setting up Linting

* (optional) Install the [Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
* Install the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
	*…
