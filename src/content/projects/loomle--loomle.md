---
repo: "loomle/loomle"
name: "loomle"
description: "Agent-native Unreal Engine tooling through MCP"
readmeQualityOk: true
url: "https://github.com/loomle/loomle"
homepage: "https://loomle.ai"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["ai", "ai-agent", "ue5", "ue5-plugin", "unreal", "unreal-engine-5", "ai-agents", "blueprint", "developer-tools", "material-editor"]
stars: 10
forks: 2
openIssues: 24
closedIssues: 154
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-01T03:56:20Z"
lastCommitAt: "2026-07-25T06:01:08Z"
lastReleaseAt: "2026-03-07T04:32:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["gao-shaofei", "piruzhaolu"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6ce316597099a82432a7e63af84a13795b07309644260b42f8596b2ff7bc0d9/loomle/loomle"
---

# Loomle

Loomle is an agent-native Unreal Engine integration for reading and changing
complex editor objects through SAL, the Structured Agent Language.

SAL turns Blueprint graphs, Widget trees, Class reflection, Assets, and other
non-text UE state into compact, ordered text that both people and agents can
read, copy, discuss, and patch. It stays faithful to UE: native paths, types,
field names, values, palette actions, compiler diagnostics, and editor
semantics remain native instead of being replaced by a parallel JSON model.

## Why Loomle

Text code already gives agents precise search, references, diffs, and edits.
Unreal assets do not. Loomle supplies that missing text workflow while keeping
the editor and UE APIs as the source of truth.

- Compact SAL Object Text uses fewer tokens than large generic JSON payloads.
- Queries start with summaries and local views instead of downloading an
  entire graph.
- Target-relative stable identity paths make returned Nodes, Pins, Graphs,
  Widgets, and Blueprint objects safe to follow up without kind namespaces.
- Palette and dynamic schema discovery let agents use capabilities that UE
  actually exposes instead of guessing constructors…
