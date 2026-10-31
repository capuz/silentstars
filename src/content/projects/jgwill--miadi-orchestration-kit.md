---
repo: "jgwill/miadi-orchestration-kit"
name: "miadi-orchestration-kit"
description: "The agent-host side of the Miadi Factory: Claude Code plugins, host-neutral skills and apt packages for Chronicle episodes, session capture and restore, and witnessed review."
readmeQualityOk: true
url: "https://github.com/jgwill/miadi-orchestration-kit"
homepage: "https://docs.miadi-orchestration-kit.jgwill.com"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [47, 28]
topics: ["agent-skills", "claude-code", "claude-code-plugins", "mcp", "miadi"]
stars: 5
forks: 1
openIssues: 74
closedIssues: 26
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-04-25T12:03:12Z"
lastCommitAt: "2026-10-31T09:54:53Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 80
undervaluedScore: 51
maintainers: ["miadisabelle", "jgwill"]
openGraphImageUrl: "https://opengraph.githubassets.com/74486f1a464ef17c2e7aaa6cf01fb78a0abbc411eceb698ea3d1e230e0d08d63/jgwill/miadi-orchestration-kit"
---

# miadi-orchestration-kit

The agent-host side of the Miadi Factory: Claude Code plugins, host-neutral skills, hooks and apt packages. With them an agent opens and closes Chronicle episodes, records its own session, comes back after a reboot, and puts its work in front of a person who can judge it.

- Docs site: https://docs.miadi-orchestration-kit.jgwill.com
- For agents: [`llms.txt`](https://github.com/jgwill/miadi-orchestration-kit/blob/HEAD/llms.txt)

## Start here: the chronicle-episode skill

The Miadi Factory makes agent-made work inspectable and revisitable. It connects the originating question, the session trace, the interface evidence, explicit criteria, and a person's judgment. A Chronicle episode is where they meet, so [`skills/chronicle-episode`](https://github.com/jgwill/miadi-orchestration-kit/blob/HEAD/skills/chronicle-episode/SKILL.md) is the skill this kit is used for. It is the one entry point for episode work on any host: mint a vessel, prove its five stages, register it on the chronicle wheel, relate inquiries and lineage, raise Attention items, open ceremonies and talking circles, add Miadi reviews.

One copy of the skill lives here. The…
