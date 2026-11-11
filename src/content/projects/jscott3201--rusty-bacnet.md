---
repo: "jscott3201/rusty-bacnet"
name: "rusty-bacnet"
description: "BACnet 2020 - Rust core with full Rust and Python API"
readmeQualityOk: true
url: "https://github.com/jscott3201/rusty-bacnet"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 33
forks: 18
openIssues: 54
closedIssues: 1337
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2026-03-05T20:41:24Z"
lastCommitAt: "2026-11-11T19:49:18Z"
lastReleaseAt: "2026-05-08T17:51:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 51
maintainers: ["jscott3201"]
openGraphImageUrl: "https://opengraph.githubassets.com/174a8bc250745fc3ad895dab622d9c7ca7fe3c77f6ce450b9a541e18d34c9cdb/jscott3201/rusty-bacnet"
---

# Rusty BACnet

A BACnet protocol stack written in Rust, with Python bindings, a command-line
tool with a terminal UI, and an MCP server for AI agent hosts. Use it to build
BACnet clients, model devices and serve their objects, or explore a network in a
local lab. It targets ASHRAE Standard 135-2020 and isn't BTL certified.

**[Documentation](https://jscott3201.github.io/rusty-bacnet/)** ·
**[Rust API](https://docs.rs/bacnet-client)** ·
**[Python API](https://github.com/jscott3201/rusty-bacnet/blob/HEAD/docs/python-api.md)**

> [!IMPORTANT]
> The packages, the website and docs.rs describe release **0.15.0**; this README
> and [`docs/`](https://github.com/jscott3201/rusty-bacnet/blob/HEAD/docs/) follow `dev`. It is pre-1.0, so APIs change between minor
> releases. Use it only on networks you are authorized to access: discovery
> sends traffic, writes change real equipment, and it makes no physical-safety
> guarantee.

## What you can build

| Surface | What it gives you | Start here |
|---|---|---|
| Rust client and server | Tokio roles: discovery, segmentation, COV, alarms, and an object database with the standard object types | [Rust…
