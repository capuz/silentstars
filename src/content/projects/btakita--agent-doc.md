---
repo: "btakita/agent-doc"
name: "agent-doc"
description: "Interactive document sessions with AI agents"
readmeQualityOk: true
url: "https://github.com/btakita/agent-doc"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 24
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T16:35:53Z"
lastCommitAt: "2026-07-16T05:59:42Z"
lastReleaseAt: "2026-02-25T23:28:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 43
maintainers: ["btakita"]
openGraphImageUrl: "https://opengraph.githubassets.com/381e474e284f86cb7c85c5436abd07d3f688c8abc7adc1eb5ecdbb23419715a3/btakita/agent-doc"
---

# agent-doc

Interactive document sessions with AI agents.

Edit a markdown file, press a hotkey, and the tool diffs your changes, sends them to an AI agent, and writes the response back into the document. The document is the UI.

> **Alpha Software** — actively developed; APIs and frontmatter format may change between versions.

> **Single-user only.** agent-doc operates on the local filesystem with no access control. Use a private git repository. See the [Security](#security) section for details.

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/btakita/agent-doc/main/install.sh | sh
```

**Alternatives:**

```sh
# From PyPI
pip install agent-doc

# From a local source checkout
cargo install --path src/agent-doc --force

# Or from inside src/agent-doc
cargo install --path . --force
```

The Rust workspace is an implementation detail: every agent-doc Cargo package is
marked `publish = false`. New releases ship through GitHub Releases and PyPI;
older crates.io uploads remain as immutable historical artifacts.

## Quick Start

```sh
# 1. Initialize project (creates .agent-doc/ and installs SKILL.md)
agent-doc init

# 2. Scaffold a session document
agent-doc init…
