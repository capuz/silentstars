---
repo: "benckx/elephantchess"
name: "elephantchess"
description: "Play Chinese chess (Xiangqi) online for free. Create a game and share the link to play with a friend, join a game from the lobby, challenge a bot, solve puzzles, analyze your games to learn from your mistakes."
readmeQualityOk: true
url: "https://github.com/benckx/elephantchess"
homepage: "https://elephantchess.io"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [44, 38]
topics: ["chess", "chinese-chess", "chess-analysis", "chess-database", "chess-problems", "chess-puzzle", "xiangqi", "chinese-chess-ai", "chinese-chess-game", "chinese-chess-online"]
stars: 14
forks: 2
openIssues: 231
closedIssues: 443
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2023-03-16T16:19:44Z"
lastCommitAt: "2026-10-22T08:51:58Z"
lastReleaseAt: "2026-09-29T09:25:37Z"
status: "thriving"
tags: ["funded"]
healthScore: 90
undervaluedScore: 73
maintainers: ["benckx", "dependabot[bot]", "Claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/098d79198b1b52cd1cf8395c9f3424e842566d605baba4cb7b11c82715d0a1e9/benckx/elephantchess"
fundingLinks: ["KO_FI:https://ko-fi.com/elephantchess", "CUSTOM:https://elephanchessio.myspreadshop.com/all", "CUSTOM:https://www.paypal.me/benckx"]
---

# Table of Contents

- [About](#about)
    - [Features](#features)
    - [Principles](#principles)
    - [Glossary](#glossary)
- [Run Locally](#run-locally)
    - [TL;DR](#tldr)
    - [Pre-requisites](#pre-requisites)
    - [Set-up](#set-up)
    - [Build and Run](#build-and-run)
    - [Code Style](#code-style)
    - [Common Issues](#common-issues)
- [Back-End (Kotlin)](#back-end-kotlin)
    - [Gradle Modules](#gradle-modules)
    - [Libraries](#libraries)
    - [Libraries Usage](#libraries-usage)
- [Front-End](#front-end)
    - [HTML](#html)
    - [JavaScript](#javascript)
    - [JavaScript Libraries](#javascript-libraries)
    - [Minification](#minification)

# About

[elephantchess.io](https://elephantchess.io) is a web application to play and
study [Chinese chess](https://en.wikipedia.org/wiki/Xiangqi) (or xiangqi 象棋).

By default, the project is under GPL-3.0 license. Libraries (like the Kotlin xiangqi-core or the
JavaScript [board-gui](https://elephantchess.io/about/developers/board-gui-example)) are under LGPL-3.0 license to allow
for a more permissive use (i.e. to re-use the libraries in a commercial application).

The releases and tags are only ever used to version the…
