---
repo: "Sermilion/skill-bill"
name: "skill-bill"
description: "SkillBill packages your engineering judgment into governed skills, then uses a durable Kotlin runtime to ensure agents actually execute that process consistently, resumably, and with bounded context."
readmeQualityOk: true
url: "https://github.com/Sermilion/skill-bill"
homepage: "https://skillbill.dev"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["agent", "agent-skills", "agentic-ai", "agentic-workflow", "codex", "copilot", "glm", "llm", "skill", "claude-code"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-03-16T08:59:12Z"
lastCommitAt: "2026-09-21T09:14:34Z"
lastReleaseAt: "2026-09-15T15:23:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["Sermilion"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bb4236903ef9c639c842ffbe79a66ca7f9291644a0723ad4fd317f25ef5f93e/Sermilion/skill-bill"
---

# Skill Bill

Skill Bill takes feature work from an issue and acceptance criteria through planning, implementation, simplification, review, and a PR. A local runtime saves progress between phases, so interrupted work can continue from durable state.

Use it with Claude Code, Codex, or Cursor. You can run the full feature workflow or use individual review and quality-check skills. You review the resulting changes before merging. The project is pre-1.0.

[Quickstart](#quickstart) · [Workflow](#feature-workflow) · [Skills](#skills) · [Platform packs](#platform-packs) · [IDE integrations](#agents-and-ide-integrations) · [Execution matrix](#execution-matrix) · [Documentation](#learn-more)

## Quickstart

Install and authenticate your coding agent's CLI, then install Skill Bill:

```bash
curl -fsSL https://raw.githubusercontent.com/oila-gmbh/skill-bill/main/install.sh | bash
```

Choose your agents, platform packs, and telemetry level when prompted. The installer downloads a self-contained runtime, renders the selected skills, links them into agent directories, and registers the MCP server. Prebuilt installs need no system JDK or Gradle.

Check the installation:

```bash
skill-bill…
