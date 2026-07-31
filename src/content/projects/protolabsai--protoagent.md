---
repo: "protoLabsAI/protoAgent"
name: "protoAgent"
description: "Template for building protoLabs A2A agents on LangGraph — fork me"
readmeQualityOk: true
url: "https://github.com/protoLabsAI/protoAgent"
homepage: "https://agent.protolabs.studio"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 24]
topics: ["a2a", "agent-framework", "agent2agent", "ai-agent", "ai-agents", "autonomous-agents", "fastapi", "langgraph", "llm-agent", "mcp"]
stars: 5
forks: 7
openIssues: 24
closedIssues: 479
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-04-17T16:45:59Z"
lastCommitAt: "2026-07-30T22:48:07Z"
lastReleaseAt: "2026-05-27T09:09:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 84
maintainers: ["mabry1985", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1213686959/26f00f2d-a32d-4e23-94a1-c235b8b2ac37?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063152Z&X-Amz-Expires=300&X-Amz-Signature=b66c9acd5091608031ae75a0d846cba56b790c905125258d2c17a7a5291a2c1e&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgxMiwibmJmIjoxNzg1NDc5NTEyLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.7jlbqbUSy3cq3HHe9hwN4Ej9RN4orBVuP8hdSmxleVQ"
discussionCount: 0
postedAt: "2026-07-25T06:06:56.645Z"
---

</p>

# protoAgent

A lean, A2A-native agent on LangGraph — ships a small core, grows with git-URL plugins.
Run one agent or orchestrate a fleet; drive it from a console, the OpenAI-compatible API,
or A2A. Local-first, yours to fork.

It keeps the boring parts — A2A spec handling, cost/extension emission, tracing, the
release pipeline — stable across every agent in the fleet, so forking an agent is close
to a rewrite of `SOUL.md`, `graph/prompts.py`, and `tools/lg_tools.py` and not much else.
You add capability as plugins instead of inheriting a pile of it.

**Canonical reference implementation**: [protoLabsAI/roxy](https://github.com/protoLabsAI/roxy).
Roxy is a filled-in fork — an autonomous ProtoMaker portfolio manager with its
own persona, A2A skills, and project registry — a good example of what a fork
looks like end-to-end.

**Try it in 5 minutes:** clone, `uv sync && uv run python -m server`
(or `pip install -r requirements.txt && python -m server`), open
<http://localhost:7870>, and walk the
setup wizard — no forking, no `sed`, no Docker required to get
your first agent talking. See the [first-agent…
