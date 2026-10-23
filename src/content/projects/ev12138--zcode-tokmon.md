---
repo: "EV12138/zcode-tokmon"
name: "zcode-tokmon"
description: "Tokmon — ZCode token usage & generation-rate monitor (local + SSH remote), zero-intrusion."
originalDescription: "Tokmon — ZCode token usage & generation-rate monitor (local + SSH remote), zero-intrusion."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/EV12138/zcode-tokmon"
homepage: "https://github.com/EV12138/zcode-tokmon"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 33]
topics: ["ai-tools", "mcp", "monitoring", "ssh", "token-usage", "zcode", "zcode-plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-18T05:59:14Z"
lastCommitAt: "2026-10-23T08:47:47Z"
lastReleaseAt: "2026-10-23T08:47:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["EV12138"]
openGraphImageUrl: "https://opengraph.githubassets.com/135c43292bb9b1e3ae69defcd31c6c45257062a4bff2b9436bf5ffff3a0e5e91/EV12138/zcode-tokmon"
---

# Tokmon

**ZCode Token Monitor** — A token usage and generation rate monitoring plugin for both local and SSH remote hosts.

> **English** — Tokmon is a ZCode plugin that monitors token usage and generation throughput on your machine and across SSH remote hosts. Core features (MCP tool, slash commands, terminal dashboard) never modify client files; the floating status bar is opt-in and can be removed byte-for-byte.

Tokmon (**Tok**en **Mon**itor) turns ZCode's token consumption and generation speed into data that is always visible, queryable, and aggregatable across machines: local sessions, SSH remote hosts, sub-agents, and today's totals. One status bar, one MCP tool, and one terminal panel give you full visibility into all of it.

## Why Tokmon

- **Zero intrusion at the core**: The MCP tool, the `/usage` command, and the `/usage-watch` terminal panel do not modify ZCode client files.
- **SSH remote is a first-class citizen**: It is not an "add-on query" but runs on the same data pipeline as local. Sessions are routed precisely by session ID, and if the local database has no match, the query is handed off to the remote host.
- **Automatic remote deployment**: On the first…
