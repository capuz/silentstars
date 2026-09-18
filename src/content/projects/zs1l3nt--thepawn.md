---
repo: "zS1L3NT/thepawn"
name: "thepawn"
description: "A legacy chess engine written in rust to determine legal moves of a specific position, paired with a react frontend to see the chessboard"
readmeQualityOk: true
url: "https://github.com/zS1L3NT/thepawn"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["react", "rust", "tauri", "typescript"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-09-10T22:52:57Z"
lastCommitAt: "2026-09-18T14:03:50Z"
status: "archived"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["zS1L3NT"]
openGraphImageUrl: "https://opengraph.githubassets.com/13f58f7dd15c1283d0c9e42eab1c32e2f95c6c76a4b3547ed9854349d8297c94/zS1L3NT/thepawn"
---

# ThePawn

    

This project pairs a React/Tauri chessboard with a Rust move generator. The same engine also ships as a headless UCI binary with a small deterministic search algorithm.

## Motivation

I seriously love the game of Chess. This is my third repository where I attempt to rebuild a chess engine in yet another language. From [Java](https://github.com/zS1L3NT/java-chess), to [Typescript](https://github.com/zS1L3NT/web-angular-chess) and now to Rust. I was also heavily inspired by how Sebastian Lague implemented his chess engine in [this](https://www.youtube.com/watch?v=U4ogK0MIzqk) video.

## Features

-	Desktop chessboard app
	-	React UI with drag and drop of pieces
	-	Rust backend served over Tauri commands for board state, move execution and resetting
	-	Run it with `tauri dev` or bundle a release with `tauri build`
-	Headless UCI engine (`rs-thepawn/src/bin/thepawn-uci.rs`)
	-	Legal move generation for any position, verified by perft tests
	-	Small deterministic material search, suitable for comparing against other UCI-compatible  chess engines
	-	Plain UCI support (`uci`, `isready`, `ucinewgame`, `position`, `go`, `stop`, `quit`) for any chess GUI or tournament…
