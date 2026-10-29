---
repo: "AgamiAI/agami-core"
name: "agami-core"
description: "The trust layer between AI and your data. Turns your database schema - messy joins, undocumented tables,  into a governed semantic model so AI answers with correct SQL and a receipt on every answer. Run it locally, or self-host a shared team server with Docker."
readmeQualityOk: true
url: "https://github.com/AgamiAI/agami-core"
homepage: "https://www.agami.ai"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["analytics", "business-intelligence", "claude-skills", "context-layer", "context-layer-for-ai", "mcp", "nl2sql", "semantic-layer", "text-to-sql"]
stars: 29
forks: 1
openIssues: 57
closedIssues: 112
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-06T04:45:23Z"
lastCommitAt: "2026-10-29T05:49:59Z"
lastReleaseAt: "2026-07-10T13:27:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 40
maintainers: ["vishalkalbi27", "ashwin-agami"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb4859ae4ad13667b184eb0f735153f6a3bdb14935bf8bc9403f8ffdbd50527e/AgamiAI/agami-core"
discussionCount: 1
---

**agami-core** is the trust layer between an AI agent and your database — a governed, self-improving semantic model that enforces correct joins, signed-off metric definitions, and a full audit receipt on every answer. Same question, same answer, every time. It builds itself from your live schema, messy or clean. The rules live in the model, not the prompt.

Real enterprise schemas have thousands of tables, mostly undocumented, with columns named `col_47` and three definitions of "revenue". That's the problem this solves.

## Get started in 2 minutes

In the **Claude Code CLI**:

```bash
/plugin marketplace add AgamiAI/agami-core
/plugin install agami-core@agami
/agami-connect sample          # zero setup: no database, no credentials
who are the top 5 customers by total spend?
```

> **In VS Code or Cursor**, the two `/plugin …` commands above don't work from the chat input —
> type `/plugin` to open the **Manage Plugins** dialog and add the marketplace + install the plugin
> there instead (see [Install](#install)). The `/agami-connect` line and everything after it work the
> same everywhere.

That last line returns a **governed answer with a receipt** (the exact SQL, the joins…
