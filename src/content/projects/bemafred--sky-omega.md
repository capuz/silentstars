---
repo: "bemafred/sky-omega"
name: "sky-omega"
description: "Foundation for semantic-aware cognitive agents - W3C-conformant RDF/SPARQL engine"
url: "https://github.com/bemafred/sky-omega"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-05-29T08:01:22Z"
lastCommitAt: "2026-06-28T01:43:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["bemafred"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fc35c00aecaaf9eae6ae875662b62ae5103e694d3c88d67f64bc3e70469233d/bemafred/sky-omega"
discussionCount: 1
---

</div>

# Sky Omega

*A home for AI & Shared Knowledge*

**Current release: [Sky Omega 1.8.9](CHANGELOG.md)** · **Mercury convergence** — one SPARQL execution path ([ADR-047](docs/adrs/mercury/ADR-047-default-path-cutover.md)) and one `[110]` expression evaluator ([ADR-049](docs/adrs/mercury/ADR-049-unified-expression-evaluator.md), `BindExpressionEvaluator` deleted; divergence S2 closed) · Mercury substrate production-validated across the 1.7 line · DrHook substrate-independence reached at 1.8.2 (netcoredbg retired), with the lifecycle triad + console-I/O isolation + 22-tool MCP surface landing at 1.8.3, then **debug-state visualization** — a surface-agnostic model published over a Unix-domain socket to human-launched views ([ADR-012](docs/adrs/drhook/ADR-012-debug-state-surfaces.md) Phases 1–2, dogfooded end-to-end) at 1.8.9 · **three paired Mercury measurements** on the same substrate generation:
- [cycle 10 Phase 3 r4](docs/validations/cycle10-phase3-r4-21b-2026-05-12.md) — **21.3 B full** Wikidata, 23 h 57 m end-to-end (2026-05-13)
- [truthy r1](docs/validations/truthy-r1-2026-05-14.md) — **8.17 B truthy** Wikidata, 14 h 13 m end-to-end (2026-05-14)
- [WGPB step…
