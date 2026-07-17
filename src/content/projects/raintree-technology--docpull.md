---
repo: "raintree-technology/docpull"
name: "docpull"
description: "Local-first context dependency manager: sync docs, diff changes, lock sources, and export cited packs for AI agents."
readmeQualityOk: true
url: "https://github.com/raintree-technology/docpull"
homepage: "https://docpull.raintree.technology/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-training-data", "developer-tools", "documentation", "markdown", "python", "web-scraping", "cli", "crawler", "llm", "mcp"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2025-11-07T22:03:11Z"
lastCommitAt: "2026-07-17T05:59:41Z"
lastReleaseAt: "2026-06-04T17:55:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["admin-raintree", "zacharyr0th", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/281e8323e772d7b9ba9c940aeec44aed8823db7e7f27f66471d7c6a93fbc4d74/raintree-technology/docpull"
---

src="https://raw.githubusercontent.com/raintree-technology/docpull/main/docs/launch-assets/logo-square-light-400.png"
    alt="DocPull"
    width="128"
  />
</p>

# docpull

**Context dependencies for AI agents. Browser-free by default.**

DocPull is a local-first dependency manager for AI context. Define the public
web sources an agent depends on, sync them into cited context packs, diff what
changed, and export reproducible context for Cursor, Claude, OpenAI,
LlamaIndex, LangChain, MCP clients, and RAG pipelines.

Architecturally, DocPull is the evidence and acquisition engine: it acquires,
versions, cites, hashes, and replays evidence. Downstream products own
scheduling, review, approved claims, legal conclusions, and notifications. See
the [architecture decision](https://github.com/raintree-technology/docpull/blob/HEAD/docs/adr/0001-evidence-acquisition-engine.md).

The core workflow is a `docpull.yaml` plus a `.docpull/context.lock.json`,
similar in spirit to code dependency manifests and lockfiles:

```bash
docpull init my-agent-context
docpull add stripe react postgres
docpull install
docpull deps
docpull sync
docpull diff
docpull export context-pack --target openai
```…
