---
repo: "itsOmidKarami/kraft"
name: "kraft"
description: "A local orchestrator that takes your coding agent from spec to pull request, stopping only when a decision is yours."
readmeQualityOk: true
url: "https://github.com/itsOmidKarami/kraft"
homepage: "https://kraft-sdlc.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 28]
topics: ["ai-agents", "claude-code", "claude-code-marketplace", "claude-code-plugin", "developer-tools", "claude", "mcp", "orchestration", "agentic-ai", "agentic-coding"]
stars: 12
forks: 10
openIssues: 29
closedIssues: 14
watchers: 1
contributors: 10
recentReleases: 10
createdAt: "2026-09-09T09:12:20Z"
lastCommitAt: "2026-11-08T10:41:36Z"
lastReleaseAt: "2026-09-17T22:46:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 86
undervaluedScore: 61
maintainers: ["itsOmidKarami", "melmel812", "JuanBarriosS"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a509a7d545f6f61bd2d5df6b5cf8a06b14765c1ab2f47ed8ba1cd3eb83b2848/itsOmidKarami/kraft"
discussionCount: 0
---

# Kraft

**A local orchestrator that takes your coding agent from spec to pull request,
stopping only when a decision is yours.**

**[Try the live demo](https://kraft-sdlc.dev/demo/)**: the web UI on sample
data, in your browser, with nothing to install.

Kraft isn't another coding agent. It runs the one you already use, and adds
what a single session can't: a process the agent can't skip, checks it doesn't
grade itself on, and a person at the decisions that matter.

Hand Kraft a task, start it and walk away. A new task, a *work item*, is filed paused,
in the web interface, on a phone and from the CLI alike, so nothing runs until
you start it. Your agent drafts the spec and the plan and
stops for your approval of each, or starts from a spec you wrote. It's for
developers tired of babysitting a session to the end of a task;
[when not to use Kraft](https://kraft-sdlc.dev/get-started/why-kraft#when-not-to-use-kraft)
says who it isn't for.

Install it with `uv tool install kraft-sdlc` and run `kraft`. It needs Claude
Code, logged in; [Install](#install) has Homebrew and the agent plugin.

Kraft works with Claude Code out of the box, and you can drive it from Codex,
Cursor,…
