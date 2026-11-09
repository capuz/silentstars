---
repo: "enslo/sd-metadata"
name: "sd-metadata"
description: "Read and write generation parameters from AI images (PNG/JPEG/WebP). Supports AUTOMATIC1111, ComfyUI, NovelAI, and 10+ more tools. TypeScript + zero dependencies."
readmeQualityOk: true
url: "https://github.com/enslo/sd-metadata"
homepage: "https://sd-metadata.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-image", "comfyui", "exif", "forge", "image-metadata", "jpeg", "metadata-parser", "novelai", "png", "prompt"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-07T11:35:40Z"
lastCommitAt: "2026-11-09T04:34:25Z"
lastReleaseAt: "2026-01-25T09:35:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 66
maintainers: ["enslo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bd1be8d45ffa53f07d4d324d0237686ba0c0045d3b0c813b445eedce588afaf/enslo/sd-metadata"
---

# sd-metadata

🌐 **[日本語版はこちら](https://github.com/enslo/sd-metadata/blob/HEAD/README.ja.md)**

🔗 **[Live Demo](https://sd-metadata.pages.dev/)**

A TypeScript library to read and write metadata embedded in AI-generated images.
Supports PNG, JPEG, and WebP formats across 20+ generation tools.
Zero dependencies, works in Node.js and browsers.

## Features

- **Multi-format support**: PNG (tEXt / iTXt / eXIf), JPEG (COM / Exif), WebP (Exif), plus MP4 / MOV and WebM / MKV videos (read-only)
- **Simple API**: `parse()`, `write()`, `embed()`, `stringify()` — four functions cover all use cases
- **TypeScript native**: Written in TypeScript with full type definitions included
- **Zero dependencies**: Works in Node.js and browsers without any external dependencies
- **Format conversion**: Seamlessly convert metadata between PNG, JPEG, and WebP
- **Metadata preservation**: Keeps the original metadata structure when converting formats (e.g., PNG → JPEG → PNG retains all original data)
- **Stealth PNGInfo recovery**: Reads metadata hidden in pixel data when the regular metadata has been stripped
- **AI provenance detection**: Identifies images and videos from commercial services (OpenAI,…
