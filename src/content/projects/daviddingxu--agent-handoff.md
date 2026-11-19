---
repo: "DavidDingXu/agent-handoff"
name: "agent-handoff"
description: "Share and continue coding-agent tasks across Codex, Claude Code and DeepSeek Harness. Native task imports, ZIP files and end-to-end encrypted links."
readmeQualityOk: true
url: "https://github.com/DavidDingXu/agent-handoff"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["claude-code", "codex", "coding-agents", "developer-tools", "end-to-end-encryption", "golang", "session-handoff", "deepseek-harness"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-08-24T05:54:50Z"
lastCommitAt: "2026-11-19T05:07:59Z"
lastReleaseAt: "2026-10-28T06:22:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 45
maintainers: ["DavidDingXu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1031f94838d0f0cf41cdb45183bc8e51d2c92a4cbed62fb8dc049713108789a8/DavidDingXu/agent-handoff"
discussionCount: 0
---

Move conversation and tool evidence to another person, machine or coding agent.
Share a **ZIP file** or **end-to-end encrypted link**; the receiver previews it,
then opens a **new native task**. Existing tasks stay intact.

## Install

### Codex / Claude Code

```sh
# Codex
codex plugin marketplace add https://github.com/DavidDingXu/agent-handoff
codex plugin add agent-handoff@agent-handoff

# Claude Code
claude plugin marketplace add https://github.com/DavidDingXu/agent-handoff
claude plugin install agent-handoff@agent-handoff
```

Install or update to **0.5.0** on both sides, then restart the agent.

### DeepSeek Harness · experimental

Supports **DSH 0.2.2-rc.1 / rc.5**, Node **>=24.9.0**.

1. Download `dsh-agent-handoff-0.5.0.tgz` from [Releases](https://github.com/DavidDingXu/agent-handoff/releases).
2. In DSH, open **Plugins → Add plugin → Install third-party plugin**.
3. Enter the downloaded file's absolute path and enable the plugin.

No npm package name is available yet. Web profile commands and source builds:
[DSH guide](https://github.com/DavidDingXu/agent-handoff/blob/HEAD/plugins/dsh/README.md).
