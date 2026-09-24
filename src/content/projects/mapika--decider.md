---
repo: "Mapika/decider"
name: "decider"
description: "A family of System One-style models fine-tuned from Qwen3.5, designed for one-pass typed decisions with calibrated probabilities."
readmeQualityOk: true
url: "https://github.com/Mapika/decider"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 349
forks: 22
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-09-16T07:15:09Z"
lastCommitAt: "2026-09-24T08:42:16Z"
status: "newborn"
tags: []
healthScore: 98
undervaluedScore: 25
maintainers: ["Mapika", "dajiaohuang", "simply-sunny"]
openGraphImageUrl: "https://opengraph.githubassets.com/c01a31686da5efe93a2a87d6554005ed148b4568aed366ad9f5b0337ff2a2c30/Mapika/decider"
---

# decider: one-pass typed decisions with calibrated probabilities

A language model that does not generate text. It reads a **state** and a set of **typed questions** and returns, from one
forward pass, a probability distribution for every question.

A typed decision is a question with a fixed answer set: **Choice** over 2 to 255 options, **Score** over 2 to 10 described
levels, or **Noul**, the probability of yes. There is no decoding, no parsing, and no output outside the options you defined.

*Recorded episodes; every move is one forward pass, and the bars are the served probabilities. Tetris: the harness shortlists
8 placements with a hand-tuned heuristic and states their consequences, and the model picks one (20 lines per game, against
0.6 for a random pick from the same 8). Pong uses an unreleased games-RL overlay. Sources, seeds and windows:
[docs/DEMOS.md](https://github.com/Mapika/decider/blob/main/docs/DEMOS.md).*

**Independence.** This is an independent project. It is not affiliated with or endorsed by TypeSafe AI. It is an open
reproduction of the "System One" model class (TypeSafe AI's *Jev*): a 2B model built on `Qwen/Qwen3.5-2B-Base`, a 4B model built on…
