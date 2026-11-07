---
repo: "jonashertner/opencaselaw"
name: "opencaselaw"
description: "Open Swiss legal corpus + MCP server: 1M+ court decisions (1875–today), 21k laws, 10M-edge citation graph, 42 MCP tools. CC0 data, MIT code. Live at mcp.opencaselaw.ch"
readmeQualityOk: true
url: "https://github.com/jonashertner/opencaselaw"
homepage: "https://opencaselaw.ch/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai-agents", "caselaw", "citation-graph", "dataset", "legal-data", "legal-research", "mcp", "mcp-server", "model-context-protocol", "open-data"]
stars: 76
forks: 16
openIssues: 20
closedIssues: 44
watchers: 1
contributors: 9
recentReleases: 9
createdAt: "2026-02-09T08:19:54Z"
lastCommitAt: "2026-11-07T13:55:18Z"
lastReleaseAt: "2026-09-06T17:34:17Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["jonashertner"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1153374430/05039014-5219-4241-bace-989ec6d708bb"
discussionCount: 0
---

# OpenCaseLaw

Open Swiss case law and legislation for legal research and AI.

**1M+ decisions · all 26 cantons · 1875–today · citation graph · MCP + REST + CLI + Parquet · CC0 data · MIT code**

[Try the search](https://opencaselaw.ch) ·
[Chat with your AI](#connect-in-30-seconds) ·
[Automate research](https://github.com/jonashertner/opencaselaw/blob/HEAD/docs/research-cli.md) ·
[Download the dataset](#2-download-the-dataset) ·
[API documentation](https://mcp.opencaselaw.ch/api/docs)

## What you can do

- Find Swiss decisions across federal and cantonal courts, in German, French and Italian.
- Trace citations between cases and identify the leading decisions on a question.
- Query case law and legislation from Claude, ChatGPT-compatible clients, or any MCP client.
- Save repeatable research scripts, inspect citation resolution, and preserve selected evidence with the [research CLI](https://github.com/jonashertner/opencaselaw/blob/HEAD/docs/research-cli.md).
- Download the corpus for legal NLP, retrieval and graph research.

## Connect in 30 seconds

```json
{
  "mcpServers": {
    "opencaselaw": {
      "url": "https://mcp.opencaselaw.ch/mcp"
    }
  }
}
```

No sign-up, no API…
