---
repo: "lerenn/paseo-playbooks"
name: "paseo-playbooks"
description: "Paseo plugin for multi-agent workflows: YAML playbooks whose steps run as subagents, in parallel or in loops, with human approval gates."
readmeQualityOk: true
url: "https://github.com/lerenn/paseo-playbooks"
homepage: "https://playbooks.paseo.lerenn.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-orchestration", "ai-agents", "coding-agents", "human-in-the-loop", "multi-agent", "paseo", "paseo-plugin", "workflow", "yaml"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-02T13:54:50Z"
lastCommitAt: "2026-11-11T11:21:22Z"
lastReleaseAt: "2026-11-04T09:21:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["lerenn"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2208a350c55a10fdebfe2767bb250951c5e2c76d9e7d085f47d7acfa1e67c0e/lerenn/paseo-playbooks"
---

# Paseo Playbooks

> [!WARNING]
> Until v1.0, any minor release may change the playbook YAML format in breaking ways. Pin the
> plugin to a release tag (`paseo plugin install https://github.com/lerenn/paseo-playbooks.git --ref v0.7.0`,
> then `paseo plugin update paseo-playbooks --ref <tag>`) and read the release notes before upgrading.

Paseo plugin for multi-agent workflows: write a playbook in YAML, and a manager agent runs
each step as a subagent, in parallel or in loops, through to the human approval gates. See [OVERVIEW.md](https://github.com/lerenn/paseo-playbooks/blob/HEAD/OVERVIEW.md) for what it does and
[docs/adrs/2026-11-02-design.md](https://github.com/lerenn/paseo-playbooks/blob/HEAD/docs/adrs/2026-11-02-design.md) for the design.

The example playbook from the overview (fix, then review and test in parallel, then a human
gate), as a graph. The source is [assets/example-flow.mmd](https://github.com/lerenn/paseo-playbooks/blob/HEAD/assets/example-flow.mmd):

```mermaid
flowchart LR
  start([issue]) --> fix("<b>Fix</b><br/>developer")
  fix --> review("<b>Review</b><br/>reviewer, read-only")
  fix --> test("<b>Test</b><br/>tester, read-only")
  review -- ok -->…
