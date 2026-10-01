---
repo: "xwiki/xwiki-dev-llm"
name: "xwiki-dev-llm"
description: "Shared LLM resources for developers"
readmeQualityOk: true
url: "https://github.com/xwiki/xwiki-dev-llm"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [53, 44]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-06-16T07:57:29Z"
lastCommitAt: "2026-10-01T10:23:47Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 64
maintainers: ["vmassol", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6fb42d0d47b803c97d7eb9a195fbf152dbc6a142bc5699c77c715df7ff01ce9/xwiki/xwiki-dev-llm"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/xwiki"]
---

# xwiki-dev-llm

Shared LLM configuration for XWiki developers, distributed as a
[Claude Code plugin marketplace](https://docs.claude.com/en/docs/claude-code/plugin-marketplaces),
a [Kimi Code](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/plugins.html) plugin,
and an [opencode](https://opencode.ai) config.

The goal is consistency across developers, sharing the work of others, and simple onboarding —
generic enough to work for **every** XWiki developer (no committed secrets, no personal paths). It
was designed in the forum thread
[Organizing our LLM configs for all our repos](https://forum.xwiki.org/t/organizing-our-llm-configs-for-all-our-repos/18551).

The Claude marketplace manifest lives at the repo root (`.claude-plugin/marketplace.json`), the
Kimi plugin manifest lives at `kimi.plugin.json`, the opencode config lives at `opencode.jsonc`,
and the shared plugin content lives under [`xwiki/`](https://github.com/xwiki/xwiki-dev-llm/blob/HEAD/xwiki).

- [Install](#install) — [Claude Code](#claude-code) · [Kimi Code](#kimi-code) · [opencode](#opencode)
- [What you get](#what-you-get) — [Always on](#always-on--no-invocation) · [Skills](#when-you-ask--skills) ·…
