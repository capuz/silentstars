---
repo: "Sermilion/SkillBill"
name: "SkillBill"
description: "SkillBill packages your engineering judgment into governed skills, then uses a durable Kotlin runtime to ensure agents actually execute that process consistently, resumably, and with bounded context."
readmeQualityOk: true
url: "https://github.com/Sermilion/SkillBill"
homepage: "https://skillbill.dev"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["agent", "agent-skills", "agentic-ai", "agentic-workflow", "codex", "copilot", "glm", "llm", "skill", "claude-code"]
stars: 42
forks: 4
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-03-16T08:59:12Z"
lastCommitAt: "2026-10-09T10:51:15Z"
lastReleaseAt: "2026-09-15T15:23:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["Sermilion", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f857f29a6f1eb25085845b79c39b50ba677f4776659a39eee915dc571de9038/Sermilion/SkillBill"
---

# Skill Bill

Skill Bill takes feature work from an issue and acceptance criteria through planning, implementation, simplification, review, and a PR. A local runtime saves progress between phases, so interrupted work can continue from durable state.

Use it with Claude Code, Codex, or Cursor. One listed skill, `/skill-bill`, runs the full feature workflow, a single phase such as review or validation, or a runtime operation. You review the resulting changes before merging. The project is pre-1.0.

[Quickstart](#quickstart) · [Workflow](#feature-workflow) · [Skills](#skills) · [Platform packs](#platform-packs) · [IDE integrations](#agents-and-ide-integrations) · [Execution matrix](#execution-matrix) · [Documentation](#learn-more)

## Quickstart

Install and authenticate your coding agent's CLI, then install Skill Bill:

```bash
curl -fsSL https://raw.githubusercontent.com/Sermilion/SkillBill/main/install.sh | bash
```

Choose your agents, platform packs, and telemetry level when prompted. The installer downloads a self-contained runtime, renders `/skill-bill` with the selected packs' review specialists as its internal sidecars, links it into agent directories, and registers the MCP…
