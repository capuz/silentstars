---
repo: "open-coder-ai/chock"
name: "chock"
description: "Governance-as-code for AI coding agents: author a policy once, enforce it on every agent (Claude, Copilot, Cursor, Codex) via git hooks, CI, and native controls."
readmeQualityOk: true
url: "https://github.com/open-coder-ai/chock"
homepage: "https://pypi.org/project/chock/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-plugins", "agentic-ai", "ai-agents", "claude-code", "developer-tools", "git-hooks", "guardrails", "policy-as-code", "cursor", "github-copilot"]
stars: 8
forks: 1
openIssues: 14
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T02:49:52Z"
lastCommitAt: "2026-09-29T10:04:34Z"
lastReleaseAt: "2026-09-20T15:28:47Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 54
maintainers: ["claude", "jothimani-rajendran"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1336588400/0e17f746-0118-43a4-8f25-c3136340aa02"
discussionCount: 3
---

# Chock

**Author a policy once. Every coding agent obeys it — as a git hook, a CI gate, or the agent's own pre-tool hook, never just prose.**

</div>

       alt="Terminal: chock init, chock add scan-secrets, chock sync --repo . A commit containing an AWS key is rejected: Potential secret detected in this change. Remove credentials and rotate any exposed keys. The same file, rewritten to read the key from the environment, commits cleanly.">
</p>

Your agent is fast, tireless, and occasionally commits an AWS key. Telling it not to works
until the context window fills up, a new session starts, or a different agent joins the repo
with no memory of the last conversation. Chock compiles a rule into the strongest control each
agent actually supports — a git hook that exits non-zero, a CI gate, a native pre-tool hook in
nine clients including Claude Code and Cursor, and chock's own agent-hooks file for Copilot CLI
and VS Code — and labels honestly when all it can do is advise.
The rules live in your repo as ordinary files, so they travel with every clone, fork and
contributor's agent, instead of living in one person's head or one tool's settings pane.

## Quick start

Python 3.11+ and…
