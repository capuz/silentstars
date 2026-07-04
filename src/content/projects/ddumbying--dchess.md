---
repo: "DDumbying/Dchess"
name: "Dchess"
description: "Dumbest TUI Chess Engine you could ever see."
readmeQualityOk: true
url: "https://github.com/DDumbying/Dchess"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-28T19:17:14Z"
lastCommitAt: "2026-07-04T22:51:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 32
maintainers: ["saeeedhany"]
openGraphImageUrl: "https://opengraph.githubassets.com/738faaa737bb11ff4a7b54664510aa574738b9e9bbdc6d019f9974073226d8d1/DDumbying/Dchess"
---

# Dchess - DumbChess

**A terminal chess engine written in C.**

One of these nerdy things built out of passion — to actually understand how `C` works and how chess works technically, under the hood.

**Links:** [GitHub](https://github.com/ddumbying/) · ~[Documentation](https://ddumbying.vercel.app/projects/dchess/)~ (*WIP*) </br>

## Overview

</p>

## What it has

**Engine**
- Bitboard-based board representation
- Full move generation — pawns, castling, en passant, promotion
- Alpha-beta search with minimax and move ordering (captures + promotions first)
- Static evaluation with material values (centipawns) and piece-square tables for all piece types
- 50-move rule detection
- Threefold repetition detection via Zobrist-style position hashing
- Stalemate and checkmate detection

**TUI**
- ncurses interface with Unicode chess pieces (♙♘♗♖♕♔ / ♟♞♝♜♛♚)
- Board scales to fill available terminal size
- Custom 256-color palette — warm parchment/walnut squares, dark charcoal canvas
- Vim-style modal input — normal mode for cursor navigation (`hjkl`/arrows), press `i` to enter command mode, `ESC` to return
- Legal move highlighting — blue squares for valid destinations
- Selected piece…
