---
repo: "wudahua/MCP_CREO_MechDog"
name: "MCP_CREO_MechDog"
description: "Use MCP to turn Creo into a backend that AI can model against directly: generate editable native feature trees from a single sentence, covering sketches, extrude, revolve, holes, sheet metal, assemblies, drawings, loft, and airfoils. Driven by the official Toolkit, with every step saved, reloaded, and read back for verification. Windows, Creo 9/10/12."
originalDescription: "用 MCP 把 Creo 变成 AI 可直接建模的后端：一句话生成可编辑的原生特征树——草图、拉伸、旋转、孔、钣金、装配、工程图、放样、翼型。官方 Toolkit 驱动，每步保存重载回读验证。Windows，Creo 9/10/12。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wudahua/MCP_CREO_MechDog"
language: "Python"
languages: ["Python", "C"]
languagePcts: [48, 41]
topics: ["ai-agents", "cad", "cpp", "creo", "llm", "mcp", "mechanical-engineering", "model-context-protocol", "parametric-modeling", "ptc"]
stars: 32
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-07T15:26:30Z"
lastCommitAt: "2026-11-23T13:30:32Z"
lastReleaseAt: "2026-10-16T11:14:51Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["xiechangbin", "118119019"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4088562c8d915296db71ced2d7542540434cfb74626691cbde01150539f6591/wudahua/MCP_CREO_MechDog"
---

# MCP_CREO_MechDog 0.39.0

     

Current stable release **0.39.0** (MINOR). Delivers [BUG-170](https://github.com/wudahua/MCP_CREO_MechDog/blob/HEAD/docs/work-items/BUG-170.md), [BUG-166](https://github.com/wudahua/MCP_CREO_MechDog/blob/HEAD/docs/work-items/BUG-166.md), [FEAT-076](https://github.com/wudahua/MCP_CREO_MechDog/blob/HEAD/docs/work-items/FEAT-076.md) and [FEAT-077](https://github.com/wudahua/MCP_CREO_MechDog/blob/HEAD/docs/work-items/FEAT-077.md): after an upgrade or restart, diagnostics for old `-4` sessions and an explicit new-session entry point via `force_new_session`; cross-session recovery deadlock fix, a new `abandon_unknown_recovery`, an adaptive/configurable recovery budget, and `blocking_operation="recovery_pending"`; edge selector `feature` filtering and the `creo_inspect_model(near=...)` proximity query; part JPEG previews hide datum planes, and the update check has a 15 s default budget with an `advisory` flag. The public tool count is still determined by `tool_count` in `creo_capabilities`.
