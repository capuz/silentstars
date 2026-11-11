---
repo: "BrunoO/FindHelper"
name: "FindHelper"
description: "Cross-platform file search application (C++17, ImGui)"
readmeQualityOk: true
url: "https://github.com/BrunoO/FindHelper"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 4
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-07T08:58:53Z"
lastCommitAt: "2026-11-11T19:46:20Z"
lastReleaseAt: "2026-10-18T14:21:41Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 31
maintainers: ["BrunoO"]
openGraphImageUrl: "https://opengraph.githubassets.com/56065c0e4f3c41e3472c7f1dc42adb244d4fc712e51dbe017507c20f9d8c95c6/BrunoO/FindHelper"
---

# FindHelper

A high-performance, cross-platform file search application built with modern C++17, Dear ImGui, and unique **Structured S-Expression Regex (`rx:`)** alongside AI-assisted search. Instantly index drives, filter with intuitive composable expressions or standard regex, and navigate millions of files in real time.

## Highlights & Signature Features

- ⚡ **Instant Indexing**: Windows NTFS USN Journal & MFT parsing for millisecond-scale full-drive enumeration, with high-speed multithreaded directory crawling on macOS & Linux.
- 💡 **Structured S-Expression Regex (`rx:`)**: A **game-changing, human-readable regex dialect** inspired by Emacs `rx`. Build complex, self-documenting search queries with native path semantics (`dir`, `exclude-dir`, `ext`, `name`), zero backslash escaping, and real-time UI syntax feedback (cyan/amber/red indicators + compiled previews).
- 🤖 **AI-Assisted Search**: Describe what you want in plain English and let Google Gemini, OpenCode, OpenAI, or Ollama translate your query into optimal search parameters.
- 🎯 **Multi-Paradigm Matching**: Plain substring, glob wildcards (`*`, `?`), whole-path glob patterns (`pp:**`), full ECMAScript regex…
