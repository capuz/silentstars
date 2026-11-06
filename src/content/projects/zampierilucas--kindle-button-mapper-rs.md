---
repo: "zampierilucas/kindle-button-mapper-rs"
name: "kindle-button-mapper-rs"
description: "Kindle button mapper written in Rust"
readmeQualityOk: true
url: "https://github.com/zampierilucas/kindle-button-mapper-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [64]
stars: 48
forks: 6
openIssues: 3
closedIssues: 27
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2025-12-12T13:52:18Z"
lastCommitAt: "2026-11-06T11:23:48Z"
lastReleaseAt: "2026-08-17T23:49:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 51
maintainers: ["zampierilucas", "brylee123", "giusepped"]
openGraphImageUrl: "https://opengraph.githubassets.com/0837f1bcc9ff59b455d9e5c4c7753be173261235ccb0e0b71034fb8f07ff4078/zampierilucas/kindle-button-mapper-rs"
---

# Kindle Button Mapper

A Rust-based Linux input device event mapper for Kindle e-readers. Maps button presses from input devices to shell scripts.

## Features

- Map buttons to shell scripts
- Page turns and reader controls for both the native Kindle reader and KOReader
- Long press support with separate actions
- Auto-repeat when buttons are held
- Recorded stick/touch gestures, bound by name
- Debouncing to prevent double-triggers
- Auto-reconnect on device disconnect
- Optional exclusive device grab
- Non-US keyboard layout via XKB override, with optional Alt+Shift toggle

## On-device UI

| Bindings | Device | Debug | Action picker |
|---|---|---|---|
|  |  |  |  |

A touchscreen UI for editing mappings without SSH lives in `illusion/MapperManager/`. The daemon stays a plain runtime — the WAF app spawns a `--waf-helper` HTTP server (localhost:8322) only while the app is open, edits `config.ini`, and restarts the daemon via `initctl restart kindle-button-mapper`.

Deploy and register:

```bash
just deploy        # ship the binary + config + init script
just deploy-waf    # ship the illusion/ app, restart helper, launch WAF
ssh kindle "sh…
