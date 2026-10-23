---
repo: "lenadweb/stream-deck-ai-limits"
name: "stream-deck-ai-limits"
description: "Stream Deck plugin to monitor AI coding usage limits and reset times for Claude, Codex, Antigravity, Gemini CLI, and MiniMax, right on your keys and dials."
readmeQualityOk: true
url: "https://github.com/lenadweb/stream-deck-ai-limits"
homepage: "https://marketplace.elgato.com/product/ai-usage-limits-b78ef6c4-0165-4bf2-8ba8-889f723e915f"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [59, 38]
topics: ["ai-usage", "antigravity", "claude", "codex", "developer-tools", "elgato", "elgato-stream-deck", "gemini-cli", "minimax", "quota-monitor"]
stars: 25
forks: 12
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-06-02T09:54:50Z"
lastCommitAt: "2026-10-23T09:32:29Z"
lastReleaseAt: "2026-09-02T06:58:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 56
maintainers: ["lenadweb", "Rido", "holgergruenhagen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f76a6cb469c031c673dbf5a6b8d4aff504622a9ce85421957a2fa82cecc04320/lenadweb/stream-deck-ai-limits"
---

# AI Usage Limits - Stream Deck Plugin

**See exactly how much of your AI coding quota is left, right on your Stream Deck keys and dials.**

Track usage limits and reset times for **Claude**, **Codex**, **Antigravity**, **Gemini CLI**, **MiniMax**, **OpenRouter**, or any provider configured in **CodexBar** — at a glance, without opening a terminal or a billing page.

---

## Why you'll like it

- **Native providers plus CodexBar:** use focused native actions for Claude, Codex, Antigravity, Gemini CLI, MiniMax and OpenRouter; the optional CodexBar backend covers its configured providers from one action.
- **Keys *and* dials:** every action renders on standard keys **and** on Stream Deck+ encoders with a full dial layout.
- **Live progress bars:** color-coded usage (green, amber, red) plus human-friendly reset countdowns like `3h 33m` or `4d 3h`.
- **Zero key juggling for most providers:** reuses the credentials your existing CLIs already created locally. Only MiniMax and OpenRouter need a key pasted in.
- **Always fresh:** usage is polled and cached automatically, so the keys stay current without hammering provider APIs.
- **Powered by a typed SDK:** all the provider logic lives in…
