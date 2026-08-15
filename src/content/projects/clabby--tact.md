---
repo: "clabby/tact"
name: "tact"
description: "A terminal interface for Nanocodex"
readmeQualityOk: true
url: "https://github.com/clabby/tact"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["agent", "codex", "llm", "openai", "rust", "tui", "ai", "ai-agent"]
stars: 82
forks: 10
openIssues: 2
closedIssues: 25
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-07-17T01:42:32Z"
lastCommitAt: "2026-08-15T04:04:10Z"
lastReleaseAt: "2026-08-02T15:19:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 39
maintainers: ["clabby", "andresilva", "dghelm"]
openGraphImageUrl: "https://opengraph.githubassets.com/53d5185a1218b2b6e2b67d6e4bc351611d60fb3a5c187649cb370eddc6d0a65e/clabby/tact"
---

# tact

`tact` is a terminal interface for [Nanocodex](https://github.com/gakonst/nanocodex).

<https://github.com/user-attachments/assets/5c634ae8-5c74-47c9-bb8c-9c18cb7fc97d>

## Execution environment

Tact does not sandbox agent commands by default. The agent can read and modify files and run
processes with the same permissions as the user running Tact. For a containerized, credential-
isolated setup, see the example [development environment](https://github.com/clabby/tact/blob/HEAD/docker/dev/README.md), which keeps real
OpenAI credentials outside the development container while mounting the workspace and Tact state
read-write.

## Installation

The release installer supports x86-64 and ARM64 glibc-based Linux, as well as Intel and Apple
Silicon Macs:

```sh
curl --proto '=https' --tlsv1.2 -LsSf \
  https://tact.clab.by/install.sh | sh
```

It verifies the release checksum and installs `tact` in `~/.local/bin` without `sudo`. Set
`TACT_INSTALL_DIR` to another absolute directory if you prefer a different location.

You can also install the published crate with Cargo:

```sh
cargo install tact --locked
```

To build the current source instead:

```sh
git clone…
