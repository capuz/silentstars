---
repo: "foreverworks/mcps"
name: "mcps"
description: "MCP servers for Google Workspace, Notion, Romanian e-invoicing and company registers, open banking, invoicing, domains, Expo and more, on one shared toolkit"
readmeQualityOk: true
url: "https://github.com/foreverworks/mcps"
homepage: "https://foreverworks.github.io/mcps/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["workloop", "anaf", "app-store-connect", "bitwarden", "bnr", "e-factura", "enable-banking", "expo", "google-workspace", "mcp"]
stars: 5
forks: 1
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-23T02:41:21Z"
lastCommitAt: "2026-11-24T14:09:19Z"
lastReleaseAt: "2026-11-16T06:25:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 58
maintainers: ["horatiuvlad", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b9f8a9b2442796071d12dcc2a02928da0385aa7f6ec623d4602996ecbaf5cff/foreverworks/mcps"
---

# mcps

**MCP servers that let an AI assistant do a company's everyday work.** Most are
for services people use anywhere, such as Google Workspace, Notion, Bitwarden,
Porkbun, Expo, the app stores and European banks; a second line is for
companies in Romania, to file with ANAF, follow the trade register, invoice
through Oblio and read the National Bank's rates.

Each server connects an MCP client, such as Claude Code, Claude Desktop, VS Code
or Cursor, to one service. They are built on one toolkit, so every tool says
what it can change: `read` (it changes nothing), `write` (it changes something
in your account) or `money` (it moves money, makes or unmakes a legal or fiscal
document, or commits you in a comparable way, such as a bank consent). Your
client asks you before each `money` call.

[foreverworks.github.io/mcps](https://foreverworks.github.io/mcps/) presents the servers by who they are for, each with its documentation.
