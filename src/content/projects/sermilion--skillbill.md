---
repo: "Sermilion/SkillBill"
name: "SkillBill"
description: "A deterministic Software Development pipeline for you AI agents, written in Kotlin with nice UI for monitoring."
readmeQualityOk: true
url: "https://github.com/Sermilion/SkillBill"
homepage: "https://skillbill.dev"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["agent", "agent-skills", "agentic-ai", "agentic-workflow", "codex", "copilot", "glm", "llm", "skill", "claude-code"]
stars: 46
forks: 5
openIssues: 1
closedIssues: 12
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-03-16T08:59:12Z"
lastCommitAt: "2026-11-06T12:17:30Z"
lastReleaseAt: "2026-09-15T15:23:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 51
maintainers: ["Sermilion", "braian-gapur"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed6603f8fcac0b9886b19b9c6891ee2aab061c2c923d940555d16085b5bd0b79/Sermilion/SkillBill"
---

# Skill Bill

**Governed feature workflows for AI coding agents.**
Issue in, reviewed and tested pull request out, with progress that survives interruptions.

[Quickstart](#quickstart) · [How it works](#how-it-works) · [Commands](#commands) · [Watching runs](#watching-and-controlling-runs) · [Platform packs](#platform-packs) · [Configuration](#configuration) · [Docs](#documentation)

---

Skill Bill turns an issue and its acceptance criteria into a pull request. It plans the work, implements it, audits it against the criteria, reviews and fixes it, runs your project's checks, tests the app on a device, and opens the PR. A local runtime records every phase, so a crashed or paused run picks up where it stopped.

It works with Claude Code, Codex, and Cursor. You install one skill, `/skill-bill`, and review the result before merging. The project is pre-1.0.

## Why Skill Bill

- **Durable runs.** Phase outputs and continuation state live in a local database. Resume with any compatible agent, because the state belongs to Skill Bill, not the agent session.
- **Acceptance criteria are checked, not assumed.** An audit compares the code and tests to each criterion and repairs gaps before…
