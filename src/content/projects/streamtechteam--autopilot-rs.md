---
repo: "streamtechteam/autopilot-rs"
name: "autopilot-rs"
description: "an automation tool written in rust with the goal of being easy to use and cross plaform"
readmeQualityOk: true
url: "https://github.com/streamtechteam/autopilot-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 17
forks: 3
openIssues: 14
closedIssues: 28
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-01-30T07:41:38Z"
lastCommitAt: "2026-11-07T16:11:43Z"
lastReleaseAt: "2026-02-14T10:47:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 52
maintainers: ["streamtechteam"]
openGraphImageUrl: "https://opengraph.githubassets.com/27ea1c9556d48fa1205cc8f0e8669628989e6a5e269a6e28ff99414f5933e03c/streamtechteam/autopilot-rs"
---

# AutoPilot-rs

A cross-platform automation tool that runs tasks when conditions are met. Write a job once and run it on Linux, macOS, and Windows.

AutoPilot-rs is a small, local-first scheduler for things like "sync my files when I am on my home WiFi", "open my work apps on weekday mornings", or "run a backup when the machine is idle and charging".

## Important Note

The project license changed from MIT to GPL-3.0-or-later.

## Features

- **Condition-based jobs** — 14 condition types covering WiFi, Bluetooth, power, CPU/memory, processes, files, disks, screens, and more.
- **Flexible schedules** — run immediately, once, daily, weekly, monthly, yearly, or with a cron expression.
- **Configurable task execution** — run a job's shell commands concurrently, sequentially, or stop at the first failure.
- **JSON/JSONC job files** — human-readable files stored under your configuration directory.
- **Three interfaces** — CLI, HTTP API, and a native GUI.
- **Cross-platform** — Linux, macOS, and Windows backends for the built-in conditions.

## How it works

```jsonc
{
  "id": "morning-setup",
  "name": "Set up my workday",
  "when": { "type": "daily", "trigger": { "time": "08:00" } },…
