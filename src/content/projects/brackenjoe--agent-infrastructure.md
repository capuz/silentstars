---
repo: "brackenjoe/agent-infrastructure"
name: "agent-infrastructure"
description: "A guide for AI agent set up. A manager, a cheaper builder for code, any agents for other repetitive tasks, and the governance to keep them in line. "
readmeQualityOk: true
url: "https://github.com/brackenjoe/agent-infrastructure"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [67, 33]
topics: ["ai-agents", "claude-code", "cloudflare-tunnel", "homelab", "multi-agent", "tailscale", "tak-server", "codex"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-10-16T11:31:26Z"
lastCommitAt: "2026-11-26T15:24:29Z"
lastReleaseAt: "2026-11-12T12:25:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["brackenjoe", "claude", "mferndy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1422073833/3de24552-8623-4fad-813c-3907b7c8b024"
discussionCount: 1
---

# agent-infrastructure

A guide for AI agent setup in [Claude Code](https://code.claude.com/docs/en/overview)
or [ChatGPT Codex](https://chatgpt.com/codex/). A manager reviews each
request before any work starts, a cheaper builder writes code once the
design is settled, a read-only reviewer reads what leaves, and other
agents take the repetitive tasks you hand them. Checks are rerun, not
taken on an agent's word. On a machine of its own, the agent runs as a
Unix user of its own, with a short list of what it may do as root.

It scales from one cloud session with no server to a network of your own
machines. It was written from the Claude Code setup Bracken Systems runs,
and every practice here came from running it: the
[incidents](https://github.com/brackenjoe/agent-infrastructure/blob/HEAD/docs/incidents.md) are thirty-nine failures from eleven weeks,
thirty-seven of them with the rule they produced.
[The reference build](https://github.com/brackenjoe/agent-infrastructure/blob/HEAD/docs/reference-build.md) is the setup they came
from, in broad strokes, and why it is shaped that way. Codex is covered
for the cloud path.
