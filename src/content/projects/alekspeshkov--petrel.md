---
repo: "AleksPeshkov/petrel"
name: "petrel"
description: "UCI chess engine"
readmeQualityOk: true
url: "https://github.com/AleksPeshkov/petrel"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["chess", "chess-ai", "chess-bot", "chess-engine", "uci", "uci-chess-engine", "cpp20", "nnue"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-06T11:28:32Z"
lastCommitAt: "2026-09-02T08:03:26Z"
lastReleaseAt: "2026-03-19T23:03:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 73
maintainers: ["AleksPeshkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/2576080fd338e1e0298a206a027fd11acf99d01e48cd7b194d9ecbbf0ba297bd/AleksPeshkov/petrel"
---

# Petrel is UCI Chess Engine

Petrel is a conventional alpha-beta search engine, but some implementation details set it apart from others.

Petrel 4.0 rated `3540` Elo on the [CCRL Blitz](https://computerchess.org.uk/ccrl/404/cgi/engine_details.cgi?eng=Petrel%204.0%2064-bit) list; `3438` Elo on the [CCRL 40/15](https://computerchess.org.uk/ccrl/4040/cgi/engine_details.cgi?print=Details&each_game=0&eng=Petrel%204.0%2064-bit).

## Supported UCI options

```
option name Hash type spin min 0 max 16384 default 64
option name Move Overhead type spin min 1 max 10000 default 1
option name Ponder type check default false
option name UCI_Chess960 type check default false
option name Debug type check default false
option name Debug Log File type string default <empty>
```
Only input errors and a sparse search warnings will be written into `Debug Log File` (unless option `Debug true` or `debug on` is set
then all engine input and output will be logged).

## Command-line options

```
Options:
    -f|--file [FILE]                Read and execute initial UCI commands from the specified file.
    -b|--bench|bench [GO LIMITS]    Search a set of benchmark positions, report total nodes and nps, and…
