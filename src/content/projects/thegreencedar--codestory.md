---
repo: "TheGreenCedar/CodeStory"
name: "CodeStory"
description: "CodeStory is a codebase grounding engine that preindexes code into a knowledge graph and enriches it with semantic context. Paired with coding agents, it results in fewer tokens, fewer tool calls, and remains 100% local."
readmeQualityOk: true
url: "https://github.com/TheGreenCedar/CodeStory"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["ai-agents", "code-graph", "code-intelligence", "code-search", "knowledge-graph", "llm-context", "semantic-search", "static-analysis", "tree-sitter"]
stars: 33
forks: 3
openIssues: 20
closedIssues: 726
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-02-05T22:14:35Z"
lastCommitAt: "2026-07-25T05:31:29Z"
lastReleaseAt: "2026-06-21T21:18:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["TheGreenCedar"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cba540600ce2a6adc2e55b4a3cef1fc7660e04be2e4f5f64ad68bbc84d30fe1/TheGreenCedar/CodeStory"
---

# CodeStory

**A local code map your coding agent can trust.**

CodeStory gives coding agents a durable understanding of the repository in
front of them: files, symbols, call paths, routes, snippets, and search evidence.
Answers stay tied to source locations, and incomplete coverage is reported as a
gap instead of being filled with guesses.

```mermaid
flowchart LR
    Repo["your repository"] --> Map["local code map"]
    Question["your question"] --> Agent["coding agent"]
    Map --> Agent
    Agent --> Answer["cited answer, change plan, or review context"]
```

The released executable includes CodeRankEmbed Q8 and its accelerator engine.
There is no service to start, model to download, port to manage, or retrieval
setup to approve. Source, indexes, and queries stay local by default.

## What it adds

- **Repository grounding:** a compact map of the checkout, its languages,
  components, and important paths.
- **Symbol and impact navigation:** definitions, callers, references, trails,
  routes, and likely tests without repeated whole-tree scans.
- **Broad retrieval:** lexical, semantic, graph, and SCIP evidence combined into
  cited search results and answer packets.
- **Visible…
