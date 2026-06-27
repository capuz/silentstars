---
repo: "pgrls/pgrls"
name: "pgrls"
description: "Static analyzer for Postgres Row-Level Security — 47 lint rules covering tenant and per-user row-scoping bugs, performance traps, and hygiene; 17 mechanically auto-fixable; semantic policy-diff command for CI gating; pytest plugin for RLS isolation tests."
url: "https://github.com/pgrls/pgrls"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ci", "linter", "multi-tenant", "postgres", "postgresql", "rls", "row-level-security", "security", "static-analysis", "supabase"]
stars: 16
forks: 2
openIssues: 4
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-24T17:51:28Z"
lastCommitAt: "2026-06-27T06:25:03Z"
lastReleaseAt: "2026-05-08T05:55:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 49
maintainers: ["dmitrymaranik", "ozimakov"]
openGraphImageUrl: "https://opengraph.githubassets.com/575c6525921b1a181ef832eedf5d223eb8dc15d5079758a43fde9ba43a7d8db0/pgrls/pgrls"
---

# pgrls

**[▶ 23-second demo](https://raw.githubusercontent.com/pgrls/pgrls/main/docs/screencast.svg)** · **[Quickstart](docs/QUICKSTART.md)** · **[Rule reference](AGENTS.md)** · **[Docs site](https://pgrls.github.io/pgrls-docs/)** · **[CHANGELOG](CHANGELOG.md)** · **[PyPI](https://pypi.org/project/pgrls/)**

> **Static analyzer for Postgres Row-Level Security.**
> Catches the policy bugs eyeball-review misses — broken row scoping (across tenants *and* between users in the same tenant), inverted auth checks, write-side holes; 20 of 62 rules mechanically auto-fixable.
> `pgrls diff` classifies every migration **SAFE / BREAKING / REQUIRES_REVIEW / DANGEROUS** so CI gates on real regressions, not safe schema changes.
> MIT, framework-agnostic (Supabase, PostgREST, Hasura, Django, raw SQL), CI-native (text / JSON / SARIF / Markdown / GitHub-PR-comment / GitHub annotations / JUnit XML).

  </a>
</p>

> **Beta — actively maintained.** 62 lint rules, 20 mechanically auto-fixable, [semantic policy-diff command](#diff--pgrls-snapshot--pgrls-diff), pytest plugin for RLS isolation tests. Tested on PostgreSQL 15, 16, 17. Stable JSON / SARIF schema for CI integrations. The…
