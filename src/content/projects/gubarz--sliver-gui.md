---
repo: "Gubarz/sliver-gui"
name: "sliver-gui"
description: "A fast, reactive graphical interface for managing Sliver C2 operations, powered by Wails and Svelte."
readmeQualityOk: true
url: "https://github.com/Gubarz/sliver-gui"
language: "Svelte"
languages: ["Svelte", "Go"]
languagePcts: [47, 31]
topics: ["automation", "client", "go", "gui", "sliver", "svelete", "sliver-client", "sliver-gui", "c2", "offensive-security"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-15T05:21:17Z"
lastCommitAt: "2026-07-21T06:12:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 23
maintainers: ["Gubarz"]
openGraphImageUrl: "https://opengraph.githubassets.com/62ae555940fc9c15b50e42c57ce5fb63ba59f9b2d491c5b5e5e0e69608482b4a/Gubarz/sliver-gui"
---

# Sliver GUI

A desktop operator workbench for the [Sliver](https://github.com/BishopFox/sliver) C2 framework, built with [Wails v2](https://wails.io), Go, Svelte 5, Vite, and Tailwind CSS.

**Authorized use only.** This is an offensive-security tool. Use it solely on systems you own or have explicit written permission to test.

## What It Is

`sliver-gui` wraps the Sliver client RPC surface in a native desktop shell. The Go backend owns the Sliver RPC client, long-lived streams, subprocess consoles, local files, and Wails bindings. The Svelte frontend provides the operator workspace, server management panels, command palette, automation editor, and app state.

The app starts disconnected. Import or select a Sliver client config, connect to a teamserver, then work from the main views:

- **Agents:** sessions, beacons, network graph, per-agent tabs, interactive consoles, file/process/registry/service tooling, tunneling, tags, notes, and command modals.
- **Server:** listeners, jobs, implant generation, profiles, build history, build farm, loot, credentials, hosts, operators, pivots, HTTP C2, websites, staging, traffic/shellcode encoders, monitoring providers, cracking, events, and…
