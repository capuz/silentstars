---
repo: "SoupTeam/soup-wall"
name: "soup-wall"
description: "Soup Wall: open-source security for AI agents and model traffic. Local Agent, Gateway, self-hosted Console. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/SoupTeam/soup-wall"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [53, 45]
topics: ["agent-security", "ai-agents", "appsec", "claude-code", "firewall", "llm-security", "mcp", "prompt-injection", "rust", "security"]
stars: 29
forks: 8
openIssues: 0
closedIssues: 13
watchers: 0
contributors: 23
recentReleases: 2
createdAt: "2026-09-06T10:01:10Z"
lastCommitAt: "2026-11-04T13:04:39Z"
lastReleaseAt: "2026-10-02T09:31:13Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["cleave173", "Nari-Ab", "azimkhanrazdva"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b465894275cbcf940a1fecbcbc9f7cd587f72d8435e029d4fe7253f07e5e74b/SoupTeam/soup-wall"
---

# Soup Wall

**Open-source protection for AI apps and agents.** Soup Wall inspects model traffic and the actions an agent takes, applies local policy, and records decisions for review. The complete source for the agent, gateway, and self-hosted control plane is available under Apache-2.0.

## Try the Linux pilot

The supported two-server pilot runs as an ordinary user on **native Ubuntu
24.04 x86_64**. Its frozen [v1 scope](https://github.com/SoupTeam/soup-wall/blob/HEAD/docs/operations/PILOT_V1_SCOPE.md) names exactly what is supported
(pinned Claude Code, the original reviewed filesystem and Git servers, explicit enforcement), what is
conditional and what is excluded; select it with `--scope linux-v1`. It makes no universal-firewall or
live-model effectiveness claim. Start with the [first-use walkthrough](https://github.com/SoupTeam/soup-wall/blob/HEAD/docs/operations/PILOT_QUICKSTART.md)
to build the selected Agent, prepare pinned filesystem/Git servers and run the
actual Claude Code host against a local scripted provider. The walkthrough uses
synthetic files and needs no model account or provider credentials.

From a clean checkout, inspect the demo without launching or…
