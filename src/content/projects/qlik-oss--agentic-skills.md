---
repo: "qlik-oss/agentic-skills"
name: "agentic-skills"
description: "Qlik AI assets for agents, MCP and more"
readmeQualityOk: true
url: "https://github.com/qlik-oss/agentic-skills"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 12
forks: 6
openIssues: 1
closedIssues: 0
watchers: 7
contributors: 15
recentReleases: 0
createdAt: "2026-03-25T13:09:26Z"
lastCommitAt: "2026-09-24T08:41:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 38
maintainers: ["CedLebQlik", "dependabot[bot]", "withdave"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d96042589a03b2896858a4fdd89b3ad0db8dc3db6cb341a6aa701e0d56056f/qlik-oss/agentic-skills"
---

# Qlik Agentic Skills

This is Qlik's public, open-source hub for AI agent skills - reusable skills and Claude plugins that extend AI agents with Qlik-specific expertise. Contributions from anyone are welcome; see [Contribute a skill](#contribute-a-skill) below.

The skill content in this repository follows the open [Agent Skills standard](https://agentskills.io). It is intended to be portable across compatible runtimes, but runtime compatibility depends on the host tool's implementation and should be verified in each consuming agent.

---

## What are agent skills?

Agent skills are folders of instructions, scripts, and reference material that an AI agent loads on demand. Instead of repeating context in every conversation, you package your expertise once and let the agent discover and apply it automatically.

Think of a skill as an onboarding guide for a new hire - it tells the agent what to do, when to do it, and how to do it correctly for your specific environment. The [SKILL.md format](https://agentskills.io/specification) is an open standard, but each agent runtime still decides how it discovers, loads, and executes those skills.

---

## What's in this repository

```…
