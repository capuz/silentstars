---
repo: "ergebnis/factory-bot"
name: "factory-bot"
description: "🤖 Provides a composer package with a fixture factory for doctrine/orm entities."
readmeQualityOk: true
url: "https://github.com/ergebnis/factory-bot"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["doctrine", "entity", "factory", "orm", "fixture"]
stars: 80
forks: 5
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2020-03-08T10:10:08Z"
lastCommitAt: "2026-11-09T11:59:56Z"
lastReleaseAt: "2022-03-09T16:55:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 49
maintainers: ["localheinz", "ergebnis-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03c3067961e92f17af59a45f9a791c4b078e2c2505fd4b751334c080a027bbe/ergebnis/factory-bot"
---

# factory-bot

This project provides a [`composer`](https://getcomposer.org) package with a fixture factory for [`doctrine/orm`](https://github.com/doctrine/orm) entities.

## Installation

Run

```sh
composer require --dev ergebnis/factory-bot
```

## Usage

The entry point of `ergebnis/factory-bot` is the [`FixtureFactory`](https://github.com/ergebnis/factory-bot/blob/HEAD/src/FixtureFactory.php).

You will use the fixture factory to create entity definitions and to create Doctrine entities populated with fake data.

- [Examples](#examples)
- [Creating a fixture factory](#creating-a-fixture-factory)
- [Creating entity definitions](#creating-entity-definitions)
- [Loading entity definitions](#loading-entity-definitions)
- [Registering entity definitions](#registering-entity-definitions)
- [Creating entities](#creating-entities)
- [Persisting entities](#persisting-entities)
- [Flushing entities](#flushing-entities)

### Examples

You can find examples in

- the directory [`example/`](https://github.com/ergebnis/factory-bot/blob/HEAD/example/)
- the repository [`ergebnis/factory-bot-example`](https://github.com/ergebnis/factory-bot-example)

### Creating a fixture factory

The…
