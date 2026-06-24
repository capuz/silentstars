---
repo: "verzly/mise-php"
name: "mise-php"
description: "PHP version manager plugin for mise with built-in Composer, PECL and PIE support for Windows, Linux & macOS"
url: "https://github.com/verzly/mise-php"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [78, 22]
topics: ["cross-platform", "linux", "macos", "php", "php-version-manager", "pvm", "version-manager", "windows", "mise-php", "cli"]
stars: 37
forks: 4
openIssues: 2
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2025-03-12T17:45:19Z"
lastCommitAt: "2026-06-24T23:39:27Z"
lastReleaseAt: "2026-04-17T13:05:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 62
maintainers: ["rozsazoltan", "Artemeey", "cpeaustriajc"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d2e3b95b3a69ad4a916fd7eebc7c9ec71dcc2ac56d771fa641e8402bb9e5f57/verzly/mise-php"
---

# verzly/mise-php

![verzly-mise-php-example](https://github.com/user-attachments/assets/c57759f1-0ffc-4175-b96a-ca259a9c814d)

`verzly/mise-php` is a [jdx/mise](https://github.com/jdx/mise) plugin for installing and managing PHP on Linux, macOS, and Windows.

It provides an integrated PHP toolchain with built-in support for:
- **Composer** (per-version dependency management)
- **PIE** (next-generation extension installer, PHP ≥ 8.1)
- **PECL** (legacy extension support, PHP ≤ 8.4)

Install multiple PHP versions side by side, each with its own isolated runtime, Composer, and extension environment. Switch between versions globally or per project, and customize the build configuration to fit your exact needs.

- [How it works](#how-does-it-differ-from-the-other-mise-php-plugins)
  - [Pre-binaries](#pre-binaries)
  - [Build from source](#build-from-source)
  - [Cleanup](#cleanup)
- [Get started](#get-started)
  - [Install mise](#get-started)
  - [Activate mise](#get-started)
  - [Install plugin](#get-started)
  - [Upgrade](#up-to-date)
- [Usage](#usage)
  - [PHP](#php)
  - [Source build dependencies](#source-build-dependencies)
  - [Prebuilt static PHP](#prebuilt-static-php)
  -…
