---
repo: "xiaoxu4452/Meter-Gomoku-AI-trainer-Line-Version"
name: "Meter-Gomoku-AI-trainer-Line-Version"
description: "Meter Gomoku is a Gomoku (Five in a Row) study and training tool that runs on your own computer."
readmeQualityOk: true
url: "https://github.com/xiaoxu4452/Meter-Gomoku-AI-trainer-Line-Version"
homepage: "https://xiaoxu4452.github.io/Meter-Gomoku/"
language: "C++"
languages: ["C++", "JavaScript"]
languagePcts: [74, 22]
topics: ["gomoku", "gomoku-ai", "gomoku-engine", "rapfi"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-10-20T01:32:42Z"
lastCommitAt: "2026-11-06T12:17:01Z"
lastReleaseAt: "2026-11-04T15:12:34Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 79
undervaluedScore: 61
maintainers: ["01arcticfox", "xiaoxu4452"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf4f0632518e30d1261a0c9efbfd422c3095a5e52f4261759d599559dc45795f/xiaoxu4452/Meter-Gomoku-AI-trainer-Line-Version"
---

# Meter Gomoku — Line Version

**English** | [Chinese](https://github.com/xiaoxu4452/Meter-Gomoku-AI-trainer-Line-Version/blob/HEAD/README_zh.md)

A Windows desktop assistant for Gomoku / Renju. It **reads the board you are already playing on** — any third-party client, a web board or an emulator — keeps a mirror of the position, asks the bundled Rapfi engine for the best move, and can play it for you. This repository is the **Line (screen-recognition) version**: screen capture + always-on-top overlay + simulated clicks. It is not a stand-alone trainer.

> 📄 **Printable bilingual manual (PDF):** [docs/Meter-Gomoku-Manual.pdf](https://github.com/xiaoxu4452/Meter-Gomoku-AI-trainer-Line-Version/blob/HEAD/docs/Meter-Gomoku-Manual.pdf)

Engine: **Rapfi 0.44.1** (mix9 NNUE shipped, mix10 in source) · the version number follows the newest release on the Releases page

---

## 1. What makes it different

| | |
|---|---|
| **Works with any client** | No hooks, no DLL injection, no memory reading. It only takes screenshots and simulates clicks, so it never touches the other program's internals. |
| **Locked-geometry recognition** | The 15×15 grid is located once and then **locked**;…
