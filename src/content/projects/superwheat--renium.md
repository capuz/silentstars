---
repo: "Superwheat/renium"
name: "renium"
description: "AI-workflow-focused two-way Studio sync with too many features"
readmeQualityOk: true
url: "https://github.com/Superwheat/renium"
homepage: "https://discord.gg/GDP7wM5J2E"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-12T16:40:36Z"
lastCommitAt: "2026-11-25T13:19:11Z"
lastReleaseAt: "2026-08-19T19:24:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["Superwheat"]
openGraphImageUrl: "https://opengraph.githubassets.com/b98830df784bce80984f0eee746dd8ca59a8b2520b5a3b3d3bd299a28916eff3/Superwheat/renium"
---

# Renium

Two-way sync between Roblox Studio and a project folder, made for large places and
for working with AI agents.

## Why Renium

### It syncs what a plugin cannot

Rojo, Argon and the Studio MCP servers work through a Studio plugin, and a plugin
only gets what Roblox exposes to scripts. Renium has a native helper beside its
plugin and reaches the rest:

- **Everything Studio saves.** It reads a place the way Studio writes a place file.
  The project holds what scripts never see: collision meshes, union geometry, the
  Terrain grid, mesh ids.
- **Locked properties.** It reads and sets properties the scripting API refuses,
  such as `MeshPart.MeshId` and `CollisionFidelity`.
- **Roblox's own web APIs.** It sends requests to Roblox as the signed-in Studio
  user, through a service Roblox reserves for its own scripts. The APIs Studio
  itself uses, such as the creator inventory, are reachable without an API key.
- **The whole place at once.** A push hands Studio the place in Studio's own binary
  format. 200,000 instances arrive the way they do when Studio opens a place, not
  one script call at a time.
