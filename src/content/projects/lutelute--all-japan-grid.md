---
repo: "lutelute/All-Japan-Grid"
name: "All-Japan-Grid"
description: "Open Japanese power grid geographic topology from OpenStreetMap"
readmeQualityOk: true
url: "https://github.com/lutelute/All-Japan-Grid"
homepage: "https://lutelute.github.io/All-Japan-Grid/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 6
forks: 0
openIssues: 29
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-03-03T18:39:46Z"
lastCommitAt: "2026-08-30T00:42:54Z"
lastReleaseAt: "2026-08-27T12:51:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 80
undervaluedScore: 51
maintainers: ["lutelute"]
openGraphImageUrl: "https://opengraph.githubassets.com/78fe208c6e0573b4f447b46d626866a3d30eb2bfe40e974c0bdc28b1707c6fc0/lutelute/All-Japan-Grid"
---

</p>

# All-Japan-Grid

Open Japanese power grid **geographic topology** dataset, automatically constructed from OpenStreetMap — then **scored against utility ground truth**.
10 regions, 40,000+ transmission lines, 7,000+ substations, 19,000+ power plants. Corridor-usage rank correlation against TEPCO's published per-line flows reaches **interior Spearman ρ = 0.721** — a capacity/topology proxy; the AC power flow solved on synthetic loads correlates at **ρ ≈ 0.46 (interior) / 0.60 (trunk)**.

OpenStreetMap から機械的に抽出し、**実測値と突合せ検証**した、日本全国の送電網 **地理トポロジ** データセットです。
10 地域、送電線 40,000 本超、変電所 7,000 箇所超、発電所 19,000 箇所超。東京電力の公開する線路別潮流との回廊使用率の順位相関（容量・トポロジの代理指標）は **内部 Spearman ρ = 0.721**。合成負荷で解いた AC 潮流の相関は **ρ ≈ 0.46（内部）/ 0.60（基幹）** です。

**Live Map / ライブマップ:** https://lutelute.github.io/All-Japan-Grid/
**SubSLD Viewer / 変電所単線結線ビュー:** https://lutelute.github.io/All-Japan-Grid/subsld.html

---

## SubSLD法 — Substation Single-Line Diagrams / 変電所単線結線ビュー *(v1.8.0)*

Every substation now carries an **evidence-paired figure**: GeoPane (site outline,
real OSM way geometry and terminal-binding markers over GSI aerial photography)
× SLDPane (busbar sections, circuit-count strokes, direction arrows,…
