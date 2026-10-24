---
repo: "tanepiper/game-frame"
name: "game-frame"
description: "A frameworkl for AI agents (and people) to reverse engineer games from their shipped files"
readmeQualityOk: true
url: "https://github.com/tanepiper/game-frame"
homepage: "https://tanepiper.github.io/game-frame/"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-21T07:31:42Z"
lastCommitAt: "2026-10-24T08:21:10Z"
lastReleaseAt: "2026-10-23T14:43:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 59
maintainers: ["tanepiper"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ead1c1fc8b874fbec61ad703d339a4feec86658f010d7e799ff18292aaccbfd/tanepiper/game-frame"
discussionCount: 0
---

# GameFrame

GameFrame is an agentic framework for reverse engineering games. Its playbook of skills and agents runs inside your coding agent. Its toolkit of tested tools checks every result against the original. AI agents and people use it to study a game from its shipped files. They
document its formats and rules, and reimplement it so it behaves exactly like the original.

The toolkit works with [Ghidra](https://ghidra-sre.org), the
[Unicorn](https://www.unicorn-engine.org) emulator, [REA](https://github.com/morluto/rea)
(Reverse Engineer Anything) and, for DOS games, [DOSBox-X](https://dosbox-x.com) and its
debugger. GameFrame grew out of [Un-Banished](https://github.com/tanepiper/unbanished), a 1:1
reimplementation of the game Banished built this way; see
[the case studies](https://github.com/tanepiper/game-frame/blob/HEAD/docs/case-studies/README.md).

## Set it up with your agent

Copy this prompt into your coding agent (Claude Code, Codex, Cursor or another). It clones
GameFrame and checks your tools. It asks before it installs anything, then starts a project for
your game.

```text
Set up GameFrame on this computer for me.

1. Clone https://github.com/tanepiper/game-frame…
