---
repo: "laxika/magical-vibes"
name: "magical-vibes"
description: "A mostly vibecoded Magic engine with online play."
readmeQualityOk: true
url: "https://github.com/laxika/magical-vibes"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-06T19:47:10Z"
lastCommitAt: "2026-07-04T22:17:52Z"
lastReleaseAt: "2026-03-29T21:48:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["laxika"]
openGraphImageUrl: "https://opengraph.githubassets.com/8300da0cce258278c5369a15ca1d2eba17281a048ec35cdc35dea93af25c0eac/laxika/magical-vibes"
---

An experimental online Magic game engine. The goal is to show that modern agents could write okay quality code en-masse with proper human supervision. **99.99% of the code in this repo was written by either Claude or Codex.**

**Why Magic?**
- The rules are extremely well-defined.
- It is easy to verify objectively if the app is working as intended (does the cards do what is written on them?).
- It is super complex so if agents can work with it, then they can work with almost anything else as well.

**What the engine supports:**
- 10E (Tenth Edition) 80% coded.
- 1v1 matches against human players.
- 1v1 matches against AI (an easy, heuristic based one).
- 8 player drafts against other humans or AI.

**Next target:**
- Finish 10E, start implementing ECL.

**Architecture:**
- Backend: Java + Spring Boot.
- Frontend: Angular.
- Networking: websocket (broadcasting whole board state at every update).
- Most of the card data is downloaded from Scryfall at server startup (for legal reasons).
- All the art assets are loaded from Scryfall by the client at startup (for legal reasons).

**How to start the application:**
- Run `./gradlew clean build`
- `cd` to…
