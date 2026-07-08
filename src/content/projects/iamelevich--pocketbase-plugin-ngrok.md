---
repo: "iamelevich/pocketbase-plugin-ngrok"
name: "pocketbase-plugin-ngrok"
description: "Plugin for Pocketbase that allow you expose it with ngrok"
readmeQualityOk: true
url: "https://github.com/iamelevich/pocketbase-plugin-ngrok"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ngrok", "pocketbase", "pocketbase-plugins"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-03-19T20:04:42Z"
lastCommitAt: "2026-07-08T05:43:06Z"
lastReleaseAt: "2026-02-22T12:08:25Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 56
maintainers: ["mergify[bot]", "renovate[bot]", "iamelevich"]
openGraphImageUrl: "https://opengraph.githubassets.com/590c2c49e327f6db068685fa4f3bd6daaf27ff329ee35e93c50ac3edce7791c8/iamelevich/pocketbase-plugin-ngrok"
---

* [Overview](#overview)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Example](#example)
* [pocketbase\_plugin\_ngrok](#pocketbasepluginngrok)
  * [Index](#index)
  * [type Options](#type-options)
  * [type Plugin](#type-plugin)
    * [func MustRegister](#func-mustregister)
    * [func Register](#func-register)
    * [func \(\*Plugin\) Validate](#func-plugin-validate)
* [Contributing](#contributing)
  * [Process](#process)
  * [Development setup](#development-setup)
  * [Testing](#testing)
  * [Linting](#linting)
  * [Docs update in README](#docs-update-in-readme)

# Overview

This plugin allow expose local [Pocketbase](https://github.com/pocketbase/pocketbase) with [ngrok](https://ngrok.com/)

This plugin can be used for development purposes, when you need to expose your local Pocketbase instance to the internet. For example, you can use it to test your Pocketbase app on mobile device.

## Requirements

- Go 1.25+
- [Pocketbase](https://github.com/pocketbase/pocketbase) 0.36+

## Installation

```bash
go get github.com/iamelevich/pocketbase-plugin-ngrok
```

## Example

You can check examples in [examples…
