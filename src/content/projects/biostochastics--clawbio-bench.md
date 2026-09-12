---
repo: "biostochastics/clawbio_bench"
name: "clawbio_bench"
description: "Standalone Python audit suite that evaluates the agentic bioinformatics tools suite ClawBio for safety, security, and correctness. "
readmeQualityOk: true
url: "https://github.com/biostochastics/clawbio_bench"
homepage: "https://github.com/biostochastics/clawbio_bench"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["audit", "bioinformatics", "compbio", "python", "safety", "security", "clawbio"]
stars: 5
forks: 1
openIssues: 152
closedIssues: 9
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-05T07:19:33Z"
lastCommitAt: "2026-09-12T08:06:02Z"
lastReleaseAt: "2026-04-05T07:21:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59a1172e0cb5f68989d7418c4e7f6746cd92fe992af63f72df74bc6a74f8bbac/biostochastics/clawbio_bench"
---

# clawbio_bench

```
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠉⠉⠈⠉⠉⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⢀⣠⣤⣤⣤⣤⣤⣤⣄⡀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠈⠻⣿⣿⣿⣿⣿⣿   ██████ ██       █████  ██     ██ ██████  ██  ██████
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⣠⣾⣿⣿⣿⣿⡿⢿⠛⡟⢿⣿⣿⣿⣿⣷⠀⠀⢹⣿⣿⣿⣿⣿  ██      ██      ██   ██ ██     ██ ██   ██ ██ ██    ██
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⣿⣿⣿⣿⣿⡿⡋⠃⠈⠀⠀⠈⠈⢻⣿⣿⣿⠀⠀⠀⣿⣿⣿⣿⣿  ██      ██      ███████ ██  █  ██ ██████  ██ ██    ██
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡃⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣻⣿⣿⣿⣿  ██      ██      ██   ██ ██ ███ ██ ██   ██ ██ ██    ██
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠹⣿⣿⣿⣿⣿⣦⡂⡀⠀⠀⠀⠀⠀⣰⣶⣶⣶⠀⠀⠀⣿⣿⣿⣿⣿   ██████ ███████ ██   ██  ███ ███  ██████  ██  ██████
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠉⠻⣿⣿⣿⣿⣿⣧⣼⣀⣆⣼⣾⣿⣿⣿⣿⠀⠀⢰⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠘⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⣠⣿⣿⣿⣿⣿⣿          ██████  ███████ ███    ██  ██████ ██   ██
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⣿⣿⣄⡀⠀⠈⠙⠻⠿⠿⠿⠿⠿⠿⠟⠋⠀⣀⣼⣿⣿⣿⣿⣿⣿⣿          ██   ██ ██      ████   ██ ██      ██   ██
⣿⣿⣿⣿⣿⣿⣿⠿⠃⠀⢀⣼⣿⣿⣿⣦⣄⣀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿          ██████  █████   ██ ██  ██ ██      ███████
⣿⣿⣿⣿⣿⠟⠉⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿          ██   ██ ██      ██  ██ ██ ██      ██   ██
⣿⣿⡿⢋⠁⢀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿  ███████ ██████  ███████ ██   ████  ██████ ██   ██
⢟⠉⠀⣠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
```

> **What this is.** `clawbio_bench` is a **standalone Python audit suite**…
