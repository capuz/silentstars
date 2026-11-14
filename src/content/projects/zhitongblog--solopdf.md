---
repo: "zhitongblog/solopdf"
name: "solopdf"
description: "Free, ad-free, local-first PDF reader — highlights become Markdown notes that SoloMD can open, search, and git-version. Fillable forms, CJK-solid search, CLI + MCP bundled. Tauri, MIT."
originalDescription: "Free, ad-free, local-first PDF reader — highlights become Markdown notes that SoloMD can open, search, and git-version. Fillable forms, CJK-solid search, CLI + MCP bundled. Tauri, MIT."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zhitongblog/solopdf"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [45, 20]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-05T03:57:22Z"
lastCommitAt: "2026-11-14T10:49:49Z"
lastReleaseAt: "2026-11-12T14:44:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 76
undervaluedScore: 52
maintainers: ["zhitongblog"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a33c5d237461c6c821cb25a24dc197b56598bc9863dd02fcf88fbb82bac342f/zhitongblog/solopdf"
---

# SoloPDF

Website: https://solopdf.doaipm.com · GitHub: https://github.com/zhitongblog/solopdf

Free · ad-free · local-first cross-platform PDF reader. **Highlights are notes**: every highlight you make in a PDF is automatically saved as a companion Markdown file. [SoloMD](https://solomd.app) can open it, RAG can search it, and git can version it.

solo suite members: SoloMD (Markdown) · SoloPDF (PDF). These are two independent apps that interoperate through Markdown files.

## Why

PDF readers on Windows either show ads (Adobe/Foxit/WPS) or make do with Edge.
SoloPDF: opens instantly, zero ads, zero telemetry (update checks can be fully disabled), free forever.

## Core features (v1.0)

- **Highlights → `.annotations.md`**: annotations include page deep links (`solopdf://`). Click one to jump back to the exact position in the original. Anchoring is triple-layered (text fingerprint > page number + coordinates). After the PDF is updated, highlights relocate automatically; if relocation fails, they are greyed out and degrade gracefully, and the body text is never lost.
- **Edit annotations in SoloMD**: the companion file is plain Markdown, and external edits take effect when the…
