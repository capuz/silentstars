---
repo: "mavaali/daftari"
name: "daftari"
description: "An open-source, multi-user knowledge vault exposed to AI agents via an MCP server."
readmeQualityOk: true
url: "https://github.com/mavaali/daftari"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 26
closedIssues: 97
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-17T19:37:18Z"
lastCommitAt: "2026-10-31T02:00:30Z"
lastReleaseAt: "2026-05-21T02:39:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 55
maintainers: ["mavaali", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/02d02d8f38199a5f96ce30ef039d6c72573e57d2fe55b43c0b35e24fe9b22043/mavaali/daftari"
discussionCount: 0
---

# Daftari

**Durable, inspectable memory for AI agents.** Daftari exposes a markdown vault
over the Model Context Protocol (MCP), then adds the controls an agent needs to
use that vault without flattening its history: provenance, supersession,
staleness, open contradictions, access control, and Git-backed writes.

The model is replaceable. The memory stays yours: plain files on disk, readable
without Daftari and portable across MCP clients.

*Daftari* (دفتری) is Urdu for a ledger-keeper. The model is deliberate: a
ledger records corrections instead of erasing them, and becomes more useful as
its cross-referenced history accumulates.

```bash
npx daftari --init ./my-vault
```

## Choose your path

| I want to… | Start here |
|---|---|
| Create a vault and connect an MCP client | [Five-minute quickstart](#five-minute-quickstart) |
| Adopt an Obsidian vault or existing markdown wiki | [Adopt existing notes](https://github.com/mavaali/daftari/blob/HEAD/docs/adoption.md) |
| See how knowledge compounds instead of being repeatedly retrieved | [Worked example](https://github.com/mavaali/daftari/blob/HEAD/docs/worked-example.md) |
| Run the curation loop | [Curation…
