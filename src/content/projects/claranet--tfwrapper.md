---
repo: "claranet/tfwrapper"
name: "tfwrapper"
description: "Claranet France Terraform & OpenTofu Wrapper"
readmeQualityOk: true
url: "https://github.com/claranet/tfwrapper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["claranet", "python", "opentofu", "terraform"]
stars: 155
forks: 26
openIssues: 4
closedIssues: 13
watchers: 8
contributors: 14
recentReleases: 0
createdAt: "2017-10-16T08:03:47Z"
lastCommitAt: "2026-07-16T06:02:04Z"
lastReleaseAt: "2020-01-08T14:50:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 83
undervaluedScore: 36
maintainers: ["pdecat", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/edd42943263b66613fa6adf348353a472b7c61429ba2a29940271d24b840fbc4/claranet/tfwrapper"
---

# claranet-tfwrapper

`tfwrapper` is a python wrapper for [OpenTofu](https://opentofu.org/) and legacy [Terraform](https://www.terraform.io/) which aims to simplify their usage and enforce best practices.

Note: the term _Terraform_ is used in this documentation when talking about generic concepts like providers, modules, stacks and the HCL based domain specific language.

## Table Of Contents

- [claranet-tfwrapper](#claranet-tfwrapper)
  - [Table Of Contents](#table-of-contents)
  - [Features](#features)
  - [Setup Dependencies](#setup-dependencies)
  - [Runtime Dependencies](#runtime-dependencies)
  - [Recommended setup](#recommended-setup)
  - [Installation](#installation)
  - [Setup command-line completion](#setup-command-line-completion)
  - [Upgrade from tfwrapper v7 or older](#upgrade-from-tfwrapper-v7-or-older)
    - [Required files](#required-files)
      - [conf](#conf)
      - [templates](#templates)
      - [.run](#run)
      - [.gitignore](#gitignore)
  - [Configuration](#configuration)
    - [tfwrapper configuration](#tfwrapper-configuration)
    - [Stacks configurations](#stacks-configurations)
    - [States centralization…
