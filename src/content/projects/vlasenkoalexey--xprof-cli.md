---
repo: "vlasenkoalexey/xprof-cli"
name: "xprof-cli"
description: "CLI-first TPU/GPU profile analysis for AI agents (xprof/openxla) — roofline, HLO, Pallas kernel/LLO tools; also ships an MCP server"
readmeQualityOk: true
url: "https://github.com/vlasenkoalexey/xprof-cli"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "gpu", "mcp", "model-context-protocol", "pallas", "profiling", "tpu", "xprof"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-15T05:09:18Z"
lastCommitAt: "2026-07-13T06:37:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 33
maintainers: ["vlasenkoalexey"]
openGraphImageUrl: "https://opengraph.githubassets.com/e20fa5c477dce3c9586266129487162373e9181889cf2cbc38169c1ba7c93f98/vlasenkoalexey/xprof-cli"
---

# 🛠️ XProf CLI

CLI-first TPU/GPU profile analysis for AI agents and humans — analyze
JAX / PyTorch-XLA / TensorFlow profiles via the open-source
[xprof](https://github.com/openxla/xprof) profiler. **Also ships an MCP
server** for assistants that prefer structured tools (Claude Code, Gemini,
Cursor, etc.).

> **Renamed from `xprof-mcp`** (2026-07). Same repo, full history preserved;
> GitHub redirects all old URLs, so existing clones, submodules, and MCP
> client configs keep working unchanged. The MCP server is retained as a
> fully supported frontend — but the **CLI is the recommended interface**:
> it needs no running server, no MCP wiring, picks up new profiles on every
> invocation, and works identically from any agent framework that can run
> a shell command.

Tools read `.xplane.pb` traces and XLA/LLO dump directories directly from
disk (in-process conversion); a locally running `xprof` HTTP server is only
needed for the interactive trace-viewer UI, not for analysis.

**See also:** [TPU Performance Optimization Guide](https://github.com/vlasenkoalexey/xprof-cli/blob/HEAD/docs/TPU_OPTIMIZATION.md) — practical guide covering the roofline model, common gotchas (dimension…
