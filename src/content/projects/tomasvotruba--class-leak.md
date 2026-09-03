---
repo: "TomasVotruba/class-leak"
name: "class-leak"
description: "Find leaking classes that you never use... and get rid of them."
readmeQualityOk: true
url: "https://github.com/TomasVotruba/class-leak"
homepage: "https://tomasvotruba.com/blog/how-to-avoid-maintaining-classes-you-dont-use"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["dead-code", "php", "static-analysis", "unused-classes"]
stars: 149
forks: 7
openIssues: 0
closedIssues: 27
watchers: 2
contributors: 8
recentReleases: 3
createdAt: "2023-07-17T08:07:50Z"
lastCommitAt: "2026-09-03T08:13:23Z"
lastReleaseAt: "2026-09-03T06:14:42Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 44
maintainers: ["TomasVotruba"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1ff2aee2a2c935c8a9f20d2b7fa78b4d4e5d794725b6986306dfcaea6c85e80/TomasVotruba/class-leak"
fundingLinks: ["GITHUB:https://github.com/TomasVotruba", "CUSTOM:https://www.paypal.me/rectorphp"]
---

# Class Leak

Find leaking classes that you never use... and get rid of them.

## Install

```bash
composer require tomasvotruba/class-leak --dev
```

## Usage

Pass directories you want to check:

```bash
vendor/bin/class-leak check src
```

Make sure to exclude `/tests` directories, to keep reporting classes that are used in tests, but never used in the code-base.

<br>

Many types are excluded by default, as they're collected by framework magic, e.g. console command classes.

<br>

## Exclude what you use

Do you want to skip classes of certain type?

```bash
vendor/bin/class-leak check src --skip-type="App\\Contract\\SomeInterface"
```

<br>

What if your classes do no implement any type?

```bash
vendor/bin/class-leak check src --skip-suffix="Controller"
```

<br>

Do you want to skip classes using a specific attribute?

```bash
vendor/bin/class-leak check src --skip-attribute="App\\Attribute\\AsController"
```

<br>

## Find Unused Public Elements

It's easy to find unused private class elements, because they're not used in the class itself. But what about public methods, properties and constants?

This package also ships a PHPStan extension that detects them:

* find a…
