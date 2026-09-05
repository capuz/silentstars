---
repo: "oktetlabs/test-environment"
name: "test-environment"
description: "OKTET Labs Test Environment"
readmeQualityOk: true
url: "https://github.com/oktetlabs/test-environment"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 5
forks: 13
openIssues: 14
closedIssues: 8
watchers: 6
contributors: 33
recentReleases: 0
createdAt: "2022-08-19T15:34:03Z"
lastCommitAt: "2026-09-05T07:49:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 72
undervaluedScore: 77
maintainers: ["okt-konst", "okt-viacheslav", "okt-yurijp"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbcf353a85451527f602bb90d9644d4fdbafef87ff80e83d91af3b8e74214750/oktetlabs/test-environment"
---

[SPDX-License-Identifier: Apache-2.0]::
[Copyright (C) 2004-2023 OKTET Labs Ltd. All rights reserved.]::

# OKTET Labs. Test Environment

OKTET Labs Test Environment (TE) is a software product that is intended to
ease creating automated test suites.

## Table of Contents

- [OKTET Labs. Test Environment](#oktet-labs-test-environment)
  - [Table of Contents](#table-of-contents)
  - [Documentation](#documentation)
  - [Build](#build)
    - [Briefly](#briefly)
    - [Dependencies](#dependencies)
    - [External libraries](#external-libraries)
  - [BASH-completion](#bash-completion)

## Documentation

The documentation is built with the `./gen_docs` script in the top directory:

```sh
export DOXYREST_PREFIX=<path-to-doxyrest>
./gen_docs
```

It produces a single HTML site under `doc/generated/html/` combining two
sources:

1. Hand-written guides in `doc/sphinx/` — architecture, the user guide, the
   test suite guide and the per-subsystem pages.

2. API reference generated from the Doxygen comments in the sources.

Doxygen warnings are collected in `./doxygen.warn`. Some pictures require
`ditaa` to be installed. Run `./gen_docs -c` to check the sources for Doxygen
errors without…
