---
repo: "pete-builds/mcp-unifi"
name: "mcp-unifi"
description: "Safety-first MCP server for self-hosted UniFi. 57 Network + 11 Protect + 18 Access tools, dry-run previews, JSONL audit log, composite rollback. Multi-site. Stdio + Streamable HTTP."
readmeQualityOk: true
url: "https://github.com/pete-builds/mcp-unifi"
homepage: "https://pete-builds.github.io/mcp-unifi/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["docker", "fastmcp", "homelab", "mcp", "model-context-protocol", "python", "ubiquiti", "udm", "unifi", "ucg-fiber"]
stars: 31
forks: 7
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-02T03:20:09Z"
lastCommitAt: "2026-11-09T04:34:42Z"
lastReleaseAt: "2026-05-25T16:26:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 45
maintainers: ["dependabot[bot]", "pete-builds", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e3998f5da44d75a70495c288780270893fcb95f6d7a95c68df1286258024f78/pete-builds/mcp-unifi"
discussionCount: 1
---

# mcp-unifi

**Safety-first MCP server for self-hosted UniFi. Dry-run previews, JSONL audit log, composite rollback. Network + Protect + Access.**

An [MCP server](https://modelcontextprotocol.io/) built around the assumption that LLM-driven infrastructure calls need guardrails. Every destructive tool accepts `dry_run=True` and returns the predicted change set without writing. Composite tools (`create_iot_network`, `create_guest_network`, `provision_homelab_service`, `provision_camera`) capture pre-state and roll back applied steps on partial failure. Every call — dry-run or real — lands in a JSONL audit log with secrets scrubbed; the included `mcp-unifi-replay` CLI can re-issue a log against a fresh controller.

Beyond the safety substrate: **Network** tools for devices, AP radio tuning, VLANs, WLANs, firewall, switch ports, port forwards, DHCP reservations, AP groups, observability, Threat Management / IDS-IPS, Honeypot, and Teleport VPN, plus opt-in **Protect** (cameras, motion events, smart detections, recording config) and **Access** (doors, credentials, visitors, badge events, hubs / readers). Every tool accepts a `controller` parameter so one server instance manages…
