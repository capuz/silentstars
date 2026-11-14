---
repo: "vincentbab/Belette"
name: "Belette"
description: "An UCI compatible chess engine written in C++"
readmeQualityOk: true
url: "https://github.com/vincentbab/Belette"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["chess", "alpha-beta-algorithm", "chess-engine", "cpp20"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2023-08-10T22:05:38Z"
lastCommitAt: "2026-11-14T18:24:40Z"
lastReleaseAt: "2024-03-28T01:30:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 76
maintainers: ["vincentbab"]
openGraphImageUrl: "https://opengraph.githubassets.com/b891f9744c14662522d79c702d97d8b49229411897727a8e2dd9dccffde3c9ac/vincentbab/Belette"
---

# Belette
Another UCI-compatible chess engine written in C++. 

For now it only supports CPUs with AVX2 and BMI2 instructions. Support for other architectures might be added in the future.

See [Release page](https://github.com/vincentbab/Belette/releases) for precompiled binaries

You can play against the engine on lichess: https://lichess.org/@/Belette-Bot
The Bot will only accept one challenge at a time.

## Compiling

Tested on Windows and Linux with GCC >= 12 and CLang >= 19

```sh
make
```
Executable will be in `./build/Release/bin/belette[.exe]`

## UCI Options

### Debug Log File
Log every input and output of the engine to the specified file

### Hash
Specify the hash table size in megabytes

### Clear Hash
Clear the hash table and all history tables

### Threads
For now this option doesn't do anything. It's only for compatibility purpose

### Move Overhead
Time in milliseconds subtracted from the remaining time and from movetime to compensate for communication delays (default 10ms)

### UCI_Chess960
Use the Chess960 castling notation (king takes own rook) for moves.

## Internals

### Board & Move generation
 - Bitboard
 - Zobrist hashing
 - Fast legal move enumeration…
