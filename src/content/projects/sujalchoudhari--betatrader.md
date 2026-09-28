---
repo: "SujalChoudhari/BetaTrader"
name: "BetaTrader"
description: "A inhouse trading environment, including all the logic of venues and gateways and clients"
readmeQualityOk: true
url: "https://github.com/SujalChoudhari/BetaTrader"
homepage: "https://sujalchoudhari.github.io/BetaTrader/"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-21T05:23:55Z"
lastCommitAt: "2026-09-28T10:06:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 47
maintainers: ["SujalChoudhari"]
openGraphImageUrl: "https://opengraph.githubassets.com/df76511c867044a28de51912588baf61cf56355d9777eee4199aa20994213bb7/SujalChoudhari/BetaTrader"
---

# BetaTrader | High-Performance FX Trading Engine {#mainpage}

Welcome to BetaTrader, a project and a C++ blueprint that explores how a small, exchange-like FX trading engine is put together.

This repository is a deliberate, step-by-step engineering exercise. It contains an in-memory matching core, a compact persistence layer, shared types, logging utilities, and a comprehensive suite of unit tests. The goal is to learn by building: the system is being constructed incrementally, one piece at a time.

This project is for developers, engineers, and curious traders who want a readable, runnable codebase to study matching semantics, order lifecycle, risk checks, and modern C++ development practices.

**Status**: The `common`, `exchange` suite (matching, persistence, fix gateway), and `client_fix` modules are all implemented and rigorously covered by unit tests. The system features a robust lock-free matching core, a decoupled asynchronous SQLite persistence layer, a functional FIX gateway with thread-safe CompID-based session management and persistent sequence numbers, and a working Dear ImGui client application with an embedded local exchange.

## Project Goals

*   **Learn by…
