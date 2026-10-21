---
repo: "arielshad/3d-asset-server"
name: "3d-asset-server"
description: "3d assets api and mcp"
readmeQualityOk: true
url: "https://github.com/arielshad/3d-asset-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 319
forks: 31
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-04T19:28:37Z"
lastCommitAt: "2026-10-21T17:32:09Z"
status: "newborn"
tags: []
healthScore: 90
undervaluedScore: 23
maintainers: ["github-actions[bot]", "arielshad", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2ee03f9e0134d4bef74c04e5903b333cc80ffe76a0855b251a74c67f0823868/arielshad/3d-asset-server"
discussionCount: 1
---

**3d-asset-server** searches 25 asset sites at once and downloads what you pick, ready to drop
into a game or a website. Use it from a browser, from `curl`, from the command line, or let your AI
assistant drive it over MCP.

> *"I need a low-poly tree pack, a mossy rock material and a sunset HDRI for my Three.js scene."*
>
> Your assistant calls `search_assets` three times, shows you the options with their licences, and
> `download_asset` puts glTF, textures and the HDRI into your project's `assets/` folder.

- **One query, many sources.** Results are merged and ranked, with a status line for every site.
- **Real downloads.** From free sources you get files directly: glTF with its `.bin` and textures,
  PBR maps at the resolution you ask for, HDRIs, or zipped packs (extracted for you).
- **Licence first.** Every result says what licence it has, whether it is free, and whether you
  must credit the author.
- **Honest about what's blocked.** Sites that block bots come back as links to their own search,
  so you still know where else to look.

---

## Contents

- [How it works](#how-it-works)
- [Sources](#sources)
- [Quick start](#quick-start)
- [Web UI](#web-ui) (and [for AI…
