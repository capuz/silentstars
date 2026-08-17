---
repo: "wagoebv/wagoe"
name: "wagoe"
description: "Batteries-included Clojure web framework built on Functional Core / Imperative Shell (FC/IS) — JWT+MFA auth, auto-generated admin UI, background jobs, multi-tenancy, payments, and AI-native scaffolding."
readmeQualityOk: true
url: "https://github.com/wagoebv/wagoe"
homepage: "https://wagoe.org"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [92]
topics: ["batteries-included", "clojure", "functional-core-imperative-shell", "hexagonal-architecture", "htmx", "integrant", "multi-tenancy", "reitit", "web-framework", "clojure-framework"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-24T09:32:38Z"
lastCommitAt: "2026-08-17T04:19:37Z"
lastReleaseAt: "2026-05-04T14:57:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 67
maintainers: ["thijs-creemers"]
openGraphImageUrl: "https://opengraph.githubassets.com/389e3609c24bcb5a2b1c6feab17fd352f2d9023e7846e07dfb0888fe77131cb4/wagoebv/wagoe"
discussionCount: 1
---

# Wagoe Framework

**Wagoe** is a batteries-included Clojure web framework that enforces the **Functional Core / Imperative Shell (FC/IS)** pattern: pure business logic in `core/`, side effects in `shell/`, and clean interfaces through `ports.clj` protocols.

---

## Why Wagoe?

**For developers:** 30 independently-publishable libraries on Clojars — use just `wagoe-core` for validation utilities, or go full-stack with JWT + MFA auth, auto-generated CRUD UIs, background jobs, multi-tenancy, real-time WebSockets, and more. Every library follows the same FC/IS structure, making any Wagoe codebase instantly familiar.

**Ship faster:** The scaffolder generates fully structured modules (entity + routes + tests) in seconds. The admin UI auto-generates CRUD interfaces from your schema — no manual forms. Built-in observability, RFC 5988 pagination, and declarative interceptors mean you write business logic, not plumbing. AI tooling (`bb scaffold ai`, `bb ai gen-tests`, `bb ai sql`) handles the repetitive parts.

**Ship with confidence:** Reference deployment configs (systemd, nginx, Fly.io, Render), an OWASP-aligned security checklist, scaling guides, health check endpoints, and…
