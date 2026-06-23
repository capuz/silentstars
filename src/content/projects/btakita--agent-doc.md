---
repo: "btakita/agent-doc"
name: "agent-doc"
description: "Interactive document sessions with AI agents"
url: "https://github.com/btakita/agent-doc"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 5
forks: 1
openIssues: 24
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T16:35:53Z"
lastCommitAt: "2026-06-23T23:27:28Z"
lastReleaseAt: "2026-02-25T23:28:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 43
maintainers: ["btakita"]
openGraphImageUrl: "https://opengraph.githubassets.com/33d945e32bcf05ee0425de198406c0709d0500dc0d0406ecdf1630e97590a4e9/btakita/agent-doc"
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
# From crates.io
cargo install agent-doc

# From PyPI
pip install agent-doc

# From a local source checkout
cargo install --path src/agent-doc --force

# Or from inside src/agent-doc
cargo install --path . --force
```

## Quick Start

```sh
# 1. Initialize project (creates .agent-doc/ and installs SKILL.md)
agent-doc init

# 2. Scaffold a session document
agent-doc init session.md "My Topic"

# 3. Claim the document to the current tmux pane
agent-doc claim session.md

# 4. Route hotkey triggers to the correct tmux pane
agent-doc route --dispatch-only…
