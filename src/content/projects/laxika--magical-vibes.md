---
repo: "laxika/magical-vibes"
name: "magical-vibes"
description: "A fully \"vibecoded\" Magic engine with online play."
readmeQualityOk: true
url: "https://github.com/laxika/magical-vibes"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-06T19:47:10Z"
lastCommitAt: "2026-08-18T04:09:06Z"
lastReleaseAt: "2026-03-29T21:48:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["laxika"]
openGraphImageUrl: "https://opengraph.githubassets.com/640005e246c06d8e9ec87d1499996b08fe645cf9253713a65bd37187d767f03a/laxika/magical-vibes"
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

**Architecture:**
- Backend: Java + Spring Boot.
- Frontend: Angular.
- Networking: websocket (broadcasting whole board state at every update).
- Card data is downloaded from Scryfall/MTGJson at server startup.
- Card art is loaded from Scryfall by the client at startup.
- Mana symbols, watermarks and set symbols are drawn with icon fonts (Mana and Keyrune), so none of them are fetched per card.

**How to start the application:**
- Run `./gradlew clean build`
- `cd` to…
