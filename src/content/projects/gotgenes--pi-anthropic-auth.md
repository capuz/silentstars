---
repo: "gotgenes/pi-anthropic-auth"
name: "pi-anthropic-auth"
description: "Pi extension package for Anthropic OAuth compatibility"
url: "https://github.com/gotgenes/pi-anthropic-auth"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["oauth", "pi", "pi-package", "authentication"]
stars: 73
forks: 11
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-22T01:40:29Z"
lastCommitAt: "2026-06-26T23:40:30Z"
lastReleaseAt: "2026-05-08T03:58:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 40
maintainers: ["gotgenes", "github-actions[bot]", "sinkarusa"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bef31db28cff5d16ae86d1fb7a8a700837f43d7046dc1c604321f00a74d283a/gotgenes/pi-anthropic-auth"
---

# pi-anthropic-auth

A [Pi](https://pi.mariozechner.at/) extension that improves compatibility with Anthropic Claude Pro/Max OAuth (i.e., your Claude subscription) while preserving Pi's normal Anthropic behavior.

## What It Does

Pi works great with Anthropic API keys out of the box.
This extension fills in the gaps for users who want to use their **Claude Pro or Max subscription** via OAuth instead.

It keeps everything you'd expect — the built-in `anthropic` provider, the full model list, API-key behavior, and the native `/login anthropic` flow — and layers on the compatibility fixes needed to make OAuth subscriptions work reliably.

Requests to non-Anthropic providers and plain API-key Anthropic requests pass through completely untouched — the extension only activates when it detects an Anthropic OAuth access token (`sk-ant-oat`).

Shaping runs in a thin transport wrapper around Pi's own Anthropic transport, so it applies to every OAuth call path — the interactive loop, compaction, and any background-agent work — not just the main turn.
See [docs/architecture.md](docs/architecture.md) for how this works.

## Install

```bash
pi install npm:@gotgenes/pi-anthropic-auth
```

To…
