---
repo: "gotgenes/pi-anthropic-auth"
name: "pi-anthropic-auth"
description: "Pi extension package for Anthropic OAuth compatibility"
readmeQualityOk: true
url: "https://github.com/gotgenes/pi-anthropic-auth"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["oauth", "pi", "pi-package", "authentication"]
stars: 154
forks: 17
openIssues: 3
closedIssues: 23
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T01:40:29Z"
lastCommitAt: "2026-08-18T04:08:54Z"
lastReleaseAt: "2026-05-08T03:58:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 29
maintainers: ["gotgenes", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/845ba499bd1662579317454c508625f6562c95b00c83e8e93c017aee20b4dc5a/gotgenes/pi-anthropic-auth"
---

# pi-anthropic-auth

A [Pi](https://pi.mariozechner.at/) extension that improves compatibility with Anthropic Claude Pro/Max OAuth (i.e., your Claude subscription) while preserving Pi's normal Anthropic behavior.

## What It Does

Pi works great with Anthropic API keys out of the box.
This extension fills in the gaps for users who want to use their **Claude Pro or Max subscription** via OAuth instead.

It keeps everything you'd expect — the built-in `anthropic` provider, the full model list, API-key behavior, and the native `/login anthropic` flow — and layers on the compatibility fixes needed to make OAuth subscriptions work reliably.

Requests to non-Anthropic providers and plain API-key Anthropic requests pass through completely untouched — the extension only activates when it detects an Anthropic OAuth access token (`sk-ant-oat`).

Shaping runs in a thin transport wrapper around Pi's own Anthropic transport, so it applies to interactive turns and to compaction — not just the main turn.
Background agents that run their own agent loop are a known exception on Pi 0.80.8 and later.
See…
