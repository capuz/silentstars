---
repo: "openexec/openexec"
name: "openexec"
description: "Executable engineering judgment for AI coding tools: blueprints, gates, checkpoints, policy, memory, and audit trails."
readmeQualityOk: true
url: "https://github.com/openexec/openexec"
homepage: "https://openexec.io"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["agent-harness", "ai-agents", "ai-coding", "developer-tools", "golang", "mcp", "workflow"]
stars: 9
forks: 0
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-24T19:09:04Z"
lastCommitAt: "2026-09-04T08:09:45Z"
lastReleaseAt: "2026-07-09T08:22:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["perttu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccda0b4922b6bf67b889afcc164395c2a0bc4953cd4743c36d263b7a0f107925/openexec/openexec"
---

</p>

<h1 align="center">OpenExec</h1>

  <strong>Executable engineering judgment for AI coding tools</strong>
</p>

</p>

---

## What Is OpenExec?

Can expert engineering judgment become executable?

Most engineering expertise is tacit. It lives in senior engineers' heads: where to look first, which files not to touch, which tests actually matter, when a shortcut is acceptable, and when a change must stop for human review.

AI coding tools can generate code, but they do not automatically inherit that judgment. Left alone, an agent can read too much, touch the wrong surface, retry unpredictably, skip implicit checks, or leave behind a confident summary instead of evidence.

OpenExec is a deterministic runtime for AI coding tools. It wraps Claude Code, Codex, Gemini CLI, or any OpenAI-compatible API in executable structure: blueprints, scoped tools, quality gates, checkpoints, memory, policy, approvals, and audit trails.

The model still reasons. OpenExec governs the run.

In practice, you give OpenExec a scoped task or a higher-level intent, and it plans the change, builds it through a blueprint (gather context → implement → lint → test → review), runs your quality gates, and…
