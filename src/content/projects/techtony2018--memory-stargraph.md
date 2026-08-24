---
repo: "techtony2018/memory-stargraph"
name: "memory-stargraph"
description: "Your knowledge, mapped as a living constellation. On GBrain, for you AI Agents!"
readmeQualityOk: true
url: "https://github.com/techtony2018/memory-stargraph"
language: "Python"
languages: ["Python"]
languagePcts: [74]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-29T01:35:14Z"
lastCommitAt: "2026-08-24T04:21:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/111ef712756b3c1cfa5b78073baea0840cac262fc93cbb9c07a28461f656e755/techtony2018/memory-stargraph"
---

# Memory Stargraph

</p>

</p>

Memory Stargraph is a local web service for exploring a `gbrain` knowledge base as an interactive star-cloud entity graph.

It is built with Python stdlib plus vanilla HTML/CSS/Canvas JavaScript, so it runs without `npm install`.

## Showcase

### Interactive Stargraph

</p>

### Shared AI Memory Architecture

</p>

[Watch the demo video on YouTube](https://youtu.be/eQ5UJKYMKaA)

## Run

```bash
python3 server.py
```

Optional:

```bash
python3 server.py --host 127.0.0.1 --port 8788
```

The dashboard-managed local service uses the version-controlled launcher
`scripts/automation/start_memory_stargraph_dashboard.zsh`. The launcher sets a
dedicated `GBRAIN_HOME` under the All Things Codex Dashboard state directory,
validates an owner-only `remote_mcp` config and OAuth client secret, and fails
closed when either is missing or unsafe. OAuth values are installed runtime
state only; they are never stored in this repository or Dashboard source.
When this identity is active, private activation reads and writes use the
remote MCP `tools/call` boundary directly with a cached OAuth token and one
serialized request lane. Invalid remote configuration, missing…
