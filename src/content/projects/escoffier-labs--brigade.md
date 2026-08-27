---
repo: "escoffier-labs/brigade"
name: "brigade"
description: "Track work, verify results, carry memory, and sync tools across coding agents. Local files, no daemon."
readmeQualityOk: true
url: "https://github.com/escoffier-labs/brigade"
homepage: "https://brigade.tools"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent-memory", "ai-agents", "claude-code", "codex", "developer-tools", "local-first", "multi-agent", "openclaw", "opencode", "agent-handoffs"]
stars: 70
forks: 5
openIssues: 27
closedIssues: 461
watchers: 2
contributors: 7
recentReleases: 6
createdAt: "2026-05-13T21:55:58Z"
lastCommitAt: "2026-08-27T14:22:48Z"
lastReleaseAt: "2026-06-11T02:31:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 42
maintainers: ["solomonneas"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c4db27bc8e40c2ef2e9bb39a6092ab2e6e8b92ed80df444efc346778716fa3e/escoffier-labs/brigade"
---

</p>

  Brigade keeps coding-agent work trackable across tools, repos, and sessions: tasks, receipts, shared memory, and synced tools.
</p>

</p>

</p>

Published **v0.26.1** is the stable install (`brigade-cli==0.26.1`). Current main / **0.27 beta** adds per-repo parallel-safe work waves, cross-repo ready-work campaigns with query-time wave composition, Memory Operations, an optional fleet hub, vault projection, run lineage, activity and cloud status, code-graph views, bounded recall, and declared budgets. Cells below mark that split.

## What it does

- **Ready work and claim safety.** Brigade lists unblocked tasks and uses atomic claims so two agents cannot take the same item. Stable in v0.26.1.
- **Declared run limits, optional fleet hub, and registered cloud activity.** Current main / 0.27 beta enforces declared wall-clock and worker-dispatch ceilings, records named retry and reroute decisions, can report runs, repo claims, and external harness sessions through an operator-owned fleet hub, and reconciles registered cloud work against provider and GitHub state.
- **Verification receipts.** A check run through Brigade writes the command, the real exit code, and the Git state.…
