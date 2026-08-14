---
repo: "tscircuit/cli"
name: "cli"
description: "Create electronics with React with a local development server"
readmeQualityOk: true
url: "https://github.com/tscircuit/cli"
homepage: "https://docs.tscircuit.com/intro/quickstart-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["eda", "electronics", "kicad", "pcb", "pcb-design", "react"]
stars: 18
forks: 74
openIssues: 2
closedIssues: 109
watchers: 1
contributors: 30
recentReleases: 0
createdAt: "2024-12-13T07:22:50Z"
lastCommitAt: "2026-08-14T05:14:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 82
maintainers: ["tscircuitbot", "AnasSarkiz", "seveibar"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8cbe8706b99851c992e5f2d4b58dd44bc56f68c0a54b0179ed11a0beb0034ff/tscircuit/cli"
---

# tscircuit command line interface (CLI)

A CLI for developing, managing and publishing tscircuit code (the "npm for tscircuit") `npm install -g tscircuit`

https://github.com/user-attachments/assets/0228e09d-48fc-4bf5-814b-762b60fc35c7

## Usage

```bash
# Start a local dev server in your current directory
tsci dev
```

## Installation

```bash
npm install -g tscircuit
```

## CLI USAGE

```
Usage: tsci [options] [command]

CLI for developing tscircuit packages

Options:
  -h, --help                   display help for command

Commands:
  init [options] [directory]   Initialize a new TSCircuit project in the
                               specified directory (or current directory if none
                               is provided)
  dev [options] [file]         Start development server for a package
  clone [options] [package]    Clone a package from the registry
  push [options] [file]        Save package code to Registry API
  auth                         Login/logout
  login                        Login to tscircuit registry
  logout                       Logout from tscircuit registry
  config                       Manage tscircuit CLI configuration
  export [options] <file>…
