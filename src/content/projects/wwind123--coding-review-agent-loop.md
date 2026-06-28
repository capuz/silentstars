---
repo: "wwind123/coding-review-agent-loop"
name: "coding-review-agent-loop"
description: "Local Claude/Codex PR review loop using existing CLI subscriptions instead of model API keys"
url: "https://github.com/wwind123/coding-review-agent-loop"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "automation", "claude-code", "cli", "code-review", "codex", "coding-agent", "developer-tools", "github-pr", "local-first"]
stars: 10
forks: 2
openIssues: 29
closedIssues: 219
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-26T06:01:06Z"
lastCommitAt: "2026-06-28T06:54:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 51
maintainers: ["wwind123"]
openGraphImageUrl: "https://opengraph.githubassets.com/758f77cdca8ddaac50274572d06bc728f923c501e6cd80b2fd150cc9f84b7bef/wwind123/coding-review-agent-loop"
discussionCount: 4
---

# coding-review-agent-loop

Local command-line orchestration for a coding PR review loop.

Run a local Claude/Codex/Gemini PR review loop using your existing CLI subscriptions.

The main advantage is account reuse: the tool shells out to your
already-authenticated local CLIs (`claude`, `codex`, `gemini`, and `gh`) instead
of calling model APIs directly. If your local agent CLIs are backed by existing
AI subscriptions or authenticated developer accounts, the review loop can use
those existing entitlements rather than requiring separate model API keys.

**Claude billing note:** Anthropic had announced that non-interactive `claude`
usage — including `claude -p` as used by this tool — would move from your
subscription's rate limits to a separate monthly Agent SDK credit. As of
June 15, 2026 that change has been **postponed**: `claude -p` / Agent SDK usage
continues to draw from your existing Claude subscription as before, with no
separate credit, and Anthropic has said it will give advance notice before any
future change. See
[Anthropic's support article](https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan)
for the latest. Gemini CLI and…
