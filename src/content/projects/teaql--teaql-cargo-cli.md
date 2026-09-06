---
repo: "teaql/teaql-cargo-cli"
name: "teaql-cargo-cli"
description: "Rust client to accessing teaql packaging services"
readmeQualityOk: true
url: "https://github.com/teaql/teaql-cargo-cli"
homepage: "http://teaql.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ontology", "rust-lang", "vibe-coding", "ai-coding", "cargo", "cli", "code-generation", "developer-tools", "rust", "teaql"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-25T23:12:22Z"
lastCommitAt: "2026-09-06T08:05:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 60
maintainers: ["philipgreat"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4317af6aae567d5c5f15676657d2cbc59bf03f505186f6730ddb4296050b564/teaql/teaql-cargo-cli"
---

# teaql-cli

Rust CLI for evaluating TeaQL semantic models, generating language-native
libraries and workspaces, and discovering generated APIs through model-aware
Assist.

## Commands

```bash
# Discover the targets currently offered by the service.
cargo teaql services

# Evaluate before generation.
cargo teaql evaluate --input models/

# Generate a library or runnable workspace.
cargo teaql rust-lib-core --input models/ --output build/
cargo teaql java-app-console --input models/ --output build/

# Discover the generated API progressively.
cargo teaql rust-assist-query/school --input models/
cargo teaql rust-assist-query/school.established_date --input models/

# Local maintenance commands.
cargo teaql show-config
cargo teaql config
cargo teaql ping
cargo teaql check --tests
```

Generation and Assist targets are provided dynamically by the TeaQL service,
so the fixed `Commands` list in `--help` is not their complete inventory. Run
`cargo teaql services` to discover the current targets and `cargo teaql version`
to inspect their versions.

Use `--input` for the KSML model file or directory. A dynamic target with model
input performs evaluation, generation, or Assist; a remote…
