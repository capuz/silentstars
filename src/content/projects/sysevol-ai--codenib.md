---
repo: "sysevol-ai/CodeNib"
name: "CodeNib"
description: "A multi-view data system for serving repository context to coding agents."
readmeQualityOk: true
url: "https://github.com/sysevol-ai/CodeNib"
homepage: "https://codenib.ai"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["code-search", "coding-agents", "repository-context", "code-intelligence", "data-systems", "incremental-indexing"]
stars: 84
forks: 3
openIssues: 5
closedIssues: 97
watchers: 2
contributors: 16
recentReleases: 4
createdAt: "2025-03-09T06:59:13Z"
lastCommitAt: "2026-08-22T04:08:03Z"
lastReleaseAt: "2026-08-21T11:28:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["fishmingyu", "Cyoyuu", "MarinaMackay"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/945333674/f0551a8d-6d20-4421-88ac-573123f26c2a"
---

<h1>Searchable codebase wikis and context for coding agents</h1>
  <p>
    Point it at any repo, get a searchable Wiki and an MCP server for your coding agent.
  </p>
  <p>
  </p>
  <p>
    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
    &nbsp;&middot;&nbsp;
  </p>
  <p>
  </p>
</div>

```bash
python -m pip install "codenib[graph,mcp]"
codenib codegraph init /path/to/your/repo
```

That one command detects the repository languages, installs the pinned
package-level graph providers it can manage, builds BM25 plus a source-linked
symbol graph, and registers the resulting MCP server with installed Codex and
Claude Code clients. It is local, open source, requires no model or cloud, and
does not write configuration or indexes into the target repository.

## System Architecture

| Layer | Responsibility |
|---|---|
| View compiler | Chunk source and materialize BM25, dense, graph, and navigation views; reuse current artifacts and atomically rebuild affected views |
| View manifest | Record repository identity, source fingerprint, builder profile, capabilities,…
