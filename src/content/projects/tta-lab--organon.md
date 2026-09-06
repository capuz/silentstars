---
repo: "tta-lab/organon"
name: "organon"
description: "Structure-aware tools for AI agents. Tree-sitter code editing, web page navigation, search. No daemon, no JSON, just stdin."
readmeQualityOk: true
url: "https://github.com/tta-lab/organon"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["dsh-plugin", "mcp-server", "pi-extension"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-03-18T05:29:28Z"
lastCommitAt: "2026-09-06T06:49:03Z"
lastReleaseAt: "2026-08-13T13:34:51Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 57
maintainers: ["birdmanmandbir", "orga-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0b38b0b7238c2b978c6c03bbb2e89b67f13e38fd41d3fd44b359f946c87895b/tta-lab/organon"
---

# organon

Structure-aware tools for AI agents, plus small workflow CLIs used in the tta-lab workspace.

Organon provides commands that give [logos](https://github.com/tta-lab/logos) agents structured perception of code, running inside a [temenos](https://github.com/tta-lab/temenos) sandbox.

```
$ src main.go --tree
├── [aE] func main()               [L1-L15]
├── [bK] func handleRequest()      [L17-L45]
└── [c3] type Config struct        [L47-L55]

$ src main.go -s bK
func handleRequest(w http.ResponseWriter, r *http.Request) {
    ...
}

$ src replace main.go -s bK <<'EOF'
func handleRequest(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()
    // new implementation
}
EOF
```

## Commands

### `src` — Source files

Read and edit code, config, and docs by symbol. Tree-sitter parses the file into an AST, assigns each symbol a 2-char ID, and you reference symbols by ID — no text matching, no multiline quoting problems.

```bash
src main.go --tree                      # symbol tree with IDs and line ranges
src main.go -s bK                       # read a symbol by ID
src replace main.go -s bK <<'EOF'       # replace a symbol (stdin)
...
EOF
src insert main.go --after…
