---
repo: "Open-CMSIS-Pack/gen-pack"
name: "gen-pack"
description: "Bash library for gen-pack scripts"
readmeQualityOk: true
url: "https://github.com/Open-CMSIS-Pack/gen-pack"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 12
forks: 10
openIssues: 2
closedIssues: 13
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2022-08-03T13:32:12Z"
lastCommitAt: "2026-10-29T10:21:20Z"
lastReleaseAt: "2023-11-08T13:42:17Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 49
maintainers: ["dependabot[bot]", "JonatanAntoni", "soumeh01"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5c6fb30a8d93aaf3065e54e65e65a1be0cc0c4d97d492f16a49a63d20effa2b/Open-CMSIS-Pack/gen-pack"
---

# Bash library for gen-pack scripts

## About

This repository contains a library with helper function to assemble a
[`gen_pack.sh`](https://github.com/Open-CMSIS-Pack/gen-pack/blob/HEAD/template/gen_pack.sh) script that creates a
[Open-CMSIS-Pack](https://open-cmsis-pack.github.io/Open-CMSIS-Pack-Spec/main/html/index.html).

## Prerequisites

This library is written for Bash v5 or later and uses a couple of standard
\*nix commands:

- basename
- cp
- curl
- dirname
- dos2unix (optional)
- echo
- find
- git (optional)
- gh (optional)
- grep
- mac2unix (optional)
- mkdir
- mv
- patch (optional)
- realpath
- sed
- sha1sum
- tar
- test
- unix2dos (optional)
- unix2mac (optional)
- xmllint (optional)

In addition the `packchk` utility from [CMSIS-Toolbox](https://github.com/Open-CMSIS-Pack/cmsis-toolbox)
is required for verification.

### Linux

This library shall be well prepared to run on any standard Linux with Bash v5 or later.

```sh
$ sudo apt install \
    curl \
    libxml2-utils
```

### MacOS

This library requires Bash v5 and some additional GNU tools to be installed using [Homebrew](https://brew.sh/):

```sh
$ brew…
