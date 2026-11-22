---
repo: "KazeKaze93/sd-webui-style-organizer"
name: "sd-webui-style-organizer"
description: "A grid/gallery-based style selector extension for all major Stable Diffusion WebUI builds."
readmeQualityOk: true
url: "https://github.com/KazeKaze93/sd-webui-style-organizer"
language: "TypeScript"
languages: ["TypeScript", "Python", "JavaScript"]
languagePcts: [48, 26, 24]
topics: ["ai", "categorization", "css", "csv-parser", "extension", "forge", "gallery", "gradio", "grid", "javascript"]
stars: 42
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2026-02-14T12:26:40Z"
lastCommitAt: "2026-11-22T11:53:33Z"
lastReleaseAt: "2026-10-28T08:29:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["KazeKaze93"]
openGraphImageUrl: "https://opengraph.githubassets.com/47a4329371b4f2bdec7115041b9316c1e01398bffe169158d6eb619ef5c6ff81/KazeKaze93/sd-webui-style-organizer"
discussionCount: 2
---

# Style Grid for Stable Diffusion WebUI (Forge, reForge, A1111)

Style Grid replaces the default style dropdown with a fast, visual interface for browsing, selecting, and applying styles in Stable Diffusion WebUI hosts that load extension `javascript/*.mjs` as ES modules (Forge, reForge, and AUTOMATIC1111 — see **Requirements**).

It supports:
- category-based browsing
- source-aware filtering
- deduplicated All Sources view with source picker
- favorites and recent styles
- **LoRA cards** in a dedicated **🧬 LoRA** sidebar view (scanned from disk, read-only)
- drag reorder of selected styles
- presets, backup, import/export
- thumbnail generation/upload and cleanup tools
- optional CivitAI title enrichment for LoRAs (manual fetch)

See `CHANGELOG.md` for full release history.

---

## Requirements

**Minimum WebUI / Forge for this extension:** builds that load extension `javascript/*.mjs` as ES modules (`<script type="module">`).

| Host | Minimum |
|------|---------|
| **AUTOMATIC1111** `stable-diffusion-webui` | **1.1.0** and later (`v1.1.0`) |
| **Forge / reForge** | Any release (loader inherited from A1111; present from Forge’s first commit) |
