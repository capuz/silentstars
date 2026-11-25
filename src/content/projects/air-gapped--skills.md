---
repo: "air-gapped/skills"
name: "skills"
description: "Claude Code plugin marketplace — 78 installable reference skills across vLLM/SGLang inference, Kubernetes & Harvester, GPU host bring-up, observability, security, and agent workflows."
readmeQualityOk: true
url: "https://github.com/air-gapped/skills"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [73, 23]
topics: ["agent-skills", "ai-agents", "air-gapped", "anthropic", "claude-code", "claude-code-marketplace", "claude-code-plugin", "claude-skills", "helm", "keda"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-19T23:14:58Z"
lastCommitAt: "2026-11-25T03:15:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 49
maintainers: ["wthrbtn"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b4cab88b64ebdb104b394a1fab469d6674fa17181d91c56c7f703c86c4716f7/air-gapped/skills"
---

# skills

Claude Code plugin marketplace — 78 installable reference skills across vLLM/SGLang inference, Kubernetes & Harvester, GPU host bring-up, observability, security, and agent workflows.

## Install

```
/plugin marketplace add air-gapped/skills
/plugin install <plugin>@air-gapped-marketplace
```

Plugins are either single-skill (e.g. `jinja-expert`, `aiperf`) or multi-skill suites (e.g. `vllm` — bundles all vLLM reference skills into one plugin). The **Plugin** column in the table below is exactly the name to pass to `/plugin install`: suites are listed first with their member skills grouped together, single-skill plugins follow. See `.claude-plugin/marketplace.json` for the full list.

Versioning scheme per plugin: `0.YYYYMMDD.N` where `YYYYMMDD` is the UTC date of the most recent content change across member skills and `N` is the unique commit count touching any member skill directory. Run `/plugin update` to pick up new bumps.
