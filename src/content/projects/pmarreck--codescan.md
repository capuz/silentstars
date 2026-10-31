---
repo: "pmarreck/codescan"
name: "codescan"
description: "Semantic code search and targeted edits for local repositories, all done locally (no cloud)."
readmeQualityOk: true
url: "https://github.com/pmarreck/codescan"
language: "Zig"
languages: ["Zig"]
languagePcts: [90]
stars: 31
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-23T17:18:05Z"
lastCommitAt: "2026-10-31T09:54:06Z"
lastReleaseAt: "2026-05-04T19:25:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["pmarreck"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f532d4234f6952d808609e90420ed1d13d5ea3b05e23babedd46a7bff150b6e/pmarreck/codescan"
---

# codescan

Semantic code search for local repositories.

- Zig CLI + HTTP API + MCP server
- Embedding providers: Ollama and OpenAI-compatible (oMLX, LiteLLM, vLLM);
  interactive setup recommends `jina-code-embeddings:1.5b`
- sqlite-vec vector storage
- Hybrid search (vector + lexical)
- Symbol extraction: Zig, C/C++, TypeScript/JavaScript, Rust, Elixir, Bash,
  Lua, Nix, Nim, Lean, Idris, Haskell, Go, Ruby, Erlang, OCaml, Swift,
  LLVM IR, Clojure, Assembly, Fish, Nushell, PowerShell, Tcl, Oil, F#,
  Elm, Gleam, Scheme, Racket, Common Lisp, Standard ML, WAT, and Roc
- LSP (references, rename): available where a language server is configured;
  run `codescan help lsp` for the current adapter list
- Markdown/text/log indexing with semantic chunking

## Install

### With Nix

```bash
# Run directly without installing
nix run github:pmarreck/codescan -- search "your query"

# Install to your profile
nix profile install github:pmarreck/codescan
```

### Pre-built binaries (no Nix required)

Pre-built binaries for Linux (x86_64, arm64) and macOS (arm64) are available as
artifacts from the latest CI build:

**[Download from GitHub…
