---
repo: "ubugeeei-prod/oxlint-plugins"
name: "oxlint-plugins"
description: "The fast oxlint plugin collections by @ubugeeei & @baseballyama"
readmeQualityOk: true
url: "https://github.com/ubugeeei-prod/oxlint-plugins"
homepage: "https://ubugeeei-prod.github.io/oxlint-plugins/"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [68, 24]
stars: 8
forks: 0
openIssues: 36
closedIssues: 27
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-06-08T13:31:31Z"
lastCommitAt: "2026-07-29T06:15:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 45
maintainers: ["baseballyama", "ubugeeei"]
openGraphImageUrl: "https://opengraph.githubassets.com/d81dc35f88e91bdd5f759aa1bacf358c44ab2a6d384f1ffc0907b349c2cb006a/ubugeeei-prod/oxlint-plugins"
discussionCount: 0
---

# oxlint-plugins

Rust-backed Oxlint plugin workspace for porting ESLint plugins through NAPI-RS.

The public package shape is an Oxlint JS plugin. Hot rule logic lives in Rust and is exposed through NAPI-RS so each plugin can be installed independently from npm.

This is unofficial community work. It is not an official Oxlint project, and builtin migration should happen only through normal upstream review.

## Supported Plugins

**25** ESLint plugins are being ported · **773 / 981** rules implemented (**79%**).

| Plugin                                                     | Upstream                                                                                                               | Implemented | Total | Coverage |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- | ----- | -------- |
| [`angular-eslint`](https://github.com/ubugeeei-prod/oxlint-plugins/blob/HEAD/npm/angular-eslint)                     | [`@angular-eslint/eslint-plugin`](https://github.com/angular-eslint/angular-eslint)                                    | 48…
