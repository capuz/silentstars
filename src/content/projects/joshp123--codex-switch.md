---
repo: "joshp123/codex-switch"
name: "codex-switch"
description: "Use all your ChatGPT and Claude subscriptions as one pool in Codex, Claude Code and Pi: a small local proxy and macOS menu bar app"
readmeQualityOk: true
url: "https://github.com/joshp123/codex-switch"
language: "Go"
languages: ["Go"]
languagePcts: [72]
topics: ["chatgpt", "codex", "codex-cli", "go", "load-balancer", "macos", "menu-bar", "openai", "proxy", "swiftui"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-10-11T13:58:05Z"
lastCommitAt: "2026-10-31T19:01:34Z"
lastReleaseAt: "2026-10-30T11:56:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 47
maintainers: ["joshp123", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2dc10e5ba90c6427aff55e3d5f6433900b7e29907a016e1d4b77b911acf4e53/joshp123/codex-switch"
---

# Codex Switch

Use several ChatGPT or Claude accounts as one pool, without ever logging out.

## Why

When GPT-5.6 Sol came out, one or two Codex threads could use up a five-hour
limit in one to two hours. I had two accounts and balanced work between them by
hand. It wasn't enough.

The ChatGPT app is built for one account at a time. To use a second account you
log out and log in again, and that breaks things: Codex Remote stops working,
memory stops working, and running tasks lose their place. There is no way to
pool usage across accounts.

Codex Switch is a transparent proxy. You stay logged in to your main ChatGPT
account everywhere, and Codex Switch spreads the work across all your accounts
behind the scenes. The Claude app, Claude Code and Pi can pool Claude subscriptions too.

Ironically, Claude Opus 5.5 is what finally let me ship it.

## How it works

Codex lets you set a different API address. Companies use the same setting to
put their own gateway in front of OpenAI. Codex Switch sits at that address as a
drop-in, so the ChatGPT app and the Codex CLI just work. Nothing is patched.

- It all runs locally on your Mac. Need it on two machines? Install it on both.
- You…
