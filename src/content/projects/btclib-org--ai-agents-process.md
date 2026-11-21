---
repo: "btclib-org/ai-agents-process"
name: "ai-agents-process"
description: "The btclib-org process for coding agents: its skills, the files they share, and the writer, reviewer and designer agents"
readmeQualityOk: true
url: "https://github.com/btclib-org/ai-agents-process"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [54, 46]
topics: ["btclib", "claude-code", "development-process"]
stars: 9
forks: 0
openIssues: 43
closedIssues: 309
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-01T06:57:04Z"
lastCommitAt: "2026-11-21T13:29:38Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 49
maintainers: ["fametrano", "claude[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d62a29e39feec1a0185084766ce31a26da35dd6d1874da694bf1066788af9cff/btclib-org/ai-agents-process"
---

# ai-agents-process

The process the btclib-org maintainers follow with the coding agents
[Claude Code](https://claude.com/claude-code) and
[Codex](https://developers.openai.com/codex):

- `skills/btclib-iss/SKILL.md` — the `/btclib-iss` skill, from an issue
  to an open pull request, followed as its author;
- `skills/btclib-pr/SKILL.md` — the `/btclib-pr` skill, from an open
  pull request to the decision to approve, and to `main`;
- `skills/btclib-pr/review-quota.md` — what `/btclib-pr` does while the
  review bot's quota is exhausted, read only then;
- `skills/btclib-inbox/SKILL.md` — the `/btclib-inbox` skill, the issues
  and pull requests of the organization that wait on the maintainer,
  which only reads;
- `skills/btclib-inbox/measure.sh` — the script `/btclib-inbox` runs to
  read them;
- `scripts/test-inbox-measure.sh` — `sh scripts/test-inbox-measure.sh`
  checks what `skills/btclib-inbox/measure.sh` prints on answers a
  stand-in for `gh` serves; it needs `jq` on the `PATH`, as
  `measure.sh` does;
- `skills/btclib-table/SKILL.md` — the `/btclib-table` skill, one table
  of every repository of the organization, which only reads;
- `skills/btclib-table/measure.sh` — the…
