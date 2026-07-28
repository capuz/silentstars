---
repo: "matthiasdebernardini/agcli"
name: "agcli"
description: "A tiny, no-bloat foundation crate for building agentic CLIs in Rust."
readmeQualityOk: true
url: "https://github.com/matthiasdebernardini/agcli"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-02-25T21:16:50Z"
lastCommitAt: "2026-07-28T14:59:17Z"
lastReleaseAt: "2026-07-28T15:00:57Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 44
maintainers: ["matthiasdebernardini"]
openGraphImageUrl: "https://opengraph.githubassets.com/f98dc1444a936e0f72e9970f69a23241bebe28c7f5b5f89b083f3c6338c1ae1e/matthiasdebernardini/agcli"
---

# agcli

`agcli` is a no-bloat Rust crate for building agent-native CLIs.

It is built around the design in [design.md](https://github.com/matthiasdebernardini/agcli/blob/HEAD/design.md):
- JSON-only envelopes
- HATEOAS `next_actions`
- self-documenting root command tree
- typed exit codes for agent self-correction
- agent-native output flags (`--select`, `--compact`, `--quiet`) on every command
- context-safe output truncation and bounded list output
- built-in `doctor` health checks and a static command-tree self-audit
- typed NDJSON streaming with terminal `result`/`error`

## Why terminal envelopes and truncation pointers matter

- Terminal `result` / `error` envelopes give agents a deterministic finish state, so they can branch on structured outcomes instead of fragile text parsing.
- Structured `error` envelopes support reliable retries, escalation, and fallback actions, while `result` envelopes make successful completion explicit and machine-verifiable.
- Truncation with file pointers lets CLIs cap large outputs safely while preserving continuity: agents can follow the pointer to full logs or artifacts without overflowing context windows.
- This improves reliability and…
