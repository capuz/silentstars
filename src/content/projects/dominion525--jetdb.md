---
repo: "dominion525/jetdb"
name: "jetdb"
description: "A pure Rust library for reading Microsoft Access databases (.mdb/.accdb)"
readmeQualityOk: true
url: "https://github.com/dominion525/jetdb"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["accdb", "cli", "database", "mdb", "microsoft-access", "rust"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-02-13T04:27:34Z"
lastCommitAt: "2026-10-23T09:33:29Z"
lastReleaseAt: "2026-09-13T14:14:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 63
maintainers: ["dominion525"]
openGraphImageUrl: "https://opengraph.githubassets.com/f76a6cb469c031c673dbf5a6b8d4aff504622a9ce85421957a2fa82cecc04320/dominion525/jetdb"
---

# jetdb

[日本語版 (Japanese)](https://github.com/dominion525/jetdb/blob/HEAD/README.ja.md)

A Rust library and CLI tool for reading Microsoft Access database files (.mdb / .accdb).

Written in pure Rust with no C/C++ dependencies or FFI, so it works out of the box on macOS, Windows, and Linux. Supports Access 97 (Jet3) through Access 2019 (ACE17).

## Installation

### CLI Tool

```bash
cargo install jetdb-cli
```

### As a Library

```toml
[dependencies]
jetdb = "0.3"
```

## CLI Usage

```bash
# Open a password-protected .accdb file
jetdb --password secret tables protected.accdb

# Show the database engine version
jetdb ver database.mdb

# List tables
jetdb tables database.mdb

# Show table schema (columns, indexes, relationships)
jetdb schema database.mdb
jetdb schema database.mdb -T Table1

# Generate DDL (SQLite / PostgreSQL / MySQL / Access)
jetdb schema database.mdb --ddl sqlite

# Export table data as CSV
jetdb export database.mdb Table1

# List saved queries / show SQL
jetdb queries list database.mdb
jetdb queries show database.mdb SelectQuery

# List VBA modules / show source code
jetdb vba list database.mdb
jetdb vba show database.mdb Module1

# List forms and reports /…
