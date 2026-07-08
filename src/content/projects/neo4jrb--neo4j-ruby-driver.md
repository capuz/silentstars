---
repo: "neo4jrb/neo4j-ruby-driver"
name: "neo4j-ruby-driver"
description: "Neo4j Ruby Driver"
readmeQualityOk: true
url: "https://github.com/neo4jrb/neo4j-ruby-driver"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [97]
stars: 51
forks: 31
openIssues: 21
closedIssues: 38
watchers: 8
contributors: 7
recentReleases: 0
createdAt: "2018-11-26T03:55:18Z"
lastCommitAt: "2026-07-08T05:42:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 54
maintainers: ["klobuczek"]
openGraphImageUrl: "https://opengraph.githubassets.com/6248674479ae9f44ac694761e45415aa210f9aa13e9ab91106e384b97b4c4702/neo4jrb/neo4j-ruby-driver"
---

# Neo4j Ruby Driver

A clean, modern implementation of the Neo4j Bolt protocol driver for Ruby, built from the ground up based on the official [Bolt Protocol Specification](https://neo4j.com/docs/bolt/current/).

## Features

- ✅ **Clean Implementation**: Built from scratch without legacy code or dependencies
- ✅ **Bolt Protocol 5.x Support**: Implements the latest Bolt protocol specifications
- ✅ **PackStream Serialization**: Full implementation of PackStream binary format
- ✅ **Complete Type System**: Support for all Neo4j types (Node, Relationship, Path, temporal types, Point, etc.)
- ✅ **Transaction Management**: Auto-commit, explicit transactions, and managed transaction functions
- ✅ **Session Management**: Full session lifecycle with bookmarks for causality
- ✅ **Connection Pooling**: Basic connection pooling for performance
- ✅ **Ruby-idiomatic API**: Follows Ruby conventions and best practices

## Architecture

The driver is organized into clean, modular layers:

```
lib/neo4j/driver/
├── packstream/           # PackStream serialization (binary protocol)
│   ├── packer.rb        # Encodes Ruby objects to PackStream
│   ├── unpacker.rb      # Decodes PackStream to Ruby…
