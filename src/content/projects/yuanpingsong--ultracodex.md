---
repo: "YuanpingSong/ultracodex"
name: "ultracodex"
description: "Run Claude Code workflow scripts, unmodified, on the OpenAI Codex CLI — fable plans, codex executes, fable verifies. Parallel agent fleets, builder–verifier loops, token budgets, full-screen TUI."
readmeQualityOk: true
url: "https://github.com/YuanpingSong/ultracodex"
homepage: "https://www.npmjs.com/package/ultracodex"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [79, 20]
topics: ["agent-orchestration", "ai-agents", "anthropic", "claude-code", "cli", "codex", "llm", "multi-agent", "openai", "tui"]
stars: 54
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-07-03T05:07:28Z"
lastCommitAt: "2026-07-11T05:55:55Z"
lastReleaseAt: "2026-07-10T22:56:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["YuanpingSong"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab658f86ad7ffac453e92ce7bda6e594394dd1be3a3f8fa3bec8f45eb8cf5440/YuanpingSong/ultracodex"
---

</p>

# ultracodex

</p>

**Run Claude Code workflow scripts, unmodified, on your Codex subscription — and on OpenCode.** Then go further than running them: **loop** them until a skeptical verifier approves, **schedule** them with cron doing the waking, or stand up a permanent **organization** of agents that remembers. Your Claude session writes the script and reads the verified result; the heavy lifting lands on the subscription you aren't rationing.

The idea underneath: the **agent is a unit of programming**. You write ordinary JavaScript and call an agent like a function — `await agent(prompt, { schema })` hands back a structured result. ultracodex abstracts the backend away, so one script runs on any of the three it supports: Codex, Claude, or OpenCode. Workflows, loops, schedules, and orgs are what you build once the agent is something you can program with.

Getting started is quick because your agent does the learning: a bundled skill teaches your coding agent how to drive ultracodex, so you describe the task and your agent writes and runs the workflow. One command installs it for Claude Code (`ultracodex sync-skills`);…
