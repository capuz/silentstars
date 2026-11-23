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
stars: 13
forks: 0
openIssues: 0
closedIssues: 16
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-24T09:32:38Z"
lastCommitAt: "2026-11-23T12:20:49Z"
lastReleaseAt: "2026-05-04T14:57:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 73
maintainers: ["thijs-creemers"]
openGraphImageUrl: "https://opengraph.githubassets.com/d951906361e38d850dab8263269bf8c215d6603f63023bf4fd97376b778724b4/wagoebv/wagoe"
discussionCount: 1
---

# Wagoe Framework

**Wagoe** is a batteries-included Clojure web framework that enforces the **Functional Core / Imperative Shell (FC/IS)** pattern: pure business logic in `core/`, side effects in `shell/`, and clean interfaces through `ports.clj` protocols.

**Status: stable since 1.0.** The public surface follows Semantic Versioning: a breaking change needs a major version, after a deprecation of at least one minor release and 90 days. A few libraries are *incubating* — usable, outside that guarantee, and marked as such in `wagoe list modules`. See [Stability](https://wagoe.org/docs/stability.html).

Questions go to [GitHub Discussions](https://github.com/wagoebv/wagoe/discussions); bugs and feature requests to [Issues](https://github.com/wagoebv/wagoe/issues/new/choose).

---

## Install

Install the Wagoe CLI — it handles all prerequisites (JVM, Clojure CLI, Babashka, bbin) automatically:

```bash
curl -fsSL https://get.wagoe.org | bash
```

Fallback if `get.wagoe.org` is unavailable:

```bash
curl -fsSL https://github.com/wagoebv/wagoe/releases/latest/download/install.sh | bash
```

Supports macOS, Debian/Ubuntu, Fedora/RHEL, Arch Linux, and WSL2.
