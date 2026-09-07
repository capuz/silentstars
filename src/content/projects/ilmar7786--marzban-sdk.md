---
repo: "Ilmar7786/marzban-sdk"
name: "marzban-sdk"
description: "Fully typed and implementing all marzban methods"
readmeQualityOk: true
url: "https://github.com/Ilmar7786/marzban-sdk"
homepage: "https://ilmar7786.github.io/marzban-sdk/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 25
forks: 3
openIssues: 7
closedIssues: 35
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-28T16:20:51Z"
lastCommitAt: "2026-09-07T08:35:08Z"
lastReleaseAt: "2025-05-05T09:27:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 64
maintainers: ["Ilmar7786", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01175e497fa1c0fbb6a3262f4b70997288a82043970d3cf3517ee689e4d32d4c/Ilmar7786/marzban-sdk"
discussionCount: 2
---

# MarzbanSDK

**A TypeScript toolkit for the [Marzban](https://github.com/Gozargah/Marzban) API.**

[**Documentation**](https://ilmar7786.github.io/marzban-sdk) · [**SDK**](https://github.com/Ilmar7786/marzban-sdk/blob/HEAD/packages/sdk) · [**MCP Server**](https://github.com/Ilmar7786/marzban-sdk/blob/HEAD/packages/mcp)

</div>

---

One TypeScript SDK for Marzban, and everything built on top of it. Fix a
bug or add an endpoint in the SDK, and the MCP server, the CLI, and every app
built on it get it for free.

## How it fits together

```mermaid
flowchart LR
    Panel(["Marzban Panel"])
    SDK["marzban-sdk"]
    MCP["marzban-mcp<br/>MCP server"]
    CLI["marzban-cli<br/>CLI · WIP"]
    App["Your app<br/>Node · Bun · Deno · Browser"]
    Agents(["Claude · Cursor · any MCP client"])

    Panel <--> SDK
    SDK --> MCP --> Agents
    SDK --> CLI
    SDK --> App
```

The SDK talks to your Marzban panel. The MCP server and CLI are just clients
of that same SDK — same auth, same retries, same typed errors — so they never
drift from each other or from your own code.

## Packages

| Package                          | npm                                                        | Docker…
