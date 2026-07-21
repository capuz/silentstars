---
repo: "msaad00/agent-bom"
name: "agent-bom"
description: "Open security scanner and self-hosted control plane for AI, MCP, and cloud. One evidence model — run scans in your environment, centralize findings, govern in your VPC."
readmeQualityOk: true
url: "https://github.com/msaad00/agent-bom"
homepage: "https://msaad00.github.io/agent-bom/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai-security", "mcp", "sbom", "vulnerability-scanning", "aibom", "blast-radius", "compliance", "cyclonedx", "devsecops", "kubernetes"]
stars: 28
forks: 7
openIssues: 6
closedIssues: 930
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-22T21:38:37Z"
lastCommitAt: "2026-07-21T06:11:19Z"
lastReleaseAt: "2026-02-24T20:55:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["msaad00"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7225d4c40dbd7bb231735d29b3bcf3f5309b31461ff105c034ca30ca11beedf/msaad00/agent-bom"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/msaad00/agent-bom/main/docs/images/logo-dark.svg">
  </picture>
</p>

</p>

</p>

## Scan your project in two commands

```bash
pip install agent-bom
agent-bom scan .
```

`.` means the current project. The local CLI reads it directly and prints
inventory, findings, reachable context, and fix-first actions; no control plane
is required. Export evidence when another tool needs it:
`agent-bom scan . -f sarif -o findings.sarif`. For scripts,
`--project .` (short form: `-p .`) is equivalent.

`-p`/`--project` expects a directory, not a manifest file. For large
monorepos, point it at the workspace or service under review and run one scan
per CI workspace; the current CLI does not pretend to provide an arbitrary
path-exclude language.

## Three ways to use it

| Product lane | First command | Evidence you get | Natural next step |
|---|---|---|---|
| **Scan and understand risk** — repos, images, SBOMs, agent/MCP config, IaC | `agent-bom scan .` | inventory, findings, fix priority, graph and standard report formats | gate CI or open the local report |
| **Centralize and visualize…
