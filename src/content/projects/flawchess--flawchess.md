---
repo: "flawchess/flawchess"
name: "flawchess"
description: "A platform for chess analysis"
readmeQualityOk: true
url: "https://github.com/flawchess/flawchess"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [54, 38]
stars: 22
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-11T08:06:45Z"
lastCommitAt: "2026-10-31T09:54:27Z"
lastReleaseAt: "2026-05-27T15:58:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["aimfeld", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ad7c82cfd7abe84533b1761a760d834ff825bd99841cbac66a73d80c71baba8/flawchess/flawchess"
---

Live at <a href="https://flawchess.com"><strong>flawchess.com</strong></a>

## What is FlawChess?

A free, open-source chess analysis platform. Import your games from chess.com and lichess to find leaks in your openings, endgames, and time management. Its signature FlawChess Engine ranks moves by the practical score you'll actually achieve against a real opponent at your level, not the objective-best move a conventional engine would play.

## Features

- **FlawChess Engine**: an in-browser engine that ranks your moves by expected practical score: the best move you'll actually pull off against an opponent who defends like a real player at your level. Fuses Stockfish's objective evaluation with Maia's human move-prediction (expectimax inside an MCTS budget allocator), and surfaces the traps and swindles a conventional engine ignores.
- **Game & tactic analysis**: Stockfish over your entire game history, with every mistake tagged by the tactic behind it (fork, pin, skewer, and 20+ motifs), blunder-rate trends over time, and gem-move detection for the only good move most players at your rating would miss.
- **Personalized puzzle training**: a spaced-repetition drill built from your…
