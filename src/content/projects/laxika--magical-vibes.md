---
repo: "laxika/magical-vibes"
name: "magical-vibes"
description: "A fully \"vibecoded\" Magic engine with online play."
readmeQualityOk: true
url: "https://github.com/laxika/magical-vibes"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-06T19:47:10Z"
lastCommitAt: "2026-10-08T10:53:32Z"
lastReleaseAt: "2026-03-29T21:48:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 59
maintainers: ["laxika"]
openGraphImageUrl: "https://opengraph.githubassets.com/242c15bfd99ecc1fe438d4e0f0a8b96f5b2af887e00a87b8ba20989e6dcd055a/laxika/magical-vibes"
---

An experimental online Magic game engine. The goal is to show that modern agents could write okay quality code en-masse with proper human supervision. **99.99% of the code in this repo was written by either Claude or Codex.**

**Why Magic?**
- The rules are extremely well-defined.
- It is easy to verify objectively if the app is working as intended (does the cards do what is written on them?).
- It is super complex so if agents can work with it, then they can work with almost anything else as well.

**What the engine supports:**
- 10E (Tenth Edition) 80% coded.
- 1v1 matches against human players.
- Two-player Commander with 40 starting life, one commander, commander tax, command-zone return choices, and 21 combat damage from one commander.
- Saved decks with main deck, sideboard, and commander selection. The deck builder validates Casual, Standard, Pioneer, Modern, Legacy, Vintage, Pauper, and Commander. Invalid drafts can be saved; game admission enforces the selected format.
- 1v1 matches against AI (an easy, heuristic based one).
- 8 player drafts against other humans or AI.

Commander uses the regular Commander rules for a two-player game, not Duel Commander.…
