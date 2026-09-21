---
repo: "langgenius/mosoo"
name: "mosoo"
description: "The open-source Agent Gallery and Gateway for Codex, Claude Agent SDK, and OpenCode. Developers publish an Agent once behind one HTTP API; users run it in an isolated cloud sandbox—no local harness setup, compute, or runtime infrastructure."
readmeQualityOk: true
url: "https://github.com/langgenius/mosoo"
homepage: "https://mosoo.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-observability", "agent-runtime", "agent-sandbox", "ai-agents", "codex", "coding-agent", "mcp", "opencode", "agent-control-plane", "claude-agent-sdk"]
stars: 149
forks: 26
openIssues: 40
closedIssues: 75
watchers: 1
contributors: 12
recentReleases: 7
createdAt: "2026-06-13T02:18:02Z"
lastCommitAt: "2026-09-21T09:13:15Z"
lastReleaseAt: "2026-09-09T09:12:37Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 35
maintainers: ["Yevanchen", "samzong", "AsperforMias"]
openGraphImageUrl: "https://opengraph.githubassets.com/e573e18f02fde68f21a875b8f25877718ce69111178f04be6ed17b20ee94e94d/langgenius/mosoo"
---

</p>

<h1 align="center">mosoo</h1>

  <strong>An open-source managed agent runtime for application backends.</strong><br />
  Run OpenAI Codex, Claude Agent SDK, and OpenCode behind API endpoints in isolated AI agent sandboxes.
</p>

</p>

</p>

mosoo provides a Cloudflare-native control plane to stream tool activity, inspect Run history, and keep Threads and files across executions. It is self-hostable in your own account.

Your application remains yours. Its backend owns product behavior and end-user access. mosoo focuses on Agent execution and lifecycle.

## Target Direction

mosoo v1 targets research, data analysis, file processing, and report generation through `Project key + Agent + Input + optional files -> durable Session`. Agent configuration is optional and publishing is removed from first use. Acceptance covers a single-turn ghFind repository evaluation and CSV analysis with durable follow-up, including recovery after runtime reclamation. Both use the same Session API and checkpoint gate. Project keys have shipped; the Session transition is not complete. See [SPEC](https://github.com/langgenius/mosoo/blob/HEAD/docs/SPEC.md) and [remaining execution…
