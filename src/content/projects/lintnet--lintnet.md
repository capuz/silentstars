---
repo: "lintnet/lintnet"
name: "lintnet"
description: "General purpose linter for structured configuration data powered by Jsonnet. Support various formats such as JSON, YAML, HCL, etc. You can reuse and distribute lint rules easily"
url: "https://github.com/lintnet/lintnet"
homepage: "https://lintnet.github.io/"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["cli", "jsonnet", "linter", "oss"]
stars: 66
forks: 0
openIssues: 35
closedIssues: 59
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-12-12T12:17:34Z"
lastCommitAt: "2026-06-28T02:02:16Z"
lastReleaseAt: "2024-05-27T02:05:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 49
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/c312b7de6f84601436bf522e0dcaa9320c9ad08fa276c1028cd31cce5d4be26f/lintnet/lintnet"
fundingLinks: ["GITHUB:https://github.com/suzuki-shunsuke"]
---

# lintnet

General purpose linter powered by [Jsonnet](https://jsonnet.org/).

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/lintnet/logo/main/images/lintnet.png">
  </picture>
</p>

## Features

- [Support various configuration file formats](https://lintnet.github.io/docs/supported-data-format)
- Powerful. You can lint files flexibly by Jsonnet. And lintnet extends Jsonnet by native functions
- Secure. Jsonnet restricts access to filesystem and network so it's secure compared with common programming languages such as Python
- Shareable. lintnet supports sharing lint rules as Modules. You can utilize third party lint rules, reuse your lint rules in multiple projects, and distribute lint rules as OSS and in-house libraries
- Easy to install. lintnet is a single binary written in [Go](https://go.dev/), so you only need to install an executable file into `$PATH`. lintnet has no dependency that you need to install

## Document

https://lintnet.github.io/

## LICENSE

[MIT](LICENSE)

About the license of logo, please see [here](https://github.com/lintnet/logo).
