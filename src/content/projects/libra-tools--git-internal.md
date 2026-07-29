---
repo: "libra-tools/git-internal"
name: "git-internal"
description: "Internal Git infrastructure, experiments, and foundational components for Git-compatible monorepo systems"
readmeQualityOk: true
url: "https://github.com/libra-tools/git-internal"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["rust", "git", "vcs"]
stars: 14
forks: 115
openIssues: 0
closedIssues: 16
watchers: 2
contributors: 19
recentReleases: 5
createdAt: "2025-09-21T12:19:40Z"
lastCommitAt: "2026-07-29T06:14:25Z"
lastReleaseAt: "2026-07-25T09:19:53Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 80
maintainers: ["genedna", "NJUWallSpider", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6a6890fb4dbce935badbf97475bae5dacb14cc27b1dc990af2a11f2aba8d9f3/libra-tools/git-internal"
---

## Git Internal Module

Git-Internal is a high-performance Rust library for Git internal objects, Pack files, and AI-assisted development workflows. It provides comprehensive support for Git's internal object storage format with delta compression, memory management, concurrent processing, and a structured AI object model that captures the full lifecycle of AI-driven code changes — from user intent through planning, execution, validation, and final decision.

## Overview

This library handles Git internal objects and Pack files efficiently, supporting both reading and writing with optimized memory usage and multi-threaded processing. Beyond the standard Git object model (Blob, Tree, Commit, Tag), it introduces a suite of **AI objects** (Intent, Plan, Task, Run, PatchSet, Evidence, Decision, and more) that record and audit every step of an AI agent's interaction with a codebase. These AI objects are stored as content-addressed JSON blobs in the Git object database, enabling reproducibility, auditability, and provenance tracking for AI-generated code changes.

## Quickstart

Decode a pack (offline):

```rust
use std::{fs::File, io::BufReader};
use git_internal::internal::pack::Pack;…
