---
repo: "vegetableleaf/ClashAI"
name: "ClashAI"
description: "An AI DL model that learns how to play Clash Royale."
readmeQualityOk: true
url: "https://github.com/vegetableleaf/ClashAI"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 181
forks: 26
openIssues: 5
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-07-25T17:47:05Z"
lastCommitAt: "2026-10-08T10:51:03Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 76
undervaluedScore: 21
maintainers: ["vegetableleaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/86040e94befb6a9460823866fed687dbfac4a2eb7c18b4efb54998548b218bfb/vegetableleaf/ClashAI"
fundingLinks: ["GITHUB:https://github.com/vegetableleaf"]
---

# ClashAI

> A bot that plays **Clash Royale** ranked ladder, live, with the **X-Bow control ("icebow") deck**.
> It learns from professional replays, is improved by reinforcement learning in a simulator, and is
> deployed on an Android emulator using **public information only**: what a human could see.

This is a hobby / research project about getting an agent to *actually play* a real-time game it
cannot peek inside. Nothing here is affiliated with or endorsed by Supercell.

> [!TIP]
> **New here?** [icebow/Instructions.txt](https://github.com/vegetableleaf/ClashAI/blob/HEAD/icebow/Instructions.txt) is a plain-English, from-scratch
> walkthrough of the pipeline below. [HANDOFF.md](https://github.com/vegetableleaf/ClashAI/blob/HEAD/HANDOFF.md) is the project journal (current state,
> measured results, traps) and is the most up-to-date document in the repo.

> [!NOTE]
> **Status (2026-10-04).** Live play works end to end on the trophy ladder, unattended, including
> between-match navigation and daily-chest collection. The best policy measured in the simulator is the
> reinforcement-learning checkpoint `rseries_r1_u0155`; the newest imitation models (`gen_v3.1a/b`) are
> trained on…
