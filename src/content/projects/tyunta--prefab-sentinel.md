---
repo: "tyunta/prefab-sentinel"
name: "prefab-sentinel"
description: "MCP server for VRChat avatar and world projects: parses asset YAML directly (including UdonSharp's split program/behaviour structure) to detect and repair broken references, prefab Variant override drift, and null wiring across prefabs, scenes and materials. Built for AI agents with a dry-run/confirm gate and audit log."
originalDescription: "MCP server for VRChat avatar and world projects: parses asset YAML directly (including UdonSharp's split program/behaviour structure) to detect and repair broken references, prefab Variant override drift, and null wiring across prefabs, scenes and materials. Built for AI agents with a dry-run/confirm gate and audit log."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/tyunta/prefab-sentinel"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [73, 27]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-16T05:33:54Z"
lastCommitAt: "2026-07-07T06:30:27Z"
lastReleaseAt: "2026-07-01T06:08:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 45
maintainers: ["tyunta"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f73e68f0e578693a24eb0ec0c2c06b2c6378f34f0b228ee0c5062fa33ed5ca0/tyunta/prefab-sentinel"
---

# Prefab Sentinel

Unity / VRChat project Prefab / Scene / Asset safe inspection and editing MCP server.

Diagnoses `Variant` override collisions, `Broken PPtr` / missing fileID, Udon / ClientSim runtime exceptions with structured responses, and repairs without manual YAML editing. Designed with AI agents in mind.

Read-only paths (`validate_refs` / `validate_materials` / `inspect_*` / `find_*`, etc.) complete directly by reading YAML without launching Unity. Write paths (`patch_apply` / `set_property` / `editor_*`, etc.) operate via file-IPC with a resident Editor Bridge, and calls lacking `confirm=True` + non-empty `change_reason` audit pairs are rejected with `CHANGE_REASON_REQUIRED`.

This README serves as an entry point to each specialized document (see [Documentation Map](#ドキュメントマップ)). The official specification is in the specialized document group, and the official operational rules are in [AGENTS.md](https://github.com/tyunta/prefab-sentinel/blob/HEAD/AGENTS.md).

## What to do / What not to do

**What to do**

- Provide a safe editing foundation at the Unity SerializedObject level, making the effective values of Prefab Base / Variant / Scene instances traceable.
- API-ize…
