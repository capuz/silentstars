---
repo: "step-security/dev-machine-guard"
name: "dev-machine-guard"
description: "Scan your dev machine for AI agents, MCP servers, IDE extensions, and suspicious packages - in seconds."
url: "https://github.com/step-security/dev-machine-guard"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 159
forks: 20
openIssues: 20
closedIssues: 6
watchers: 5
contributors: 8
recentReleases: 8
createdAt: "2026-03-10T07:34:34Z"
lastCommitAt: "2026-06-24T06:39:44Z"
lastReleaseAt: "2026-05-11T05:13:06Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 82
undervaluedScore: 28
maintainers: ["ashishkurmi", "swarit-stepsecurity", "shubham-stepsecurity"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf5edfc0cfe991f9b8286d5ec3434f141b37a209b622f82ffea9ab4a5c26ca74/step-security/dev-machine-guard"
---

<h1 align="center">StepSecurity Dev Machine Guard</h1>

</p>

</p>

</p>

  <b>Scan your dev machine for AI agents, MCP servers, IDE extensions, suspicious files, and risky package-manager configs — in seconds.</b>
</p>

## Why Dev Machine Guard?

Developer machines are the new attack surface. They hold high-value assets — GitHub tokens, cloud credentials, SSH keys — and routinely execute untrusted code through dependencies and AI-powered tools. Recent supply chain attacks have shown that malicious VS Code extensions can steal credentials, rogue MCP servers can access your codebase, and compromised npm packages can exfiltrate secrets.

</p>

**EDR and traditional MDM solutions** monitor device posture and compliance, but they have **zero visibility** into the developer tooling layer:

| Capability                  | EDR / MDM | Dev Machine Guard |
| --------------------------- | :-------: | :---------------: |
| IDE extension audit         |           |        Yes        |
| AI agent & tool inventory   |           |        Yes        |
| MCP server config audit     |           |        Yes        |
| Package scanning (Node.js, Homebrew, Python, system) |  |  Yes  |
|…
