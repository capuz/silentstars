---
repo: "Hanjo92/unity-mcp-ui-layout"
name: "unity-mcp-ui-layout"
description: "Unity MCP UI layout skill and prompt pack for Codex, Claude, and Google Antigravity"
readmeQualityOk: true
url: "https://github.com/Hanjo92/unity-mcp-ui-layout"
homepage: "https://github.com/Hanjo92/unity-mcp-ui-layout"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["claude", "codex", "mcp", "prompt-engineering", "ugui", "ui", "unity", "unity3d", "safe-area", "textmeshpro"]
stars: 18
forks: 5
openIssues: 0
closedIssues: 27
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-09T05:30:31Z"
lastCommitAt: "2026-09-09T08:18:14Z"
lastReleaseAt: "2026-09-09T08:18:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 50
maintainers: ["Hanjo92"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9e5b9e937e75d00ba4dd75e9aecf986bcaee01fcc4f06d92edd8bcfa6556952/Hanjo92/unity-mcp-ui-layout"
---

# Unity MCP UI Layout

Reusable Unity UI workflow rules for `unity-mcp`, packaged first as a Codex skill and then adapted for other LLM platforms.

`unity-mcp`를 사용할 때 Unity UI를 더 안정적으로 만들기 위한 워크플로 규칙 모음입니다. 기본 형태는 Codex 스킬이며, 다른 LLM 플랫폼에서도 사용할 수 있도록 확장되어 있습니다.

Current release / 최신 릴리스: [v0.7.0](https://github.com/Hanjo92/unity-mcp-ui-layout/releases/tag/v0.7.0) · [Changelog / 변경 기록](https://github.com/Hanjo92/unity-mcp-ui-layout/blob/HEAD/CHANGELOG.md)

The repository is built around one core idea: when an LLM creates Unity UI from a mockup, screenshot, structured export, or target resolution, it should first produce a neutral layer-to-layout tree, then use the selected stack's layout, reuse, scaling, and verification mechanisms instead of copying raw pixels.

이 저장소의 핵심 아이디어는 하나입니다. LLM이 목업, 스크린샷, structured export, 목표 해상도를 바탕으로 Unity UI를 만들 때, 먼저 중립 `layer-to-layout tree`를 만들고 선택한 스택의 레이아웃, 재사용, 스케일링, 검증 수단으로 구현해야 한다는 점입니다.

It also assumes three practical defaults: establish top-level region ownership before leaf details, express repeated structures with the selected stack's reusable mechanism, and keep likely single-image resources intact unless runtime behavior requires them…
