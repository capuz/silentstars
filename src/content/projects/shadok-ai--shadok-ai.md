---
repo: "shadok-ai/shadok-ai"
name: "shadok-ai"
description: "Run Claude Code agents on a schedule. They stay silent unless there's something worth telling you — a quiet day costs zero tokens."
readmeQualityOk: true
url: "https://github.com/shadok-ai/shadok-ai"
homepage: "https://shadok.ai"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [71, 22]
topics: ["agent-orchestration", "ai-agents", "anthropic", "automation", "claude-code", "cron", "developer-tools", "devops", "git-worktree", "llm"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2026-07-30T13:22:16Z"
lastCommitAt: "2026-11-06T13:20:24Z"
lastReleaseAt: "2026-08-24T20:16:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["shadok-ai-dev", "stefdelec", "gnarco"]
openGraphImageUrl: "https://opengraph.githubassets.com/62a66ce8a8b869faec4b0d57aecdc7eddec0f0f8d259fa031c6d6d4e99a908a6/shadok-ai/shadok-ai"
---

on the Claude subscription you already pay for. When one of them has a question,
you answer it with a click — in the browser, or from Telegram when you are not
at the desk.</p>

**It does not stop at one.** An agent can start other agents — each with its own
worktree, branch and role — and it is told when one of its own finishes, blocks on
a question, or dies. Nothing else wakes it.

**It keeps working when you are not there.** Mirror an agent to a Telegram topic
and answer from your phone, one topic per agent. Put a prompt on a schedule with a
**guard that runs without the model**: prints nothing, nothing happened, zero
tokens spent.

**It stays on a leash.** A profile is a role plus guardrails — forbid `git commit`
and the agent cannot commit. Secrets live in a vault outside your repository and
are injected only into the agents that need them. Quota gauges show the 5h and 7d
windows, and can hold an agent back when it is burning faster than the window
elapses.

**It wrote itself.** shadok-ai is largely built by agents running inside shadok-ai,
in their own worktrees, landed as reviewed pull requests. The section below is what
that produced.

## Quick start

```bash
npx shadok-ai…
