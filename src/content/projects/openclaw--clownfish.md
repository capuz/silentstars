---
repo: "openclaw/clownfish"
name: "clownfish"
description: "Clownfish is a maintainer codex harness for resolving clusters of issues identified in bulk at scale. 🐠"
readmeQualityOk: true
url: "https://github.com/openclaw/clownfish"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 59
forks: 18
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-04-25T01:05:15Z"
lastCommitAt: "2026-08-22T04:06:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 36
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1220500253/5eadd7df-c5d9-459f-8e0c-bb8e46ff5453"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# 🐠 Clownfish

Clownfish is a conservative OpenClaw maintainer tool for one-cluster issue and PR cleanup.

It takes a curated GitHub issue/PR cluster, asks a Codex worker to classify the items, and applies only narrow, auditable cleanup actions when the evidence is strong. This compliments the pre-pass work on [clawsweeper](https://github.com/openclaw/clawsweeper) and act as the second-pass intent based cluster resolution.

Allowed automated close reasons:

- duplicate of a clear canonical thread
- superseded by a clear canonical thread
- fixed by a specific candidate fix

Manual backlog-cleanup jobs may also use
[`instructions/low-signal-prs.md`](https://github.com/openclaw/clownfish/blob/HEAD/instructions/low-signal-prs.md) for
drive-by PRs that are clearly blank-template, docs-only discoverability churn,
test-only coverage spam, refactor-only noise, third-party capabilities that
belong on ClawHub, risky unapproved infra, or dirty branches. This policy is
opt-in per job and should return `needs_human` for plausible bug fixes or
anything with active maintainer signal.

Everything else stays open or is escalated for maintainer review.

Security-sensitive reports are deliberately…
