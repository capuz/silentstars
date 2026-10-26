---
repo: "wagoebv/wagoe"
name: "wagoe"
description: "Batteries-included Clojure web framework built on Functional Core / Imperative Shell (FC/IS) — JWT+MFA auth, auto-generated admin UI, background jobs, multi-tenancy, payments, and AI-native scaffolding."
readmeQualityOk: true
url: "https://github.com/wagoebv/wagoe"
homepage: "https://wagoe.org"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [94]
topics: ["batteries-included", "clojure", "functional-core-imperative-shell", "hexagonal-architecture", "htmx", "integrant", "multi-tenancy", "reitit", "web-framework", "clojure-framework"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-24T09:32:38Z"
lastCommitAt: "2026-10-26T21:00:28Z"
lastReleaseAt: "2026-05-04T14:57:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 77
maintainers: ["thijs-creemers", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ca3795f98970ec88f887ba843d6591b58beafd617da9b41df71b1742862299e/wagoebv/wagoe"
discussionCount: 1
---

# Wagoe Framework

**Wagoe** is a batteries-included Clojure web framework that enforces the **Functional Core / Imperative Shell (FC/IS)** pattern: pure business logic in `core/`, side effects in `shell/`, and clean interfaces through `ports.clj` protocols.

**Status: 1.0.1, stable.** The public surface follows Semantic Versioning: a breaking change needs a major version, after a deprecation of at least one minor release and 90 days. A few libraries are *incubating* — usable, outside that guarantee, and marked as such in `wagoe list modules`. See [Stability](https://wagoe.org/docs/stability.html).

Questions go to [GitHub Discussions](https://github.com/wagoebv/wagoe/discussions); bugs and feature requests to [Issues](https://github.com/wagoebv/wagoe/issues/new/choose).

---

## Install

Install the Wagoe CLI — it handles all prerequisites (JVM, Clojure CLI, Babashka, bbin) automatically:

```bash
curl -fsSL https://get.wagoe.org | bash
```

Fallback if `get.wagoe.org` is unavailable:

```bash
curl -fsSL https://raw.githubusercontent.com/wagoebv/wagoe/main/scripts/install.sh | bash
```

Supports macOS, Debian/Ubuntu, Fedora/RHEL, Arch Linux, and WSL2.

## Quick Start

```bash
#…
