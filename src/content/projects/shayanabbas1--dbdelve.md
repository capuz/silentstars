---
repo: "ShayanAbbas1/dbdelve"
name: "dbdelve"
description: "Fast and lightweight DB Client made in Rust and GPUI."
readmeQualityOk: true
url: "https://github.com/ShayanAbbas1/dbdelve"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["database", "dbclient", "developer-tools", "gpui", "local-first", "mysql", "open-source", "postgresql", "rust", "sql"]
stars: 164
forks: 13
openIssues: 5
closedIssues: 8
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-08-17T14:41:16Z"
lastCommitAt: "2026-10-03T22:04:42Z"
lastReleaseAt: "2026-09-25T23:52:06Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 92
undervaluedScore: 31
maintainers: ["ShayanAbbas1", "timvancann", "0PandaDEV"]
openGraphImageUrl: "https://opengraph.githubassets.com/a46d3468429bee2d788731ef5938438a2e048ccf3fd38d548bfabab687d744d5/ShayanAbbas1/dbdelve"
discussionCount: 2
---

# DBDelve

A fast, native database client for Postgres, MySQL, SQLite, Snowflake and SQL
Server, on macOS, Linux and Windows. Written in Rust with GPUI, with no
Electron and no JVM, so it starts quickly, uses little memory and keeps
scrolling smoothly through a million-row table.

> Early days. Everything listed below works today.

A table of a million rows, scrolling at speed with quick tab switches.

https://github.com/user-attachments/assets/c24c98d9-6ab8-45c4-974b-96822b5a3042

## Why

I wanted something which is performant, modern and consumes little ram. The existing DB clients are either filled with bloat (Electron and JVM) or paid. This is an alternative to them. No feature is ever going behind a paywall and with time we will have complete parity on features with those too. 

## Supported databases

- **Postgres:** supported
- **MySQL:** supported
- **SQLite:** supported
- **Snowflake:** supported, without in-line editing since Snowflake doesn't
  enforce primary keys. See [docs/snowflake.md](https://github.com/ShayanAbbas1/dbdelve/blob/HEAD/docs/snowflake.md) for setup.
- **SQL Server:** supported, 2017 or later, without Explain. See…
