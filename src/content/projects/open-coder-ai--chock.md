---
repo: "open-coder-ai/chock"
name: "chock"
description: "Governance-as-code for AI coding agents: author a policy once, enforce it on every agent (Claude, Copilot, Cursor, Codex) via git hooks, CI, and native controls."
readmeQualityOk: true
url: "https://github.com/open-coder-ai/chock"
homepage: "https://chock.sh"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-plugins", "agentic-ai", "ai-agents", "claude-code", "developer-tools", "git-hooks", "guardrails", "policy-as-code", "cursor", "github-copilot"]
stars: 10
forks: 1
openIssues: 14
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T02:49:52Z"
lastCommitAt: "2026-11-11T18:43:48Z"
lastReleaseAt: "2026-09-20T15:28:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 54
maintainers: ["jothimani-rajendran", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1336588400/0e17f746-0118-43a4-8f25-c3136340aa02"
discussionCount: 4
---

# Blocks your coding agent's wrong moves before they land.

Chock blocks that action, nothing else: no suggestions, no rewrites.

[chock](https://github.com/open-coder-ai/chock) · [chock-catalog](https://github.com/open-coder-ai/chock-catalog) · [chock.sh](https://chock.sh/)

Chock is a policy compiler. You write a policy once, and Chock compiles it into the strongest control each coding agent supports: a git hook that exits non-zero, a CI gate, or the agent's own pre-tool hook. Every check is a deterministic script, with no model and no upload. Free and open source (Apache-2.0).

New guardrails are content, not code: a policy is a manifest plus the evals that prove it fires, with no engine change and no plugin API to learn.

Agent folders at this repo's root (`.claude/`, `.cursor/`, …) are chock's compiled output.

## Install

chock 1.1.0 is on PyPI (Python 3.11 or newer):

```bash
pipx install chock==1.1.0
```

### Two ways to adopt it

1. **In your repository, for teams.** Run `chock init .`, then `chock add <id> --ref <catalog commit> --verify-sha <sha256> --skip-compile` for each policy, then `chock sync --repo . --ci`. Commit the result. A fresh clone arms itself from what…
