---
repo: "SnakeDoc/yodel"
name: "yodel"
description: "A type-safe configuration loader for Gleam that supports JSON, YAML, and TOML with automatic format detection, environment variable resolution, and profile-based configuration."
readmeQualityOk: true
url: "https://github.com/SnakeDoc/yodel"
language: "Gleam"
languages: ["Gleam"]
languagePcts: [100]
topics: ["configuration", "configuration-management", "json", "profile-configuration", "toml", "yaml"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-28T18:36:28Z"
lastCommitAt: "2026-07-05T20:59:03Z"
lastReleaseAt: "2025-10-19T15:42:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 69
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03b9928857587dba0922429b85c30a6b67d3265effbe390cd194542e83f95ed/SnakeDoc/yodel"
---

# Yodel

### 🎶 Yo-de-lay-ee-configs! 

A type-safe configuration loader for Gleam that supports JSON, YAML, and TOML with automatic format detection,
environment variable resolution, and profile-based configuration. 🚀

```sh
gleam add yodel
```

```gleam
import yodel

pub fn main() {
  let assert Ok(config) = yodel.load("config.yaml")
  let assert Ok(db_host) = yodel.get_string(config, "database.host")
  let port = yodel.get_int_or(config, "database.port", 5432)
}
```

## Features

- **Multiple Formats** - Load JSON, YAML, or TOML with automatic format detection
- **Profile-Based Configuration** - Manage dev, staging, and production configs with separate files
- **Environment Variables** - Inject secrets and environment-specific values with `${VAR:default}` placeholders
- **Type-Safe** - Compile-time safety with helpful error messages
- **Dot Notation** - Access nested values with `"database.host"`

## Installation

```sh
gleam add yodel
```

## Quick Start

Yodel automatically detects the format from file extension or content:

```gleam
import yodel

pub fn main() {
  let assert Ok(config) = yodel.load("config.yaml")

  // Type-safe value access
  let assert Ok(host) =…
