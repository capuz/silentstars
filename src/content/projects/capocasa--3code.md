---
repo: "capocasa/3code"
name: "3code"
description: "The Economical Coding Agent"
url: "https://github.com/capocasa/3code"
language: "Nim"
languages: ["Nim"]
languagePcts: [100]
stars: 14
forks: 2
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-22T09:54:30Z"
lastCommitAt: "2026-07-04T06:11:15Z"
lastReleaseAt: "2026-05-06T13:08:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 49
maintainers: ["capocasa"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9cd5abf3916e19c4dbb92885de008cd599144a5826d6ec4b7fbe9e7bc8f6e89/capocasa/3code"
---

# 3code

**The economical coding agent.**

It's so lean you can use it for free.

→ [3code.capocasa.dev](https://3code.capocasa.dev)

---

## Why

A coding agent that works with any OpenAI-compatible endpoint. Bring your own provider, pay for the work, not the chatter. Free-tier models work. No subscription required.

## Quickstart

```
curl -fsSL https://3code.capocasa.dev/install | sh
3code
```

First run walks you through adding a provider (name, URL, API key, models) and verifies with a test call. Then:

```
3code "add a --dry-run flag to the main command"
```

Or drop into interactive mode and go.

## Build from source

```
nimble install https://github.com/capocasa/3code
```

Requires [Nim](https://nim-lang.org) >= 2.0 and `curl` on `PATH`.

## Docs

Full manual at [3code.capocasa.dev](https://3code.capocasa.dev). Developer docs via `nimble devdocs`.

## Changelog

**0.4.1** - light/dark color mode (auto from `$COLORFGBG`, `--light`/`--dark`, `[colors]` config overrides)

**0.4.0** — error icons for failed tool calls, pin bar+prompt to bottom during scrolling, suppress raw JSON on malformed tool args

**0.3.5** — `$`/`r`/`w` tool bullets, bright cyan receipts, bar ticks…
