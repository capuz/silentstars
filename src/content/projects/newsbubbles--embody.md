---
repo: "newsbubbles/embody"
name: "embody"
description: "A deterministic world engine for agents. A DOM for worlds."
readmeQualityOk: true
url: "https://github.com/newsbubbles/embody"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-08T20:19:19Z"
lastCommitAt: "2026-11-14T10:47:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["newsbubbles"]
openGraphImageUrl: "https://opengraph.githubassets.com/64ce6295cb8adb87782729ee4e3d7fe6817f317e2ec2bef241705f34f11ad4e6/newsbubbles/embody"
---

# embody

A deterministic world engine for agents. A DOM for worlds.

Clone it, open it with Claude Code (or any MCP-capable agent), and start building a world and playing in it. The engine keeps the world honest. The agent does the imagining.

**Status: alpha.** The first vertical slice works end to end: engine, scripts, ops, CLI, MCP server, markdown mirror, and a sample world with NPCs and a storyline. APIs will still move.

## The idea

- A world is a tree of entities: root, places, things, characters.
- Every entity is three things at once: content (its state), code (its components) and ops (its actions, as seen by whoever stands near it).
- Every change is an action. Every action emits events that bubble up the tree. Rules cascade down it.
- Humans and agents join by embodying an entity. What you embody and what capabilities you hold decide what you can do.
- Logic is code: small Python-syntax scripts the engine runs itself, deterministically, with no imports and a fuel limit. Monsters tick, doors open paths, storylines wait for their trigger.
- Places can have a space (0, 1, 2 or 3 dimensions), so a text room and a tactical grid are the same thing with a number changed.
-…
