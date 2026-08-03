---
repo: "gamedevpl/www.gamedev.pl"
name: "www.gamedev.pl"
description: "The open-source AI game maker behind www.gamedev.pl — describe a game, an AI agent builds it, everyone plays it in the browser. Watch an AI dev team ship in public."
readmeQualityOk: true
url: "https://github.com/gamedevpl/www.gamedev.pl"
homepage: "https://www.gamedev.pl"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["gamedev", "ai", "ai-agents", "browser-games", "fastify", "game-development", "multiplayer", "party-games", "react", "typescript"]
stars: 7
forks: 23
openIssues: 0
closedIssues: 21
watchers: 3
contributors: 30
recentReleases: 0
createdAt: "2015-08-09T06:59:00Z"
lastCommitAt: "2026-08-03T06:42:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 92
maintainers: ["gtanczyk", "jactan77"]
openGraphImageUrl: "https://opengraph.githubassets.com/319cc916729b47ac59ae962529d8f509ef034bca1f74fad2f9523871128e2cea/gamedevpl/www.gamedev.pl"
discussionCount: 4
---

# gamedev.pl

**Describe a game. An AI agent builds it. Everyone plays it in the browser.**

[**Play now → www.gamedev.pl**](https://www.gamedev.pl) · closed beta

You write a few sentences about a game you want. An agent asks what it needs to know, then
builds it — actual code, not a template with the numbers changed. When it is ready it appears
in the arcade, where anyone can play it in a browser: no install, no account. Bring friends —
some games turn phones into controllers around one shared screen.

_Every game above was built this way._

This repository is the platform that does all of that, and it is open source.

## Watch an AI dev team ship in public

Most of this codebase was written by coding agents, and the pipeline that builds the games is
itself run by agents. That is unusual enough to be worth watching rather than just reading
about:

- A creator's description becomes a spec, and a **QA gate** asks real clarifying questions
  before any code is written.
- An agent implements the game in a separate games repository and reports progress over a
  live build channel while it works.
- After playing, a creator can ask for changes — the feedback goes back to the agent as a…
