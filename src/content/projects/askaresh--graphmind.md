---
repo: "askaresh/graphmind"
name: "graphmind"
description: "API-aware MCP server for Microsoft Graph. Grounds AI assistants (Cursor, VS Code Copilot, Claude) in a local, always-fresh index of the entire Graph API via a 3-tier search funnel - so endpoints are never hallucinated."
readmeQualityOk: true
url: "https://github.com/askaresh/graphmind"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "azure", "claude", "cloud-pc", "cursor", "entra-id", "github-copilot", "graph-api", "intune", "llm"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-25T00:29:48Z"
lastCommitAt: "2026-11-07T16:12:21Z"
lastReleaseAt: "2026-06-22T03:01:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["askaresh"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c3b96131d7b84160966c338849c23a2b84060ea97ba963a0222db96980bd528/askaresh/graphmind"
---

# GraphMind

**API-aware MCP server for Microsoft Graph — always fresh, never hallucinated.**

GraphMind solves the core problem with AI + Microsoft Graph: LLMs have a training
cutoff and will hallucinate endpoint paths for APIs released after training.
GraphMind maintains a local, always-fresh index of the entire Graph API and uses a
3-tier funnel to find the correct endpoint for any natural language query.

## Architecture

GraphMind sits between your AI client and Microsoft Graph. The AI never guesses
endpoint paths — it searches a local, always-fresh index first, then executes the
exact endpoint it found.

```mermaid
flowchart TD
    user["Natural language prompt"] --> client["AI client (Cursor / VS Code Copilot)"]
    client -->|"search_graph_api"| funnel["3-tier search funnel"]
    funnel --> schemas["Ranked endpoint schemas injected into AI context"]
    schemas --> pick["AI picks the exact endpoint"]
    pick -->|"call_graph_api"| writeCheck{"Write method?"}
    writeCheck -->|"GET"| exec["Execute against Microsoft Graph / Azure RM"]
    writeCheck -->|"POST / PATCH / PUT / DELETE"| preview["Return preview (confirmed=false)"]
    preview --> approve["User approves in…
