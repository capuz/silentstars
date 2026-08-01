---
repo: "themixednuts/drizzle-rs"
name: "drizzle-rs"
description: "Drizzle clone in rust. WIP."
readmeQualityOk: true
url: "https://github.com/themixednuts/drizzle-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 44
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2025-07-31T09:31:49Z"
lastCommitAt: "2026-08-01T06:15:52Z"
lastReleaseAt: "2026-07-21T08:53:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 59
maintainers: ["themixednuts", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51dac318c5a5999fa97fa2f03bd00435bde79784630598ea43d346b6c5caadc/themixednuts/drizzle-rs"
---

# Drizzle RS

A type-safe SQL query builder and ORM for Rust, inspired by Drizzle ORM.

> [!WARNING]
> This project is still evolving. Expect breaking changes.

## Contents

- [Getting Started](#getting-started)
  - [1. Install](#1-install)
  - [2. Initialize](#2-initialize)
  - [3. Define Your Schema](#3-define-your-schema)
  - [4. Connect & Query](#4-connect--query)
- [Migrations](#migrations)
  - [Manual: Generate with the CLI](#manual-generate-with-the-cli)
  - [Automatic: Generate from build.rs](#automatic-generate-from-buildrs)
  - [Applying Migrations](#applying-migrations)
  - [Push (Dev Only)](#push-dev-only)
- [Generated Models](#generated-models)
  - [Insert](#insert)
  - [Update](#update)
- [Querying](#querying)
  - [Select](#select)
    - [Ordering, Limiting, Pagination](#ordering-limiting-pagination)
    - [Group By](#group-by)
  - [Insert](#insert-1)
  - [Update](#update-1)
  - [Delete](#delete)
  - [Joins](#joins)
  - [Subqueries & Set Operations](#subqueries--set-operations)
  - [Aliases](#aliases)
- [Expressions](#expressions)
  - [Type Casting](#type-casting)
- [Relational Queries](#relational-queries)
  - [Selecting Specific…
