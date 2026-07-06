---
repo: "shopware/shopware-cli"
name: "shopware-cli"
description: "CLI for Shopware Account and Shopware 6"
readmeQualityOk: true
url: "https://github.com/shopware/shopware-cli"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["hacktoberfest", "cli", "developer-tools", "ecommerce", "extensions", "golang", "php", "shopware", "shopware6"]
stars: 116
forks: 54
openIssues: 16
closedIssues: 276
watchers: 8
contributors: 60
recentReleases: 0
createdAt: "2022-01-09T20:18:10Z"
lastCommitAt: "2026-07-06T07:04:34Z"
lastReleaseAt: "2022-01-18T22:02:31Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 49
maintainers: ["shyim", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4e042e3a73bea2282c0b7ba8766aa4f8cfc859c9b22abddc671f07ebdce18dc/shopware/shopware-cli"
---

# Shopware CLI

Shopware CLI is a command line companion for common Shopware account, project, and extension workflows.

## Table of Contents

- [What it helps with](#what-it-helps-with)
- [Highlights](#highlights)
- [Install](#install)
- [Usage](#usage)
- [Repository Layout](#repository-layout)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## What it helps with

Use this CLI when you want to manage Shopware accounts, build and validate extensions, automate project maintenance, or run everyday developer tasks without leaving the terminal.

## Highlights

- Account-related commands under `shopware-cli account`
- Extension build, validation, formatting, changelog, and packaging helpers
- Project automation commands for create, config, cache, admin, and CI workflows
- Interactive terminal support, plus a non-interactive mode for scripts and CI

## Install

### From source with Go

```bash
go install github.com/shopware/shopware-cli@latest
```

### Build locally from this repository

```bash
git clone https://github.com/shopware/shopware-cli.git
cd shopware-cli
go build -o bin/shopware-cli .
```

## Usage

Show the available commands:…
