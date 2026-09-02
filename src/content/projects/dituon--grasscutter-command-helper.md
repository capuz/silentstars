---
repo: "Dituon/grasscutter-command-helper"
name: "grasscutter-command-helper"
description: "Grasscutter Command Helper "
readmeQualityOk: true
url: "https://github.com/Dituon/grasscutter-command-helper"
homepage: "https://grasscutter-command-helper-vert.vercel.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [69]
stars: 56
forks: 12
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2022-10-24T16:52:16Z"
lastCommitAt: "2026-09-02T08:03:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 32
maintainers: ["Dituon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68dbab215f48c8173b7beeb5818ef2fb817937650f07197e1e0f3634cd004cfc/Dituon/grasscutter-command-helper"
---

# Grasscutter Command Helper

English | [简体中文](https://github.com/Dituon/grasscutter-command-helper/blob/main/README-CHS.md)

## [Demo](https://cmd.d2n.moe/new)

## Intro

A command generator for Grasscutter with other awesome extras

Any requests are welcome

## Current features

- Generate command

- Multi command version support

- Save & Share & Import

- Remote command (Need [OpenCommand Plugin](https://github.com/jie65535/gc-opencommand-plugin))

- Multilingual support

## GET parameters

The script read the `GET` params in URL, you can provide some default param to the user

| params    | value field                       | description        |
| --------- | --------------------------------- | ------------------ |
| `version` | `1.6.1` `1.4.2` `GM` `1.2.1`      | command version    |
| `lang`    | `navigator.language`              | language           |
| `server`  | `encodeURIComponent(URL)`         | remote server host |
| `import`  | `encodeURIComponent(URL)`         | import command     |

**Examples**

> `https://cmd.d2n.moe/new?version=1.4.2&server=https%3A%2F%2Fgenshinserver.xmmt.fun%3A25568`
> 
> command version is `1.4.2`, remote server is…
