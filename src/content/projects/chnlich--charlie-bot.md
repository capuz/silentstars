---
repo: "chnlich/charlie-bot"
name: "charlie-bot"
description: "Personal assistant based on agents (claude code / codex / opencode) to do the daily work"
readmeQualityOk: true
url: "https://github.com/chnlich/charlie-bot"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-16T21:11:44Z"
lastCommitAt: "2026-11-15T11:16:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["chnlich"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ae5d186c415f4de63eaaed101bbf4d2f839a3bfec055f16df08549ff9716e23/chnlich/charlie-bot"
---

# CharlieBot

CharlieBot is a self-hosted agent system for real work: you chat with a master agent, it plans the
job, delegates it to worker agents that each work in an isolated git worktree, and a reviewer agent
checks the result before it lands on the base branch. The whole tree runs on your own machine,
across pluggable LLM CLI backends, and is operated through a web UI.
Steps that should not happen silently — publishing, sending in your name, spending money — pass an
approval, and the steps the agent proceeds with on its own are reported with how to undo them.

## How it works

Every conversation is a session, and sessions form a tree: the session you talk to is a manager,
and the work it does not do itself it delegates to child sessions — worker agents that run in
isolated git worktrees, and the reviewer that checks their result and pushes it to the base branch
with a fast-forward-only push. A manager presents its approach as a plan in the plan registry
before large work starts; plans carry versions and an approval record. What an agent may do on its
own is bounded by two rules: a high-consequence step becomes a Waiting on you item that waits for your take off,
and a…
