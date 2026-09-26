---
repo: "crabtalk/cydonia"
name: "cydonia"
description: "Where agents keep their work."
readmeQualityOk: true
url: "https://github.com/crabtalk/cydonia"
homepage: "https://cydonia.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["acp", "agents", "desktop", "gpui", "rust"]
stars: 101
forks: 9
openIssues: 11
closedIssues: 20
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-15T18:55:20Z"
lastCommitAt: "2026-09-26T08:46:18Z"
lastReleaseAt: "2026-09-18T20:05:59Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 30
maintainers: ["clearloop"]
openGraphImageUrl: "https://opengraph.githubassets.com/898e329c4f3e27053c1c43891755a15f6cb7732fe438c4e3957d012c371b542a/crabtalk/cydonia"
fundingLinks: ["GITHUB:https://github.com/crabtalk"]
---

# Cydonia

https://github.com/user-attachments/assets/dfe51807-a24a-49f0-b702-918c317ee21d

A desktop workspace for the coding agents you run. Open a directory as a
project, put any agent that speaks [ACP](https://agentclientprotocol.com) to work
in it, and keep what comes out as durable artifacts on disk — articles, boards
and tables, not a chat log.

```sh
cargo install cydonia
cydonia
```

> [!NOTE]
> A fresh install includes articles, sessions and boards. Tables are opt-in. One
> agent in one project is solid; several of them working that project is what is
> being built.

## Features

Configure features in **Settings › Features** or in
`~/.config/cydonia/settings.toml`:

```toml
[features]
sessions = true    # agent conversations
boards = true      # cards in columns
tables = false     # structured records
```

`sessions` gates agents as much as it gates the pane — a session is the only
thing that starts one, and an agent is a package this machine downloads and
runs. Turning a feature off hides it; nothing on disk is deleted.

## Agents

Install one from the ACP registry in **Settings › Agents**, or write it into
`~/.config/cydonia/settings.toml` yourself:

```toml
[[agents]]…
