---
repo: "fajarhide/omni"
name: "omni"
description: "Decides what your AI coding agent reads, and keeps receipts. Every cut is recoverable byte for byte, it never invents a result, and the numbers are replayed from your own corpus."
readmeQualityOk: true
url: "https://github.com/fajarhide/omni"
homepage: "https://omni.weekndlabs.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai-agents", "context-distillation", "mcp", "token-efficiency", "antigravity", "claude-code", "cli", "cost-reduction", "homebrew", "token-optimization"]
stars: 320
forks: 32
openIssues: 4
closedIssues: 215
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2026-03-15T03:38:04Z"
lastCommitAt: "2026-08-12T05:15:51Z"
lastReleaseAt: "2026-03-15T16:26:13Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 28
maintainers: ["fajarhide", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/12918bebddc7dbc02bb93ad6083ab49c6521da1ee11634cffdb01aee1193f02d/fajarhide/omni"
fundingLinks: ["GITHUB:https://github.com/fajarhide", "KO_FI:https://ko-fi.com/fajarhide"]
discussionCount: 3
---

<h1>OMNI</h1>
    <em><b>Your agent reads everything your terminal prints, then reads most of it again next turn.</b> OMNI drops the noise before the model sees it, and hands back a reference for the lines it has already shown. Nothing is deleted, and it never invents a result.</em>
</p>

[🇺🇸 English](https://github.com/fajarhide/omni/blob/HEAD/README.md) | [🇯🇵 日本語](https://github.com/fajarhide/omni/blob/HEAD/i18n/README-ja.md) | [🇨🇳 简体中文](https://github.com/fajarhide/omni/blob/HEAD/i18n/README-zh.md) | [🇸🇦 العربية](https://github.com/fajarhide/omni/blob/HEAD/i18n/README-ar.md) | [🇮🇩 Bahasa Indonesia](https://github.com/fajarhide/omni/blob/HEAD/i18n/README-id.md) | [🇻🇳 Tiếng Việt](https://github.com/fajarhide/omni/blob/HEAD/i18n/README-vi.md) | [🇰🇷 한국어](https://github.com/fajarhide/omni/blob/HEAD/i18n/README-ko.md)

</br></br>

```bash
brew install fajarhide/tap/omni && omni init
```

</br>
</div>

---

## What it does

**Drops the noise.** Build logs, Docker layer hashes, progress bars, ANSI colour. The
part of the output nobody reads is removed before it reaches the model.

**Stops re-sending what the agent has already seen.** A run of lines it was shown
earlier in…
