---
repo: "evoila/meho"
name: "meho"
description: "Governance backplane for AI agents acting on infrastructure — policy-gated, audit-grade, MCP-native. Apache 2.0."
readmeQualityOk: true
url: "https://github.com/evoila/meho"
homepage: "https://evoila.github.io/meho/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["ai-agents", "audit", "devops", "governance", "infrastructure", "kubernetes", "mcp", "multi-tenant", "policy", "apache-2-0"]
stars: 15
forks: 1
openIssues: 580
closedIssues: 1818
watchers: 0
contributors: 21
recentReleases: 0
createdAt: "2026-03-31T13:34:04Z"
lastCommitAt: "2026-10-21T20:35:27Z"
lastReleaseAt: "2026-06-01T19:05:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["damir-topic", "dependabot[bot]", "markonisic"]
openGraphImageUrl: "https://opengraph.githubassets.com/776c657650226d9e8f4eb850b7c546b173e25d971daa699a91f0a9df6ef53ca9/evoila/meho"
discussionCount: 0
---

# MEHO

> Governance backplane for AI agents acting on infrastructure —
> policy-gated, audit-grade, MCP-native. Apache 2.0.

**Status:** Released — see the release badge above for the current version.
The backplane image, Helm chart, and operator CLI are all shipped and cosign-signed.

**Documentation:** <https://evoila.github.io/meho/> — the published,
versioned docs site (install, client setup, task guides) and the primary
entry point for operators. It builds from `docs-site/`; the `docs/` tree
in this repo is separate, contributor-facing material.

## The problem

AI agents are getting good enough to *do* infrastructure work — roll a
credential, drain a node, restart a service — not just describe it. But
handing an agent a long-lived admin token and a shell is how you get an
un-auditable, over-privileged actor loose in production. The moment an
agent can act, you need the same controls you'd demand of any operator:
who is allowed to do what, with credentials that expire, against which
targets, with every action recorded and reviewable.

Today that control plane doesn't exist. Each team bolts ad-hoc wrappers
around an MCP server, or trusts the agent runtime to behave. MEHO is…
