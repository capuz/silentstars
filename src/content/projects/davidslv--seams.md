---
repo: "Davidslv/seams"
name: "seams"
description: "A CLI framework that generates modular Rails engines."
readmeQualityOk: true
url: "https://github.com/Davidslv/seams"
homepage: "https://davidslv.uk/modular-rails/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [94]
topics: ["administrate", "cli-tool", "modular-monolith", "modular-rails", "multi-tenant", "pundit", "rails", "rails-engines", "rails-generator", "rails8"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 37
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-05-06T23:09:04Z"
lastCommitAt: "2026-09-28T10:05:54Z"
lastReleaseAt: "2026-09-27T19:34:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 60
maintainers: ["Davidslv", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0505f264e7d22bc0e12671828521a53239d6a98d5c139f8e8288a8a9b2c1970f/Davidslv/seams"
---

# Seams

Seams generates modular Rails engines inside your Rails app.

You ship one Rails app. Inside it, each feature (auth, accounts, billing, teams, and so on) lives in its own engine under `engines/`. Each engine has its own models, tests, and boundaries. Engines talk to each other through events, not by reaching into each other's code. Custom RuboCop cops enforce that.

Every generated file is plain Rails code in your repo. You can read it, change it, or delete it. Nothing is hidden behind the gem.

> [!NOTE]
> Seams is the executable companion to the book **[Modular Rails: Architecture for the Long Game](https://davidslv.uk/modular-rails/)**. The full guides live on the **[documentation site](https://davidslv.uk/seams/)**. [seams-example](https://github.com/Davidslv/seams-example) is a reference host with every engine wired up.

## Requirements

| | Supported | Tested in CI |
| --- | --- | --- |
| Ruby | 3.3 or newer | 3.3, 3.4, 4.0.7 |
| Rails | 7.1 or newer (below 9) | 8.1.4 |
| Database | PostgreSQL | PostgreSQL 18 |

> [!IMPORTANT]
> **PostgreSQL is required.** The generated engines use `jsonb` columns, and each engine's test suite runs against Postgres. SQLite and MySQL…
