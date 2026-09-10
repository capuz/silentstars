---
repo: "RobertCoop/openscad-mcp"
name: "openscad-mcp"
description: "A Model Context Protocol (MCP) server for OpenSCAD 3D modeling and rendering"
readmeQualityOk: true
url: "https://github.com/RobertCoop/openscad-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 132
forks: 17
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2025-08-28T08:13:52Z"
lastCommitAt: "2026-09-10T08:20:13Z"
lastReleaseAt: "2026-08-05T19:41:05Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 39
maintainers: ["RobertCoop", "dawkacz", "frankhommers"]
openGraphImageUrl: "https://opengraph.githubassets.com/d923fc732d108cf2762b65f01a339f390b92cdc0143eb9e9815936773118e569/RobertCoop/openscad-mcp"
---

# OpenSCAD MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that lets AI
assistants design 3D-printable parts and assemblies in [OpenSCAD](https://openscad.org):
render with a stated scale, measure exact geometry, check assemblies for interference
and clearance, extract holes and features, judge printability, and export. Built with
[FastMCP](https://gofastmcp.com) for Python; OpenSCAD 2021.01 is the supported floor
and dev snapshots are used when present.

## Prerequisites

- **[OpenSCAD](https://openscad.org/downloads.html)** installed on your system
- **[uv](https://docs.astral.sh/uv/getting-started/installation/)** (recommended) or Python 3.10+

## Installation

The server is published on PyPI as `openscad-mcp`, so [uv](https://docs.astral.sh/uv/)
runs it with no clone and no virtualenv: `uvx openscad-mcp`. uv keeps a cached
copy; `uv tool upgrade openscad-mcp` (or `uvx openscad-mcp@latest`) pulls a
new release, and `uvx openscad-mcp@0.6.1` pins one.

### Claude Code

Add the server with a single command:

```bash
claude mcp add openscad --transport stdio -- uvx openscad-mcp
```

Or, if OpenSCAD is not on your PATH:

```bash
claude mcp add…
