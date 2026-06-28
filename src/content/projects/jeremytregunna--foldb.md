---
repo: "jeremytregunna/foldb"
name: "foldb"
description: "The database that is a log, and all operations are `fold(log)`."
url: "https://github.com/jeremytregunna/foldb"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
stars: 48
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-23T20:28:23Z"
lastCommitAt: "2026-06-28T01:33:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 32
maintainers: ["jeremytregunna"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1219384705/425dd8e9-c893-42cc-933d-1c826501f864"
---

# foldb

A replicated, deterministic state machine key-value store written in Zig. The log is the source of truth; state is `fold(log)` — a pure function cached in an LSM tree. One global sequence number, no wall clocks inside the fold.

> **Status**: single-node is stable. Multi-node replication (Raft transport) is in active development.

## Requirements

[Zig](https://ziglang.org/) 0.16.0

## Building

```bash
zig build                              # build
zig build test                         # unit + integration tests
```

## Running

```bash
foldb serve --config config.json
```

### Interactive REPL

```bash
foldb repl --host 127.0.0.1 --port 7432
```

Supports commands: `set <key> <value>`, `get <key>`, `delete <key>`, `range <start> <end>`, `batch <file.json>`, and `exit`.

### Full-featured Client

```bash
foldb client --host 127.0.0.1 --port 7432 --command get --key "mykey"
foldb client --host 127.0.0.1 --port 7432 --command set --key "mykey" --value "myvalue"
```

## Configuration

```jsonc
{
  "storage_dir": "/var/lib/foldb",   // required — where data is stored
  "node_id": 1,                      // unique integer per node in the cluster
  "listen_addr": "0.0.0.0",…
