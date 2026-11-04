---
repo: "bearing-research/strata"
name: "strata"
description: "Strata is a notebook your coding agent can drive, and everything it computes stays."
readmeQualityOk: true
url: "https://github.com/bearing-research/strata"
homepage: "https://bearingresearch.com/strata/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["agent-tools", "content-addressed", "notebook", "orchestration", "provenance", "tui", "vue", "lineage"]
stars: 5
forks: 1
openIssues: 5
closedIssues: 60
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2025-12-21T03:30:09Z"
lastCommitAt: "2026-11-04T13:04:45Z"
lastReleaseAt: "2026-10-07T20:30:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 86
maintainers: ["fangchenli", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f629f2b6c065f811f4847198fd1d9348aa189c6b50524d4d8ebb3c89e448dbd7/bearing-research/strata"
---

# Strata

**Strata is a notebook your coding agent can drive, and everything it computes stays.**

Coding agents explore by writing throwaway scripts: `python -c`, files in
`/tmp`, gone by the next session. Point one at Strata and the work lands in a
notebook instead. Every result is cached by what produced it, every cell
records who wrote it, and you can watch the whole thing in your browser while
the agent works.

*An agent adds and runs cells through the `strata` CLI while the browser on the
same session updates. Captured from a real run, not a mock-up.*

## Try it

You need [uv](https://docs.astral.sh/uv/) 0.8 or newer and
[Claude Code](https://claude.com/claude-code) (or another MCP client).

```bash
uv tool install "strata-notebook[mcp,tui]"

strata agent ./my-notebook      # terminal 1: server, session and a live viewer
cd ./my-notebook && claude      # terminal 2: the agent drives the notebook
```

Ask the agent for an analysis and watch the cells arrive. Open
<http://localhost:8765> to follow along in the browser, or to take over and edit.

## Two ways an agent uses it

**The notebook is the deliverable.** `strata agent` scaffolds the notebook,
starts the server, and…
