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
openIssues: 16
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T02:49:52Z"
lastCommitAt: "2026-10-07T10:30:32Z"
lastReleaseAt: "2026-09-20T15:28:47Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 55
maintainers: ["jothimani-rajendran", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1336588400/0e17f746-0118-43a4-8f25-c3136340aa02"
discussionCount: 3
---

# Teach your AI agent what not to do.

Open-source guardrails for AI coding agents: rules the agent reads, checks that run as it writes, and gates at commit and in CI.

[chock](https://github.com/open-coder-ai/chock) · [chock-catalog](https://github.com/open-coder-ai/chock-catalog) · chock.sh (launching soon)

Chock is a policy compiler. You write a policy once, and Chock compiles it into the strongest control each coding agent supports: a git hook that exits non-zero, a CI gate, or the agent's own pre-tool hook. Every check is a deterministic script, with no model and no upload. Free and open source (Apache-2.0).

## Application security for the code your agents write

Coding agents already ask before they run a shell command. What they do not check is the code they write: SQL injection in a Spring repository, an IAM grant on `*`, an MCP server at `@latest`, a bidi override hiding in a source file, a secret written into agent memory. Chock checks that code as the agent writes it, at commit and in CI.

| Area | What gets refused | Policy | Tier |
| :--- | :--- | :--- | :--- |
| Java & Kotlin | injection, XXE, SSRF, unsafe deserialization, weak crypto, dependencies below a known…
