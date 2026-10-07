---
repo: "A158Coke/WotbTools"
name: "WotbTools"
description: "Wotb tool Set"
originalDescription: "Wotb tool Set"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/A158Coke/WotbTools"
homepage: "https://wotbtools.com/"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [38, 30]
topics: ["wotblitz"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-06-22T22:17:57Z"
lastCommitAt: "2026-10-07T10:30:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["fanypcd", "DRKTCoke", "A158Coke"]
openGraphImageUrl: "https://opengraph.githubassets.com/16d06b06db6b4aea764797203ba3ec47f406a69d7b1fb7fccfb4f88c7ad03de0/A158Coke/WotbTools"
---

# WoTBTools

World of Tanks Blitz replay tool set: parse `.wotbreplay` battle data, provide Excel export, online damage rankings, battle performance analysis (contribution / KAST / Impact and other derived metrics), AI tactical review (individual / team) and Keycloak authentication.

Entry point: [https://wotbtools.com](https://wotbtools.com) · Repository: [https://github.com/A158Coke/WotbTools](https://github.com/A158Coke/WotbTools)

## What It Does

On Android, replays opened from the file manager are automatically parsed locally (no login required, replays are not uploaded); if reading fails, you can retry. See [Android replay handoff](https://github.com/A158Coke/WotbTools/blob/HEAD/docs/android/replay-intent.md).

The replay workbench permanently displays data, 2D replay, 3D replay, shooting analysis, and AI review. Data and 2D are available anonymously; 3D, shooting analysis/armor recreation, and AI are available after login. Regular users and administrators have the same capabilities.

- **Replay parsing and Excel export**: Browser-native parsing of `.wotbreplay` (upstream Rust Core WASM, files are not uploaded), extracting authoritative settlement (damage / damage taken /…
