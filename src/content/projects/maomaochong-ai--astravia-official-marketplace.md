---
repo: "maomaochong-ai/astravia-official-marketplace"
name: "astravia-official-marketplace"
description: "open-astravia marketplace plugin repository, where the plugins I usually develop are kept."
originalDescription: "open-astravia市场插件仓库，平时开发的插件都在这里。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/maomaochong-ai/astravia-official-marketplace"
homepage: "https://www.astravia.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-01T12:12:48Z"
lastCommitAt: "2026-11-07T13:54:14Z"
lastReleaseAt: "2026-10-08T15:25:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 68
maintainers: ["maomaochong-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/064a410adba3418a667b557a6c232594032b13102c42538abc7e2a575d95ee0a/maomaochong-ai/astravia-official-marketplace"
---

# Astravia Official Marketplace

Official ability marketplace for the Astravia desktop application's GitHub ability source.

The catalog includes document skills, Notion, Cloudflare, Xiaohongshu, X API and
[Zhihu Research](https://github.com/maomaochong-ai/astravia-official-marketplace/blob/HEAD/abilities/bundles/zhihu-research/README.md). Zhihu Research combines a research
guide with a separately installable search connection, using `klarkxy/zhihu-search` without
modifying its Python implementation. Its MCP requires uv on PATH and a Zhihu Access Secret;
Astravia collects the secret during installation. This is not a zero-runtime-dependency integration.

The Feishu ability is a CLI Provider plugin. Enabling it asks Desktop to probe and, when needed,
install the official `@larksuite/cli`; its detail-page slot shows the real lifecycle and turns the
official CLI's opaque setup URL into a QR code. Agent work still goes through the existing shell and
the CLI's bundled skills—there is no Astravia Action, MCP server or replacement Agent tool in between.

The Notion ability connects directly to Notion's official hosted MCP endpoint. Users install it and
complete browser authorization for…
