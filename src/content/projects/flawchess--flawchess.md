---
repo: "flawchess/flawchess"
name: "flawchess"
description: "A platform for chess analysis"
readmeQualityOk: true
url: "https://github.com/flawchess/flawchess"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 36]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-03-11T08:06:45Z"
lastCommitAt: "2026-07-29T06:14:49Z"
lastReleaseAt: "2026-05-27T15:58:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["aimfeld"]
openGraphImageUrl: "https://opengraph.githubassets.com/e96689a64b9c484fa858a2baa929d9c122348c18e55029f1ec1d5ea0d23f0979/flawchess/flawchess"
---

</p>

<h1 align="center">FlawChess</h1>

  <em>Engines are flawless, humans play FlawChess</em>
</p>

  Live at <a href="https://flawchess.com"><strong>flawchess.com</strong></a>
</p>

</p>

## What is FlawChess?

A free, open-source chess analysis platform. Import your games from chess.com and lichess to find leaks in your openings, endgames, and time management. Its signature FlawChess Engine ranks moves by the practical score you'll actually achieve against a real opponent at your level, not the objective-best move a conventional engine would play.

## Features

- **FlawChess Engine** — an in-browser engine that ranks your moves by expected practical score: the best move you'll actually pull off against an opponent who defends like a real player at your level. Fuses Stockfish's objective evaluation with Maia's human move-prediction (expectimax inside an MCTS budget allocator), and surfaces the traps and swindles a conventional engine ignores.
- **Endgame analytics** — WDL by endgame type (rook, minor piece, pawn, queen, mixed), conversion rates when up material and recovery rates when down, Endgame ELO timeline per platform/time control, and LLM-narrated personalized feedback…
