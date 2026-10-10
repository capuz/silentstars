---
repo: "youdie006/prodex"
name: "prodex"
description: "PROdex — local bridge so Codex, Claude, and other coding agents share a logged-in ChatGPT Pro session, with durable receipts"
readmeQualityOk: true
url: "https://github.com/youdie006/prodex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-06-29T16:43:45Z"
lastCommitAt: "2026-10-10T10:05:03Z"
lastReleaseAt: "2026-07-28T01:04:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 52
maintainers: ["youdie006"]
openGraphImageUrl: "https://opengraph.githubassets.com/85c1adcb4e2a5d55bbfa334cb8663c5e3ee3fc2a932baedb58234331f019516c/youdie006/prodex"
---

[Install](#install) &middot; [Quick start](#quick-start) &middot; [Agents over MCP](#agents-over-mcp) &middot; [Model, effort, project](#model-effort-and-project) &middot; [No window](#running-without-a-window) &middot; [Receipts](#receipts) &middot; [FAQ](#faq)

You pay for ChatGPT Pro. The reasoning that makes it worth paying for lives behind a web page, and the coding agent you actually spend the day with cannot reach it. prodex closes that gap without an API key, a proxy, or a stealth bot: it drives a real Chrome that you logged into once, types into the same composer you would, and reads the rendered answer from the page.

The recording below is from 0.40.6, before internal transcript access was removed. Current builds use rendered page content only; they do not fetch hidden ChatGPT APIs or extract session tokens.

```console
$ prodex ask --new-chat --effort Pro "A CLI drives a logged-in browser over the Chrome DevTools Protocol and holds a cross-process file lock while a send is in flight. What failure modes must the lock's expiry rule handle, and which single rule would you ship? Under 150 words."
progress: connecting to browser (port 9333)
progress: applying selection…
