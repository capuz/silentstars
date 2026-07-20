---
repo: "franzopl/pesto"
name: "pesto"
description: "Fast, lean Usenet poster in Rust: yEnc, NNTP, PAR2 and .nzb generation"
readmeQualityOk: true
url: "https://github.com/franzopl/pesto"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 7
forks: 1
openIssues: 4
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-16T22:53:44Z"
lastCommitAt: "2026-07-20T06:32:25Z"
lastReleaseAt: "2026-05-19T22:59:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["franzopl", "fabricionaweb"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2a37423dee67160c9b4c429875a219994a0f0f5d3661f9e29cc28bbd9b083ee/franzopl/pesto"
---

# Pesto

**Fast, lean Usenet poster written in Rust.**

yEnc-encodes files, posts them over parallel NNTP connections, generates a `.nzb`,
and stays out of your way. Inspired by [`nyuu`](https://github.com/animetosho/Nyuu),
with a deliberately minimal scope: just the essentials, executed extremely fast.

---

## Contents

- [Installing](#installing)
- [Build from source](#build-from-source)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Basic usage](#basic-usage)
  - [Post a single file](#post-a-single-file)
  - [Post a directory](#post-a-directory)
  - [Multiple files](#multiple-files)
- [Obfuscation](#obfuscation)
- [Compression and passwords](#compression-and-passwords)
- [PAR2 recovery data](#par2-recovery-data)
- [Batch and watch modes](#batch-and-watch-modes)
- [Reliability](#reliability)
  - [Upload resume](#upload-resume)
  - [Inline verify](#inline-verify---verify)
  - [Post-upload check](#post-upload-check---check----check-delay)
  - [Rate limiting](#rate-limiting)
  - [Dry run](#dry-run)
- [NZB metadata](#nzb-metadata)
- [All flags](#all-flags)
- [Exit codes](#exit-codes)
- [JSON output mode](#json-output-mode)
- [Performance](#performance)

---

##…
