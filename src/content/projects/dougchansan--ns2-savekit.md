---
repo: "dougchansan/ns2-savekit"
name: "ns2-savekit"
description: "read/write switch2 save data through a ns2jb session. run lua inside lullaby without a switch 1."
readmeQualityOk: true
url: "https://github.com/dougchansan/ns2-savekit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["artemis", "lua", "reverse-engineering", "save-data", "switch2"]
stars: 57
forks: 10
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-10-27T03:05:01Z"
lastCommitAt: "2026-11-01T22:59:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 37
maintainers: ["dougchansan"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb1d50e6c432ad9cf514a931a6ab1f3b746614f3bba0ba114a3c91ff13a0adc1/dougchansan/ns2-savekit"
---

# ns2-savekit

read, back up, restore and modify save data for **any Switch 2 title**, whether
it is installed, on a card, or has no card inserted, over a live
[ns2jb](https://gitlab.com/kurumuz/ns2jb) session. the save path is
not game-specific: it opens a title's save archive, moves files in or out,
commits, and verifies by hash.

the same access is then used for one more thing: an Artemis save can be
retargeted so the game resumes *our* Lua instead of its own script. that is the "save
launch" half (`payloads/`, `tools/artemis-save.py`); the save half works on any
title you own.

the exploit is **not** here. nothing in this repo is exploit code, keys, or game
content.

## what you need

- a **patched** `ns2jb` checkout (the local `~/ns2jb-rpc` checkout, or `run.cjs`
  from ns2jb), an exploit session held open, and the run folder it prints
  (`runs/switch2-XXXXXX`, containing `switch2/ro/root/current-root.json`).
- firmware 23.0.1 and SmileBASIC 4 (retail) to deliver the exploit.
- node (no npm install; nothing to build).

## quick start

```sh
# 0. patch the engine once, before the first run. the host copies engine/ into
#    every run folder at startup, so patch first, then…
