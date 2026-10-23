---
repo: "theisegoria/game-development-studio"
name: "game-development-studio"
description: "Local-first game asset production, vendoring, visual debugging, and performance tooling for Codex and Claude."
readmeQualityOk: true
url: "https://github.com/theisegoria/game-development-studio"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [62, 24]
topics: ["3d", "claude", "game-assets", "gltf", "image-to-3d", "leonardo-ai", "pbr", "text-to-3d", "tripo", "typescript"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-24T00:27:00Z"
lastCommitAt: "2026-10-23T09:33:17Z"
lastReleaseAt: "2026-08-24T23:40:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 50
maintainers: ["theisegoria", "Shane-CodeMason"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a9885f0321a0aec98035b3a7fff0a0c19dc9592812502d457fb181454d0049c/theisegoria/game-development-studio"
---

# Game Development Studio

Local-first tools for producing, packaging, vendoring, capturing, debugging,
and optimizing game assets and renders. The stable automation interface is the
`game-dev` command-line program and its JSON/JSONL protocol; five focused skills
and a native macOS companion build on that same inspectable boundary.

The project is designed for human developers and local coding agents that need
more than a screenshot: immutable run bundles can combine render attachments,
scene controls, logs, counters, timing samples, and provenance so a visual
diagnosis has inspectable evidence behind it.

## What it does

- Drives Tripo 3D and Leonardo image/audio jobs through explicit,
  per-invocation spend authorization.
- Inspects and validates GLB assets, normalizes meshes through Blender, and
  creates optional USDZ previews.
- Builds content-addressed asset packages with hashes, receipts, provenance,
  licenses, validation results, and a rebuildable catalog.
- Plans project vendoring before it writes and blocks unknown licenses,
  invalid packages, symlink escapes, and destination collisions by default.
- Runs declarative, project-owned capture scenarios with independent…
