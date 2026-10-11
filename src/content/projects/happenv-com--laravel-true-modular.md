---
repo: "happenv-com/laravel-true-modular"
name: "laravel-true-modular"
description: "Make your Laravel architecture explicit, deterministic, and analyzable. Extended Laravel Application with topological service provider ordering and enhanced lifecycle."
readmeQualityOk: true
url: "https://github.com/happenv-com/laravel-true-modular"
homepage: "https://happenv.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["architecture", "laravel", "modular", "modular-architecture", "modular-monolith", "modularity"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-04-27T13:50:35Z"
lastCommitAt: "2026-10-11T10:14:57Z"
lastReleaseAt: "2026-08-06T13:57:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 31
maintainers: ["webard", "dependabot[bot]", "samsonasik"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1222571909/30ba053d-08cb-479e-a0a0-a39ae07cdbb1"
---

# True Modular for Laravel

**Make your Laravel architecture explicit, deterministic, and analyzable.**

Modules are first-class Composer packages with deterministic dependency ordering, an extended
lifecycle, and a built-in architecture runtime. Instead of an architecture that lives only in
your team's heads, you get one you can query, graph, and reason about.

```
php artisan module:impact acme/catalog

acme/catalog

Direct:
  acme/checkout
  acme/pricing

Indirect:
  acme/storefront

Total affected: 3
```

> **Ask the codebase what a change touches before you make it.**

## Contents

- [Why](#why)
- [Where modules live](#where-modules-live)
- [The module graph](#the-module-graph)
- [Enforcing boundaries (static analysis)](#enforcing-boundaries-static-analysis)
- [Built for agentic coding](#built-for-agentic-coding)
- [Defining a module](#defining-a-module)
- [Extending existing modules](#extending-existing-modules)
- [Extending the framework](#extending-the-framework)
- [Switching modules off](#switching-modules-off)
- [Production notes](#production-notes)
- [Install](#install)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## Why

Large…
