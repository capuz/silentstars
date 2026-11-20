---
repo: "mordredagent/hermes-mordred"
name: "hermes-mordred"
description: "Privacy-preserving plugin bundle for the Hermes agent"
readmeQualityOk: true
url: "https://github.com/mordredagent/hermes-mordred"
homepage: "https://mordred.ai"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 8
forks: 1
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-06-30T09:32:01Z"
lastCommitAt: "2026-11-19T13:41:37Z"
lastReleaseAt: "2026-07-30T14:55:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 53
maintainers: ["spiderings", "leohio"]
openGraphImageUrl: "https://opengraph.githubassets.com/258c4df1b2001b20977646a822b43d1326769a54453d71d43cb534a4e3431030/mordredagent/hermes-mordred"
---

# hermes-mordred

Privacy-preserving plugins for the
[Hermes agent](https://github.com/NousResearch/hermes-agent): hardware-backed
keys, Tor/VPN routing, local-LLM policy enforcement, encrypted audit data,
end-to-end gateway messages, and macOS-integrated at-rest encryption.

Mordred is a cooperative control layer inside Hermes, not an operating-system
sandbox. See the
[specification](https://github.com/mordredagent/hermes-mordred/blob/main/docs/dev/SPEC.md#threat-model--accepted-limitations)
for the security boundary and accepted limitations.

**Status: active alpha.** See the
[latest alpha release and release notes](https://github.com/mordredagent/hermes-mordred/releases).
New users should start with the
**[Quickstart](https://github.com/mordredagent/hermes-mordred/blob/main/docs/user/QUICKSTART.md)**.

## The plugin

The package registers one Hermes plugin, `mordred` (a single
`hermes_agent.plugins` entry point), made of these components:
