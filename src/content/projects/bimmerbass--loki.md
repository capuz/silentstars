---
repo: "BimmerBass/Loki"
name: "Loki"
description: "C++17 chess engine"
readmeQualityOk: true
url: "https://github.com/BimmerBass/Loki"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 10
forks: 4
openIssues: 4
closedIssues: 18
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-02-20T12:33:25Z"
lastCommitAt: "2026-07-04T22:18:35Z"
lastReleaseAt: "2021-05-10T13:55:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 42
maintainers: ["BimmerBass"]
openGraphImageUrl: "https://opengraph.githubassets.com/4469ea46d6bfca9f7a3dad5730637e7d1fbb2d337a6431d22e7bc7c9d92cfdab/BimmerBass/Loki"
---

# Loki
Loki is a UCI-compliant chess engine written in C++. At the moment it has been tested to have a strength of 2490 (version 3.5.0 on CCRL 40/15) elo.

## Why the name?
After a bit of googling I found someone who recommended that one uses a name that describes what the program does (duh..). Then, I thought that a chess engine is cold, calculating and cunning, so naturally the first name to come to mind
was the nordic god, Loki. After elementary school - where we learned about the nordic gods - I've always thought he was a bit of a d*ck, and so is a chess engine.

## Elo history
| Version   | Elo   | TC   |
|-----------|-------|------|
| 1.0.2    | 1766  | 2'+1"|
| 1.2.0     | 1821  | 2'+1"|
| 2.0.0     | 2036  | 2'+1"|
| 3.0.0     | 2466  | 2'+1"|
| 3.5.0     | 2490  | 40/15|

## Implementation
Loki uses bitboards as its main board representation
#### Move generation
- Magic Bitboards, as implemented by maksimKorzh, for generation of sliding piece attacks.
- Pseudo-legal move generator with legality check in the make move function.
- Overall **Perft @ depth = 5 speed of 290ms** from starting position, without bulk-counting.

#### Evaluation
The evaluation considers the…
