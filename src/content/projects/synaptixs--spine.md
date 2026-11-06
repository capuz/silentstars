---
repo: "synaptixs/spine"
name: "spine"
description: "Spine — governed, provenance-grounded autonomous software delivery (installs as agent-orchestrator)."
readmeQualityOk: true
url: "https://github.com/synaptixs/spine"
homepage: "https://test.pypi.org/project/agent-orchestrator/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agents", "autonomous-agents", "claude", "code-generation", "devtools", "llm", "mcp", "python", "sdlc", "temporal"]
stars: 13
forks: 7
openIssues: 8
closedIssues: 13
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2026-06-26T13:01:38Z"
lastCommitAt: "2026-11-06T12:18:13Z"
lastReleaseAt: "2026-06-28T16:55:04Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 52
maintainers: ["github-actions[bot]", "mbinder45", "ssmith-synaptixs"]
openGraphImageUrl: "https://opengraph.githubassets.com/21e4a74f71705f7063c8841d1f15dfcc9b339db51d13208c83d04caf6054103d/synaptixs/spine"
discussionCount: 3
---

# Spine

**Turn requirements into reviewed, tested pull requests, with a human in control.**

Spine reads requirements from Confluence, Notion, Markdown or
[OpenSpec](https://openspec.dev), builds a deterministic graph of your target repo,
and generates code grounded in its existing structure and conventions. You can
inspect the graph and a build plan before spending model tokens, build locally,
then choose when to push a pull request for human review.

The product is **Spine**, its package is **`synaptixs-spine`**, and its command is
**`orchestrator`**. Comprehension supports fourteen front-ends: Python, Java, TypeScript,
JavaScript, C#, C, C++, Go, Rust, PHP, Perl, Kotlin and SQL — plus a Gradle reader that turns `.kts`
build scripts into the module graph an Android app is assembled from — with the
matching parser extras installed.

```bash
uv tool install synaptixs-spine
```

[SETUP.md](https://github.com/synaptixs/spine/blob/main/SETUP.md) owns prerequisites,
extras, credentials and troubleshooting. The base install is enough for the
Python worked example; add `[sdlc]` for builds or `[all]` for every language parser.
The agent plugins need no install: they start Spine through…
