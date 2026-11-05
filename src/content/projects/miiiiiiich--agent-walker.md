---
repo: "miiiiiiich/agent-walker"
name: "agent-walker"
description: "Local AI coding-agent usage dashboard — tokens, cost, projects, autonomy."
readmeQualityOk: true
url: "https://github.com/miiiiiiich/agent-walker"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["antigravity", "claude-code", "codex-cli", "github-copilot", "grok", "opencode", "token-usage", "tui"]
stars: 26
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-12T05:42:49Z"
lastCommitAt: "2026-11-05T11:24:47Z"
lastReleaseAt: "2026-07-07T15:25:48Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 42
maintainers: ["miiiiiiich", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1266974941/f75102f7-9eb0-4304-97b5-58772bbb3aca"
---

# agent-walker

**日本語: [README.ja.md](https://github.com/miiiiiiich/agent-walker/blob/HEAD/README.ja.md)**

### Want to know how you use AI, not just how many tokens you burn?

agent-walker reads the logs Claude Code, Codex CLI and friends already leave on your machine, works out every metric it can, and puts them on one screen.
Compare with your friends, share it, have fun! #agent-walker

```sh
bunx agent-walker
# npx agent-walker
```

## What you learn

More than each agent's `status` or `usage` command tells you.

Every section reads the same window: the last 30 days.

| Question | Section |
|---|---|
| Which days you use it most, and at what hours | ACTIVITY / BY HOUR |
| How the daily burn splits across models | TOKENS PER DAY |
| Which projects, models and settings eat the tokens | PROJECTS / MODELS / MODES |
| Which tools and subagents do the work | TOOLS / SUBAGENTS |
| Which skills the tokens went to (Claude) | SKILLS |
| How many agents you run at once | PARALLEL AGENTS |
| How long you actually let an agent work | TURN LENGTH |
| How many hours the agent worked, and how fast you answer it | WORKING TIME |
| Whether you're wasting context | CONTEXT |
| What it would have…
