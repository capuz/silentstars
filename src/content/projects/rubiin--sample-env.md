---
repo: "rubiin/sample-env"
name: "sample-env"
description: "Generate sample file from .env for your apps"
readmeQualityOk: true
url: "https://github.com/rubiin/sample-env"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cli", "env", "environment", "nodejs"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-28T07:06:56Z"
lastCommitAt: "2026-10-26T09:18:00Z"
lastReleaseAt: "2025-11-03T10:42:18Z"
status: "thriving"
tags: ["funded"]
healthScore: 81
undervaluedScore: 57
maintainers: ["rubiin", "renovate[bot]", "mergify[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85f9c29a5f1cfe3028fc43fc54b85e4ae22b684418ef8bf3f589996f232b8bc/rubiin/sample-env"
fundingLinks: ["KO_FI:https://ko-fi.com/rubiin", "BUY_ME_A_COFFEE:https://buymeacoffee.com/rubiin", "THANKS_DEV:https://thanks.dev/rubiin"]
discussionCount: 0
---

# sample-env

## About

Effortlessly create sample environment files tailored to your projects with ease. This cli streamlines the process by effortlessly generating environment files, ensuring all sensitive information is excluded saving you the hassle of manually scrubbing secrets.

## How to install

- Install

```sh
npm i sample-env -g
```

## Usage

```sh
sample-env --env .env --sample .env.example --banner "hello world" --removeComments --prefix REACT_APP_
```

This command will:

- take `.env` file
- parse its keys and values
- create banner text at the top of the file
- only include keys that start with `REACT_APP_`
- remove all comments
- dump all the keys and values into the `.env.example` file

## Supported arguments and commands

The cli takes these optional flags.

- --env (default `.env`) - use this option if you want to use a different file name
  - `--env .env.dev`
- --sample (default `.env.sample`) - use this option if you want to use a output file name
  - `--sample .env.example`
- --banner - use this option if you want to add a custom banner text at start of file
  - `--banner "hello world"`
- --removeComments - use this option if you don't want to include…
