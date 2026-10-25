---
repo: "kunickiaj/codemem"
name: "codemem"
description: "A lightweight persistent-memory companion for OpenCode & Claude"
readmeQualityOk: true
url: "https://github.com/kunickiaj/codemem"
homepage: "https://codemem.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["memory", "opencode", "ai", "ai-agents", "ai-memory", "ai-memory-system", "p2p", "claude", "claude-ai", "claude-code"]
stars: 73
forks: 14
openIssues: 7
closedIssues: 15
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-13T21:51:11Z"
lastCommitAt: "2026-10-25T02:46:30Z"
lastReleaseAt: "2026-02-14T23:47:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 43
maintainers: ["kunickiaj", "dependabot[bot]", "ZeR020"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a3f8b9306c6b26b2fb716f2dac286c6a00b5c1b5a726411e9aca094e214f8df/kunickiaj/codemem"
---

# codemem

Normal V2 account linking needs no account-management upgrade. An older authority
schema still needs the [explicit auth-schema cutover](https://github.com/kunickiaj/codemem/blob/HEAD/docs/contracts/coordinator-auth-protocol.md#operator-cutover):
`codemem coordinator upgrade-auth-schema --db-path coordinator.sqlite` upgrades an
existing local coordinator file; `--export-sql` exports D1 SQL without applying it.
Optional **Refresh profile**, **Unlink Google account**, and reconnect support instead
require an intact V2 coordinator and the separate
[`upgrade-account-schema` rollout](https://github.com/kunickiaj/codemem/blob/HEAD/docs/cloudflare-coordinator-deployment.md#optional-account-management-extension).
Unlink confirms once in the Viewer and uses the existing authorized device without
Google sign-in. Link, relink and profile refresh still require Google verification.

**The code is still there. The reasoning usually isn’t.**

codemem is persistent coding memory across sessions, machines, and teammates for [OpenCode](https://opencode.ai), [Claude Code](https://claude.ai/code), Codex, and the [Pi coding agent](https://github.com/earendil-works/pi). It captures decisions,…
