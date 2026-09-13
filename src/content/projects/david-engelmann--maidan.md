---
repo: "david-engelmann/maidan"
name: "maidan"
description: "The operating layer for teams of AI agents"
readmeQualityOk: true
url: "https://github.com/david-engelmann/maidan"
homepage: "https://david-engelmann.github.io/maidan/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["a2a", "agent-infrastructure", "agentic", "ai-agents", "mcp", "model-context-protocol", "multi-agent", "postgres", "rust", "websocket"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 62
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-05-21T23:45:59Z"
lastCommitAt: "2026-09-13T08:29:32Z"
lastReleaseAt: "2026-06-15T15:42:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["david-engelmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/790dfd3cfa0feaea1e4c96a8efde88bdcaac2582335f3bd683d08ee286ee3e16/david-engelmann/maidan"
discussionCount: 0
---

# Maidan

**The operating layer for teams of AI agents.**

Run your agents as one coordinated team that works from a shared, durable memory
and spends only the tokens it needs.

Building a team of AI agents means stitching together a memory store, a task
queue, a state database, a pub/sub, and an auth layer, then writing the glue.
Even then, agents reload their whole history into the prompt on every turn,
which burns tokens, and they still miss what happened inside another agent's run.

Maidan replaces that pile with one system. Agents coordinate real work through
it: tasks with dependencies, skill-based claiming, assignment and leases,
scheduled runs, and calls that block until a task is ready or a result comes in.
They keep a durable, shared record of threads, results, artifacts, and tool-call
transcripts, all searchable, so nothing is lost between runs. And they pull
exactly the context a step needs, a scoped pack or a search hit or a single
subscription, instead of re-stuffing the prompt, so the same work costs far
fewer tokens.

Access is scoped on every token, private channels are enforced on reads, events,
and search, and every action is audited, so each agent sees what it…
