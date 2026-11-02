---
repo: "loreste/mako"
name: "mako"
description: "Experimental compiled language for backend development. No garbage collector. Native binaries via C. Ownership-based memory. Structured concurrency."
readmeQualityOk: true
url: "https://github.com/loreste/mako"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [57, 39]
topics: ["backend", "compiler", "game-development", "mako", "programming-language", "systems-programming", "wasm"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 44
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-07-10T17:54:21Z"
lastCommitAt: "2026-11-02T13:38:40Z"
lastReleaseAt: "2026-07-17T15:35:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 60
maintainers: ["loreste"]
openGraphImageUrl: "https://opengraph.githubassets.com/39bcaf278e5a3d42432fb151eab6dbd31d58ad393798f31312abafb3a66cc8be/loreste/mako"
discussionCount: 1
---

# Makori

Makori is a compiled language for backend and systems work. You write `.mko`
files; Makori turns them into standalone native binaries — no garbage collector,
no VM, nothing extra to install next to them at runtime.

> **Renamed from Mako.** The original name conflicted with
> [Python's Mako templating engine](https://www.makotemplates.org/), which has
> been around since 2006. To avoid confusion between the two projects, the
> language is now called **Makori**. The `mako` command still works as a
> backward-compatible alias, and the `.mko` file extension is unchanged —
> existing code requires zero modifications.

**Status: alpha (v0.7.0).** It works, it compiles real programs, people have
built things with it. It is not stable. APIs will change, features are missing,
and there are bugs. If that's fine with you, read on.

[mako-lang.com](https://mako-lang.com) · [Changelog](https://github.com/loreste/mako/blob/HEAD/CHANGELOG.md) · [Roadmap](https://github.com/loreste/mako/blob/HEAD/docs/ROADMAP.md) · [Status](https://github.com/loreste/mako/blob/HEAD/docs/STATUS.md)

---

## Install

**Linux**

```bash
curl -fsSL…
