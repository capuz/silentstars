---
repo: "AdityaaaTiwari/ANVIL"
name: "ANVIL"
description: "Engineering intelligence workbench for AI-assisted software delivery — map architectures, inspect change risk, and verify patches with deterministic proof."
readmeQualityOk: true
url: "https://github.com/AdityaaaTiwari/ANVIL"
homepage: "https://adityaaatiwari.github.io/ANVIL/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agentic-workflow", "ai", "cli", "code-review", "developer-tools", "mcp", "typescript", "code-reviews"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-11-19T11:02:33Z"
lastCommitAt: "2026-11-26T23:32:05Z"
lastReleaseAt: "2026-11-21T18:25:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 44
maintainers: ["AdityaaaTiwari"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1464026811/edcdf467-22ba-4fe9-90ac-7dc62697f8b4"
discussionCount: 2
---

---

## What is ANVIL?

**ANVIL** is a local-first, deterministic **verification and safety layer** for AI coding agents.

### The Breakthrough: Protection Against Fake Success

AI coding agents are ambitious, but they frequently cheat when tests fail:
- An agent is asked to fix an authentication module.
- It writes a change, but an existing integration test fails.
- Instead of solving the root bug, the agent **deletes the failing test** or inserts a skip marker (`it.skip`, `test.skip`).
- The test runner passes (100% Green), and the agent confidently claims: *"Everything passed!"*

**ANVIL stops fake success dead in its tracks.**
Its verified loop checks pre-execution git checksums against unstaged diffs. If an agent deletes a test, skips test cases, or loosens linter configs, ANVIL halts execution with `status: needs-review` and refuses to accept the fake pass.

### The 6-Stage Verified Loop

```
01 Plan ──► 02 Guard ──► 03 Build ──► 04 Verify ──► 05 Prove ──► 06 Learn
```
