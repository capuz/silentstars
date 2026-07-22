---
repo: "SSWConsulting/SSW.YakShaver.Desktop"
name: "SSW.YakShaver.Desktop"
description: "Make the perfect PBI in 30 seconds (AI powered)"
readmeQualityOk: true
url: "https://github.com/SSWConsulting/SSW.YakShaver.Desktop"
homepage: "https://yakshaver.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 7
forks: 3
openIssues: 84
closedIssues: 433
watchers: 0
contributors: 90
recentReleases: 0
createdAt: "2025-10-24T01:14:29Z"
lastCommitAt: "2026-07-22T06:09:00Z"
lastReleaseAt: "2025-10-24T09:32:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 72
maintainers: ["calumjs", "tomek-i", "steven0x51"]
openGraphImageUrl: "https://opengraph.githubassets.com/80d8479b2216431bc63c5db7f65c5d632a8efee0b992a81ac14c577a60f32bfd/SSWConsulting/SSW.YakShaver.Desktop"
---

# Desktop Electron App

This is the YakShaver Desktop Electron app, designed to help you create the perfect PBI in 30 seconds, with built-in MCP support.

For more information, visit our website at [yakshaver.ai](https://yakshaver.ai)

We also offer a **web version** [YakShaver 360](https://360.yakshaver.ai)

## Prerequisites

- [Node JS](https://nodejs.org/en/download)

## Setup

1. Copy `.env.example` → `.env`
2. Copy environment from keeper: **SSW.Yakshaver Desktop .env** (just copy YouTube client id and secret values. LLM values should be set via app itself)

## Run
In the root folder, run
1. `npm install -g concurrently`, which will install the [`concurrently` package](https://www.npmjs.com/package/concurrently)
1. `npm run setup` – install dependencies
2. `npm run dev` – start the app

On Windows and macOS, `npm run setup` also installs the standalone `yt-dlp` binary used
for YouTube downloads. This avoids relying on the operating system's Python.

## Building

1. `npm run setup` – ensure all dependencies are installed
2. `npm run make` - this will create 2 folders

- `/out/make/{target}/{arch}` - which contains the installers/distributables for end users
-…
