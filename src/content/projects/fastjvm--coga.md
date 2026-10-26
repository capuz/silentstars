---
repo: "FastJVM/coga"
name: "coga"
description: "A CLI on top of your coding agents: per-task context and workflows, stored as Markdown in Git."
readmeQualityOk: true
url: "https://github.com/FastJVM/coga"
homepage: "https://github.com/FastJVM/coga"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 2
createdAt: "2026-04-13T21:37:08Z"
lastCommitAt: "2026-10-26T18:07:11Z"
lastReleaseAt: "2026-10-21T04:28:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["lilfedor"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb646af2dea155850b834bff1f642314ff1d913fdc470028c332308ce93a8c51/FastJVM/coga"
---

# Coga

> Most tools are building infrastructure for agents. Coga is an instrument
> for the human using them.

Coga is a CLI that runs your coding agent from Markdown files in your Git
repo. Every launch assembles those files into the agent's opening task
prompt. When an agent gets something wrong, you correct the relevant file,
and future work starts from the updated instructions.

**Text above code.** The text is the source of truth for intent, knowledge,
and decisions. Code implements that understanding and can be rewritten as
we learn.

Think of it as a workbench, not an assembly line: it's what you build with
while you're still working out what to build. 

Coga is a small overlay on top of what agents already provide, so it gets better when they do.

Coga is built with Coga: see the tickets in [`coga/tasks/`](https://github.com/FastJVM/coga/blob/HEAD/coga/tasks) and
the full history in [`coga/log.md`](https://github.com/FastJVM/coga/blob/HEAD/coga/log.md).

## The problem

On a real project, `CLAUDE.md` or `AGENTS.md` keeps growing until the agent only skims it. There are various techniques to mitigate this problem: auto-memories, scoped `AGENTS.md` files, MCP servers.…
