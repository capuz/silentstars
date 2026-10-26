---
repo: "step-security/dev-machine-guard"
name: "dev-machine-guard"
description: "Scan your dev machine for AI agents, MCP servers, IDE extensions, and suspicious packages - in seconds."
readmeQualityOk: true
url: "https://github.com/step-security/dev-machine-guard"
homepage: "https://www.stepsecurity.io/dev-machine-guard"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agents", "endpoint-security", "mcp-servers", "supply-chain-security", "vscode-extensions"]
stars: 194
forks: 26
openIssues: 17
closedIssues: 21
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2026-03-10T07:34:34Z"
lastCommitAt: "2026-10-26T09:17:11Z"
lastReleaseAt: "2026-05-11T05:13:06Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 30
maintainers: ["swarit-stepsecurity", "ashishkurmi", "raysubham"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1ee68703e6301fbf939c9101ec072fca2fb577c674143067161cb31ddba4abb/step-security/dev-machine-guard"
---

## Why Dev Machine Guard?

Developer machines are the new attack surface. They hold high-value assets — GitHub tokens, cloud credentials, SSH keys — and routinely execute untrusted code through dependencies and AI-powered tools. Recent supply chain attacks have shown that malicious VS Code extensions can steal credentials, rogue MCP servers can access your codebase, and compromised npm packages can exfiltrate secrets.

**EDR and traditional MDM solutions** monitor device posture and compliance, but they have **zero visibility** into the developer tooling layer:

| Capability                  | EDR / MDM | Dev Machine Guard |
| --------------------------- | :-------: | :---------------: |
| IDE extension audit         |           |        Yes        |
| AI agent & tool inventory   |           |        Yes        |
| MCP server config audit     |           |        Yes        |
| Package scanning (Node.js, Homebrew, Python, system) |  |  Yes  |
| Package-manager config audit (registry, cooldown, auth) |  |  Yes  |
| Suspicious file / IOC detection |       |        Yes        |
| Cross-platform (macOS, Windows, Linux) | Yes | Yes        |
| Device posture & compliance |    Yes    |…
