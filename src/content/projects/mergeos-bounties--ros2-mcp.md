---
repo: "mergeos-bounties/ros2-mcp"
name: "ros2-mcp"
description: "ros2-mcp — MCP server for AI agents to inspect and control ROS2"
readmeQualityOk: true
url: "https://github.com/mergeos-bounties/ros2-mcp"
homepage: "https://mergeos.shop"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-agents", "bounty", "devtools", "mcp", "mergeos", "python", "robotics", "ros2"]
stars: 6
forks: 18
openIssues: 16
closedIssues: 23
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-07-12T13:48:45Z"
lastCommitAt: "2026-07-17T06:00:03Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 68
maintainers: ["TUPM96", "key1989han", "slipknoo822-lang"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c51ea719177b15137245f5e211150cecbc599849de5d8c876b6fb3d41f1837/mergeos-bounties/ros2-mcp"
---

# ros2-mcp

**ros2-mcp** is an [MCP (Model Context Protocol)](https://modelcontextprotocol.io) server so AI agents (Grok, Cursor, Claude, …) can **inspect and control ROS2** graphs — topics, nodes, services, TF, actions — without hand-writing every `ros2` CLI call.

**Product:** [mergeos-bounties/ros2-mcp](https://github.com/mergeos-bounties/ros2-mcp)

---

## Install (one command)

### Grok — recommended

```bash
pip install "git+https://github.com/mergeos-bounties/ros2-mcp.git" && grok plugin install mergeos-bounties/ros2-mcp --trust
```

This installs the **Python CLI** (`ros2-mcp`) and the **Grok plugin** (skill + MCP server from `.mcp.json`).

Check:

```bash
ros2-mcp version
ros2-mcp doctor
ros2-mcp demo
grok plugin list
grok mcp list
```

Local clone:

```bash
git clone https://github.com/mergeos-bounties/ros2-mcp.git
cd ros2-mcp
pip install -e ".[dev]"
grok plugin install . --trust
```

### Other agents (stdio MCP)

After `pip install "git+https://github.com/mergeos-bounties/ros2-mcp.git"`, point any MCP host at:

| Field | Value |
| --- | --- |
| command | `ros2-mcp` |
| args | `["serve"]` |
| env | `ROS2_MCP_MODE=mock` |

**Claude Desktop** — merge…
