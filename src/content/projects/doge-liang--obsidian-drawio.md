---
repo: "doge-liang/obsidian-drawio"
name: "obsidian-drawio"
description: "Embed, preview and edit drawio diagrams in Obsidian — fully offline."
readmeQualityOk: true
url: "https://github.com/doge-liang/obsidian-drawio"
homepage: "https://obsidian.md/plugins?id=drawio-editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["diagrams", "drawio", "obsidian", "obsidian-plugin", "diagrams-net"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-04T01:19:08Z"
lastCommitAt: "2026-07-12T06:18:25Z"
lastReleaseAt: "2026-07-06T01:52:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 62
maintainers: ["doge-liang"]
openGraphImageUrl: "https://opengraph.githubassets.com/d530e1734239df45843b79255f63406bfaf50791898b94b31d42bb671767a18e/doge-liang/obsidian-drawio"
---

# Drawio for Obsidian

Embed, preview, and edit [draw.io](https://www.drawio.com/) (diagrams.net) diagrams directly in your notes. Previews render fully offline on every platform, and diagrams are stored as readable, diff-friendly XML.

## Highlights

- **Three surfaces, one plugin** — inline `` ```drawio `` code blocks, standalone `.drawio` files (Excalidraw-style: the editor lives right in the file's tab), and `![[file.drawio]]` embeds. All three render live SVG previews in both editing and reading views; click any preview to edit.
- **Offline previews, always** — previews are produced by drawio's own viewer bundled into the plugin: no iframe, no network, on desktop and mobile alike.
- **Offline editor, optionally** — the editor defaults to a bundled, fully offline drawio build served from a local server. Store installs don't include the bundle (~145 MB); install it with one click from the plugin settings, or switch the editor source to Online.
- **Readable, git-friendly storage** — diagrams are saved as uncompressed, pretty-printed XML rather than a compressed blob, so diffs, sync, and version history stay meaningful.
- **Multi-page aware** — multi-page diagrams get a compact…
