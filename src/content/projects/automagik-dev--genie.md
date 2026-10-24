---
repo: "automagik-dev/genie"
name: "genie"
description: "Wishes in, PRs out. CLI agent that interviews you, plans the work, dispatches parallel agents in isolated worktrees, and reviews code before you see it."
readmeQualityOk: true
url: "https://github.com/automagik-dev/genie"
homepage: "https://docs.automagik.dev/genie"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["ai-agents", "cli", "developer-tools", "claude", "claude-code", "context-engineering", "ai-developer-tools", "anthropic", "automation", "autonomous-agents"]
stars: 345
forks: 57
openIssues: 2
closedIssues: 1412
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2025-08-01T02:00:02Z"
lastCommitAt: "2026-10-24T00:15:08Z"
lastReleaseAt: "2025-08-01T04:48:05Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 40
maintainers: ["namastex888", "automagik-genie", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b21b123b3dba76e322cf1e55f8ebbb4f1f43034bbdc0875ddc054c5fa91d18bc/automagik-dev/genie"
---

Give `/wish` one decided task. It checks that the task fits, builds it in its own worktree, runs your repository's own check, has an agent that did not write the code review the exact commit, and opens a pull request. Merging stays with you.

```bash
curl -fsSL https://raw.githubusercontent.com/automagik-dev/genie/main/install.sh | bash
```

Claude Code runs it as `/wish`, Codex as `$wish`, and other agents by name. [Docs](https://docs.automagik.dev/genie) · [Skills](https://docs.automagik.dev/genie/skills) · [Discord](https://discord.gg/xcW8c7fF3R)

One `/wish` from a real run, shortened:

```text
You:    /wish Delete dead code: src/lib/defaults.ts has no production callers
        (only a type import of AgentDefaults in src/lib/workspace.ts) and
        src/__tests__/dir-ls.test.ts reimplements a removed handler and asserts
        on its own copy. Move the AgentDefaults type into workspace.ts, delete
        defaults.ts, defaults.test.ts and dir-ls.test.ts.

Genie:  I started the wish workflow in the background on branch
        wish/delete-dead-defaults. It checks that the task fits a single wish,
        makes the change in its own worktree, runs the full check, gets an…
