---
repo: "Raaif-Yousuf/Wingman"
name: "Wingman"
description: "One key press, one action, one card. A lightweight Windows 11 tray assistant behind the Copilot key that looks at your screen and helps, with cloud or local (Ollama) models."
readmeQualityOk: true
url: "https://github.com/Raaif-Yousuf/Wingman"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-assistant", "copilot-key", "desktop-app", "local-llm", "ollama", "open-source", "privacy", "productivity", "rust", "screen-assistant"]
stars: 5
forks: 5
openIssues: 175
closedIssues: 518
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-09-17T02:52:32Z"
lastCommitAt: "2026-10-17T08:00:01Z"
lastReleaseAt: "2026-10-17T00:38:55Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 74
maintainers: ["Raaif-Yousuf"]
openGraphImageUrl: "https://opengraph.githubassets.com/832b7e6e13fa5a5249b52b8db479c0861f424b3ebea948d6d1e2b0ea9a562d70/Raaif-Yousuf/Wingman"
discussionCount: 0
---

# Wingman

**It's the Copilot key. It's actually yours now.**

Wingman is a native Windows 11 tray app that lives behind the Copilot key.
Press it, Wingman looks at your screen and hands back one thing: a verdict, a
draft, a filled form, an answer. One press, one action, one card. There is no
chat window, no conversation, no follow-up question: if you want a back and
forth, ChatGPT and Ollama's own app already do that well.

One press on the problem above, and the card in the corner says 5.94 m/s. Click
it and it [shows the working](https://github.com/Raaif-Yousuf/Wingman/blob/HEAD/docs/screenshots/card-expanded.png) it used to get
there. That run went to a local Ollama model, so the screenshot never left the
machine.

## Why not Copilot or Recall?

Sourced from [`docs/positioning.md`](https://github.com/Raaif-Yousuf/Wingman/blob/HEAD/docs/positioning.md); every claim below
about Wingman is checked against the code in this repo, not aspirational.

| | Wingman | Copilot on Windows |
|---|---|---|
| **Footprint** | A tray icon, about 4 MB (3.98 MB measured in CI, with a 4.5 MB limit), 0% CPU until you press the key. No taskbar button, no notifications, no sign-in nags | A taskbar…
