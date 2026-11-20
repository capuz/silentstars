---
repo: "LHMisme420/mcp-authscan"
name: "mcp-authscan"
description: "Security review tooling for Model Context Protocol deployments. Probes a live server's OAuth authorization surface and records the request and response behind every finding, or scans a repository's source. Reports name what was not tested."
readmeQualityOk: true
url: "https://github.com/LHMisme420/mcp-authscan"
homepage: "https://mcp-authscan.replit.app/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 22]
topics: ["mcp", "model-context-protocol", "oauth", "python", "security", "security-scanner"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-10-16T15:53:19Z"
lastCommitAt: "2026-11-20T12:02:18Z"
lastReleaseAt: "2026-11-19T13:14:53Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["claude", "replit-agent", "LHMisme420"]
openGraphImageUrl: "https://opengraph.githubassets.com/68122d7a54d8d837392ec6f463faf16b8d9a7aa6f612100128847f58e9f88f63/LHMisme420/mcp-authscan"
---

# VATA, MCP Security Scanner

Auth scanner for live MCP servers.

## What this tests that other scanners do not

mcp-authscan asks whether an MCP endpoint requires a credential at all, then grades what it finds instead of just listing it.

Same local fixture, two tools, both scanners run against it. Cisco AI Defense mcp-scanner with its yara analyzer flagged read_file HIGH and greet SAFE. mcp-authscan flagged the same tool, plus a resource pointing at file:///etc/passwd and an endpoint accepting calls with no credential.

Current report contract: verdict-v3 schema version 3, probe set 2026.11.19.3, calibration 2026.11.07.1. Every zero-auth finding carries severity_basis naming which grade applied. See [single-scan integrity and exact serialization](https://github.com/LHMisme420/mcp-authscan/blob/HEAD/docs/report-hash-v3.md).

Against the field: 16,072 registry endpoints walked, 57.1% of the 14,339 that speak MCP completed a handshake with no credential.

VATA checks the security posture of Model Context Protocol deployments, in two modes.
