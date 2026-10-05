---
repo: "buildkite/buildkite-mcp-server"
name: "buildkite-mcp-server"
description: "Official MCP Server for Buildkite."
readmeQualityOk: true
url: "https://github.com/buildkite/buildkite-mcp-server"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["buildkite", "mcp-server"]
stars: 54
forks: 38
openIssues: 2
closedIssues: 19
watchers: 6
contributors: 34
recentReleases: 0
createdAt: "2025-04-08T21:28:47Z"
lastCommitAt: "2026-10-05T10:47:24Z"
lastReleaseAt: "2025-07-02T22:37:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 58
maintainers: ["nethsix", "halogenandtoast", "mcncl"]
openGraphImageUrl: "https://opengraph.githubassets.com/75b6aec647cbfb35b8b5a4ffb1393e773c3adc949679646d8ee9f3fa10a2fca7/buildkite/buildkite-mcp-server"
---

# buildkite-mcp-server

> **[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server exposing Buildkite data (pipelines, builds, jobs, tests) to AI tooling and editors.**

Full documentation is available at [buildkite.com/docs/apis/mcp-server](https://buildkite.com/docs/apis/mcp-server).

---

## Comparing builds

The read-only `compare_builds` tool in the `investigations` toolset answers questions such as “What changed since this build last worked on main?” Supply `org_slug`, `pipeline_slug`, and the target `build_number`. It selects the most recently created earlier build that is currently passed on the same pipeline and exact branch. It does not require that the baseline had already passed when the target started. Supply `baseline_build_number` to compare against a specific build in that pipeline instead, including a failed build or one on another branch.

The response identifies the baseline and selection rule, counts outcomes across all jobs, and returns up to 100 job comparisons, prioritizing newly failing, recovered, and still-failing steps. Matching uses step keys, job type, matrix values, and parallel index/total. When both jobs lack keys, it…
