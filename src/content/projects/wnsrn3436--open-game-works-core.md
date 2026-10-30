---
repo: "wnsrn3436/open-game-works-core"
name: "open-game-works-core"
description: "A harness that lets AI agents make server-client games of commercial quality on a prebuilt core"
readmeQualityOk: true
url: "https://github.com/wnsrn3436/open-game-works-core"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-agents", "claude-code", "codex", "game-development", "godot", "llm", "open-game-works", "typescript"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-23T14:03:12Z"
lastCommitAt: "2026-10-30T09:59:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["wnsrn3436"]
openGraphImageUrl: "https://opengraph.githubassets.com/50ef428190db6089d04765b4539153ddb64d66b2d1509297b737cb1ca339fbd0/wnsrn3436/open-game-works-core"
discussionCount: 0
---

# open-game-works

[한국어](https://github.com/wnsrn3436/open-game-works-core/blob/HEAD/README.ko.md)

AI agents make server-client games on top of a prebuilt core, aiming for commercial quality.

https://github.com/user-attachments/assets/fb74b4ca-cc63-430d-af79-5b5118ec9c8a

https://github.com/user-attachments/assets/9cf4f284-32c5-4f82-9c3f-13d17cbc12ec

open-game-works is a harness in which AI agents make server-client games. The goal is games that reach commercial quality in both fun and completeness.

- Features that many games would rebuild the same way (infra, live ops, store policy, meta systems) are prebuilt as **core**. Agents write only the gameplay, as **content code**.
- You give one command, such as `create game: <game>`. The agent that receives it calls a sub-agent for each role and runs an edit, check and judge loop until it stops, then reports to you.
- Fun is judged by judge agents that play the game blind against the previous version. Completeness is judged by automated checks (bot playtests, profiling, UI captures).

This repository is the harness: the rules the agents follow, the skills and core module specs they read, the settings, and the CLI `ogw`. You use it…
