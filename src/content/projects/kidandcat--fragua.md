---
repo: "kidandcat/fragua"
name: "fragua"
description: "AI-native PCB design tool. The agent designs the board, the human watches and steers. Schematic → routing → fab-ready zip in one loop."
readmeQualityOk: true
url: "https://github.com/kidandcat/fragua"
homepage: "https://kidandcat.github.io/fragua/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["agent", "ai", "autorouter", "eda", "gerber", "jlcpcb", "mit-license", "pcb", "placement", "kicad-alternative"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-06T11:03:20Z"
lastCommitAt: "2026-11-14T22:01:19Z"
lastReleaseAt: "2026-05-26T23:14:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 49
maintainers: ["kidandcat", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c7a5ff5b86ee9fb7d1391b789526206a59fbea7c2d1ab993d1581f49cfc0e92/kidandcat/fragua"
discussionCount: 0
---

# fragua

AI-native PCB design tool. The agent does the work, the human watches and steers.

Pure Go: one static binary, local HTTP API, UI in the browser. No Rust, no Tauri, no Node.

```sh
go test ./...
go build -o fragua ./cmd/fragua
./fragua run path/to/board.fragua
# API + UI: http://127.0.0.1:7878  (FRAGUA_API_ADDR, FRAGUA_NO_BROWSER)
```

Cross-compile: `CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o fragua-linux ./cmd/fragua`.

- 🌐 Landing: <https://fragua.cloud>
- 🧭 [VISION.md](https://github.com/kidandcat/fragua/blob/HEAD/VISION.md) — what we are building and why
- 🏗️ [ARCHITECTURE.md](https://github.com/kidandcat/fragua/blob/HEAD/ARCHITECTURE.md) — packages and data flow
- 🤝 [CONTRIBUTING.md](https://github.com/kidandcat/fragua/blob/HEAD/CONTRIBUTING.md) — how to help

## Status

Agent loop: schematic → board → JLCPCB-ready zip.

- `internal/core`: project model (schematic, board, library, pours, rule areas, stackup), nm fixed-point geometry, JSON persistence (`.fragua`; legacy `.json` still loads).
- `internal/script`: line-oriented agent DSL — `lib`, `sym`, `net`, `place`, `auto-place`, `route`, `compact`, `rule-area`, `fab-rules`, `layer`, `escape`, `erc`,…
