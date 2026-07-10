---
repo: "sb2bg/sykora"
name: "sykora"
description: "NNUE chess engine written in Zig. Rated 3240 on CCRL."
readmeQualityOk: true
url: "https://github.com/sb2bg/sykora"
homepage: "https://lichess.org/@/SykoraBot"
language: "Zig"
languages: ["Zig", "Python"]
languagePcts: [59, 36]
topics: ["chess", "chess-engine", "uci", "zig"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-16T06:13:25Z"
lastCommitAt: "2026-07-10T05:39:08Z"
lastReleaseAt: "2026-03-23T07:34:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 45
maintainers: ["sb2bg"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e0e9298c654ab700ab67a6331294fedab8e44b233b27479f57e15716026cd8/sb2bg/sykora"
---

# Sykora

**A UCI chess engine written from scratch in Zig.**

Magic bitboards, alpha-beta with modern pruning and reductions, Lazy SMP, embedded NNUE trained via [Bullet](https://github.com/jw1912/bullet).

[Play live on Lichess →](https://lichess.org/@/sykorabot)

</div>

---

## Quick Start

Requires [Zig](https://ziglang.org/) `0.15.2`.

```bash
zig build -Doptimize=ReleaseFast
./zig-out/bin/sykora
```

Engine is compatible with any UCI GUI (Arena, Cutechess, etc.)

## Strength

Sykora is tested by [CCRL](https://computerchess.org.uk/ccrl/404/). Current entries:

| Version               | CCRL Rating | Rank  | Elo vs `0.1.0` |
| --------------------- | ----------- | ----- | -------------- |
| `Sykora 0.2.2 64-bit` | `3240`      | `163` | `+872`         |
| `Sykora 0.2.1 64-bit` | N/A         | N/A   | N/A            |
| `Sykora 0.1.0 64-bit` | `2368`      | `423` | baseline       |

## Features

<details>
<summary><b>Engine Core</b>: bitboards, magic move generation, Zobrist hashing</summary>

- Bitboard-based board representation with fast occupancy/piece set operations.
- Precomputed attack tables for king/knight/pawn moves.
- Magic bitboards for rook and bishop attacks…
