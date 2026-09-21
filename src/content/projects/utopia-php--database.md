---
repo: "utopia-php/database"
name: "database"
description: "Lite & fast micro PHP database abstraction library that is **easy to use**."
readmeQualityOk: true
url: "https://github.com/utopia-php/database"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["utopia-framework", "hacktoberfest"]
stars: 74
forks: 60
openIssues: 4
closedIssues: 13
watchers: 5
contributors: 38
recentReleases: 0
createdAt: "2021-01-21T19:03:47Z"
lastCommitAt: "2026-09-21T09:13:27Z"
lastReleaseAt: "2021-08-12T07:14:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 55
maintainers: ["abnegate", "loks0n", "fogelito"]
openGraphImageUrl: "https://opengraph.githubassets.com/58473e53d9bb51a07ba4f7d8fd81ff4032cd56ef43cc6e6da023a53a04c20159/utopia-php/database"
---

# Utopia Database

Utopia framework database library is simple and lite library for managing application persistency using multiple database adapters. This library is aiming to be as simple and easy to learn and use. This library is maintained by the [Appwrite team](https://appwrite.io).

Although this library is part of the [Utopia Framework](https://github.com/utopia-php/framework) project it is dependency free, and can be used as standalone with any other PHP project or framework.

## Getting Started

Install using composer:

```bash
composer require utopia-php/database
```

### Concepts

A list of the utopia/php concepts and their relevant equivalent using the different adapters

- **Database** - An instance of the utopia/database library that abstracts one of the supported adapters and provides a unified API for CRUD operation and queries on a specific schema or isolated scope inside the underlining database.
- **Adapter** - An implementation of an underlying database engine that this library can support - below is a list of [supported databases](#supported-databases) and supported capabilities for each Database.
- **Collection** - A set of documents stored on the same…
