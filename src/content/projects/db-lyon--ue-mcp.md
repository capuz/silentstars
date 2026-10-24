---
repo: "db-lyon/ue-mcp"
name: "ue-mcp"
description: "Complete Unreal Engine development toolkit exposed as MCP tools."
readmeQualityOk: true
url: "https://github.com/db-lyon/ue-mcp"
homepage: "https://ue-mcp.com/"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [55, 43]
topics: ["ai", "mcp-server", "ue5", "ue5-plugin", "unreal-engine", "blueprint", "game-development", "model-context-protocol"]
stars: 447
forks: 69
openIssues: 35
closedIssues: 1046
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2026-02-24T22:13:00Z"
lastCommitAt: "2026-10-24T08:20:47Z"
lastReleaseAt: "2026-03-25T17:06:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 30
maintainers: ["db-lyon"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f79c3a111ee18f5270f20c6eb80a59e646c9150aa01bd3965423fe4031ac13a/db-lyon/ue-mcp"
fundingLinks: ["GITHUB:https://github.com/db-lyon", "CUSTOM:https://ue-mcp.com"]
---

# UE-MCP

**Unreal Engine Model Context Protocol Server** - gives AI assistants deep read/write access to the Unreal Editor through 30 category tools covering 2100+ actions, plus a YAML flow engine for multi-step workflows and an npm plugin system for extending the surface.

That total is 1270+ actions of ue-mcp's own plus Epic's entire native AI Toolset Registry: on UE 5.8+ its 830 official Unreal tools are called in-process and surfaced as `epic_*` actions in the matching category, Sequencer in `animation`, PCG in `pcg`, static meshes in `asset`.

```mermaid
flowchart LR
    AI[AI Assistant] -->|stdio| MCP[MCP Server<br/>TypeScript / Node.js]
    MCP -->|WebSocket<br/>JSON-RPC| Plugin[C++ Bridge Plugin<br/>inside Unreal Editor]
    Plugin -->|UE API| Editor[Editor Subsystems]
    MCP -->|direct fs| FS[Config INI<br/>C++ Headers<br/>Asset Listing]
```

Blueprints, materials, levels, actors, animation, VFX, landscape, PCG, foliage, audio, UI, physics, navigation, AI, StateTree, GAS, networking, sequencer, build pipeline - all programmable through natural language.

Filesystem reads (INI config, C++ headers, asset listing) work with the editor closed, so an agent can explore the…
