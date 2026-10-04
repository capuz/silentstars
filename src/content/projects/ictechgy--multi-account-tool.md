---
repo: "ictechgy/multi-account-tool"
name: "multi-account-tool"
description: "Switch between multiple AI CLI accounts (Claude Code, Codex, Gemini/Antigravity) from one TUI — Keychain-backed credential swap    with automatic rollback and partial-failure recovery."
readmeQualityOk: true
url: "https://github.com/ictechgy/multi-account-tool"
homepage: "https://github.com/ictechgy/multi-account-tool#readme"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["account-switcher", "ai", "claude", "cli", "codex", "gemini", "ink", "nodejs", "profile", "tui"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-23T13:23:10Z"
lastCommitAt: "2026-10-04T10:01:33Z"
lastReleaseAt: "2026-06-20T12:26:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 34
maintainers: ["ictechgy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/799e2e13ad4be4aeb1c54248bfaa0ee0e53b120949da154b661f04dae17c9948/ictechgy/multi-account-tool"
---

# multi-account-tool (`mat`)

[한국어](https://github.com/ictechgy/multi-account-tool/blob/HEAD/README.ko.md) | English

📖 **Documentation:** [ictechgy.github.io/multi-account-tool](https://ictechgy.github.io/multi-account-tool/)

Use one TUI to switch between multiple AI CLI accounts (Claude Code, Codex, Gemini CLI, Aider, Kimi, Qwen, Crush, OpenCode, Goose, Grok Build). Store one profile per account and switch with a keystroke instead of cycling through `logout` → `login`.

By default, `mat` takes the conservative path: it backs up macOS Keychain entries, rolls back partial failures, writes files atomically, calls out plaintext-credential backup risks, and checks credential freshness (including OAuth refresh-token rotation) before a swap. When live credentials have drifted, the TUI asks whether to Recapture, Discard, or Cancel before it swaps.

```
╭ Multi-Account Tool ────────────────────────────────╮
│  AI CLI account switcher                           │
╰─────────────────────────────────────────────────────╯

  > Claude Code            [active: personal] ✓
    Codex CLI              [active: work]     ✓
    Gemini CLI              [active: personal] ✓
```

---

## Why

- You…
