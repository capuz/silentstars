---
repo: "AleksPeshkov/petrel"
name: "petrel"
description: "UCI chess engine"
readmeQualityOk: true
url: "https://github.com/AleksPeshkov/petrel"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["chess", "chess-ai", "chess-bot", "chess-engine", "uci", "uci-chess-engine", "cpp20", "nnue"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-06T11:28:32Z"
lastCommitAt: "2026-11-04T11:27:22Z"
lastReleaseAt: "2026-03-19T23:03:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 73
maintainers: ["AleksPeshkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbafda6b8682a99007365b95cfca30c07bf86d0a1b576575f134a381a0732b1e/AleksPeshkov/petrel"
---

# Petrel is UCI Chess Engine

Petrel is a conventional alpha-beta search engine, but some implementation details set it apart from others.

Petrel 4.0 was rated `3536` Elo on the CCRL Blitz list before it was deleted from it.

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
    -b|--bench|bench [GO LIMITS]    Search a set of benchmark positions, report total nodes and nps, and exit.
    -v|--version                    Display version information and exit.
    -h|--help                       Show this help message and exit.
```
You can provide a configuration file. This file…
