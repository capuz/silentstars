---
repo: "juspay/olai"
name: "olai"
description: "AI-native tree-based memory system"
readmeQualityOk: true
url: "https://github.com/juspay/olai"
homepage: "http://olai.kolu.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 8
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2026-08-05T15:27:57Z"
lastCommitAt: "2026-08-24T04:21:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 59
maintainers: ["srid"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa655eafdd82174741a2ae639174a4dd82559225d95c7e4d296a29cbaf71be67/juspay/olai"
---

</p>

# olai

An outliner whose file format is a git-reviewable one, and whose editor is a browser and an agent rather than a text buffer.

**[olai.kolu.dev](https://olai.kolu.dev)** — what it is, how to run it, and why.

Outlines are `.olai` files. A vault written before the rename is renamed once, by hand — olai reads the one extension and migrates nothing for you: [the one-liner](https://github.com/juspay/olai/blob/HEAD/docs/format.md#the-outline-format).

A coding agent in a terminal reaches the same tools over HTTP, against a running server. Production (the home-manager user service) binds `127.0.0.1:7714`; `just run` in a worktree asks the OS for a port and writes it to `.olai-dev/url`, so it cannot squat that address:

```json
{
  "mcpServers": {
    "olai": {
      "type": "http",
      "url": "http://127.0.0.1:7714/mcp"
    }
  }
}
```

You reach the same tools from a shell, through that same door — every verb an agent has, under the same name:

```sh
olai surface --url http://127.0.0.1:7714 capture "look into the new cabinets"
olai surface --url http://127.0.0.1:7714 get outlines _olai/Inbox.olai
```

`--url` is required on every call, because a vault is not a thing to…
