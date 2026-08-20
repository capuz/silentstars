---
repo: "Thepizzapie/BuildersGate"
name: "BuildersGate"
description: "Agentic game development for building games with AI Agents. Run one session per seat: art, gameplay, narrative, QA, audio, tech all in 1 spot"
readmeQualityOk: true
url: "https://github.com/Thepizzapie/BuildersGate"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["agent-framework", "agent-memory", "agent-orchestration", "agent-skill", "claude", "claude-code", "game-development", "godot", "godot-engine", "mcp"]
stars: 21
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-17T13:09:39Z"
lastCommitAt: "2026-08-20T04:07:34Z"
lastReleaseAt: "2026-07-31T05:35:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["Thepizzapie"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc982b8e12998ac5017ec38602e47330ba3814e3e05d4884a1b4ac50fd25ac92/Thepizzapie/BuildersGate"
discussionCount: 1
---

# Builders Gate

**An MCP server for building games with Claude Code.** It gives Claude 211
tools scoped to one game project: a design database, a work queue,
reference-pinned art and music generation, Godot and Blender adapters, and
playtest capture. All state lives in one SQLite file inside the project.

You run several Claude Code sessions at once, each holding a seat: art,
gameplay, narrative, QA, audio, tech. They share one database, so they do not
contradict each other, and file locks stop two of them editing the same asset. A
local dashboard shows what each one is doing and is where you dispatch work and
approve output.

Three limits are enforced in code: generation stops at a spend ceiling, a file
locked by one seat cannot be written by another, and no agent approves its own
art.

**For:** people running Claude Code on a game who want more than one session
working on it at once. It is more machinery than a small project needs.

**Platform:** Windows. Linux is best-effort and macOS is untested.

       alt="The dashboard: live agents, the queue, and recent activity">
</p>

## What is in the repo

| Path | What it holds |
|---|---|
|…
