---
repo: "SocksTheWolf/AgenticAlert"
name: "AgenticAlert"
description: "Tools that alert you to when a Github repo uses genAI"
readmeQualityOk: true
url: "https://github.com/SocksTheWolf/AgenticAlert"
homepage: "https://agenticalert.download"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [73, 25]
topics: ["github", "noai", "userscript", "wrangler", "userscripts", "tampermonkey", "violentmonkey", "javascript", "webextension"]
stars: 56
forks: 0
openIssues: 0
closedIssues: 19
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-10-18T01:56:35Z"
lastCommitAt: "2026-11-01T22:58:41Z"
lastReleaseAt: "2026-10-31T09:18:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 44
maintainers: ["SocksTheWolf", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1423906428/71881876-4b2c-49b5-abb8-d98f9772c4ed"
fundingLinks: ["KO_FI:https://ko-fi.com/socksthewolf"]
---

# AgenticAlert

A robust extension that scans and alerts you if a GitHub repo uses genAI. Can be installed in pretty much everything.

## Install

### Firefox

Firefox and derived browsers can get the extension from [here](https://agenticalert.download/firefox)

### Chrome

Chrome based browsers can [go here to install](https://agenticalert.download/chrome)

### UserScripts (for everyone else)/Nightly

#### STEP ONE

Get an userscript runner. You can download either:

* [TamperMonkey](https://www.tampermonkey.net/) (supported)
* [ViolentMonkey](https://violentmonkey.github.io/get-it/) (supported)
* a similar userscript runner for your browser (most should work, but some are weird and ymmv)

Skip this if you already have an userscript runner.

#### STEP TWO

## Why use this?

AgenticAlert has a few advantages over other alternatives:

* Can check for genAI GitHub integrations that you cannot block on GitHub
* Checks a lot of different file markers/recomp modules very quickly
* Can detect some intentional LLM poison pill tricks (intentional flags to harm an LLM)
* Scans .gitignore and GitHub metadata without user input
* Comprehensive deep search

> **NOTE**: you should continue to…
