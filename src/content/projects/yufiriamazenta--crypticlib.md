---
repo: "YufiriaMazenta/CrypticLib"
name: "CrypticLib"
description: "Minecraft server plugin development library that provides simple development tools"
readmeQualityOk: true
url: "https://github.com/YufiriaMazenta/CrypticLib"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["bukkit", "folia", "library", "minecraft", "spigot", "bungee"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-07T12:39:20Z"
lastCommitAt: "2026-11-01T10:44:43Z"
lastReleaseAt: "2023-11-18T13:00:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["YufiriaMazenta"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5d4c592ec2bd641afe5c9e9d9aca9e7583dce4b1d7c25d8ade1171fa53aef07/YufiriaMazenta/CrypticLib"
---

# CrypticLib

A Minecraft plugin development library that simplifies cross-platform plugin development for Bukkit, BungeeCord, and Velocity.

## Features

### Platform Layer

| Module | Artifact ID | Description |
|--------|-------------|-------------|
| **common** | `common`    | Core abstractions shared across all platforms |
| **bukkit** | `bukkit`    | Bukkit / Spigot / Paper / Folia adapter |
| **bungee** | `bungee`    | BungeeCord adapter |
| **velocity** | `velocity`  | Velocity adapter |

### Extension Modules

| Module | Artifact ID | Platform | Description |
|--------|------------|----------|-------------|
| **database** | `common-database` | Common | Built-in connection pool and plain JDBC connection sources, with H2 / MySQL / PostgreSQL / SQLite dialects |
| **script** | `common-script` | Common | Built-in scripting engine with lexer, parser, compiler, and VM |
| **compat** | `common-compat` | Common | Compatibility utilities |
| **ui** | `bukkit-ui` | Bukkit | GUI menu system with layout engine, icons, multi-page support |
| **conversation** | `bukkit-conversation` | Bukkit | Multi-step player conversation / prompt system with timeout |
| **i18n** | `bukkit-i18n` |…
