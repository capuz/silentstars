---
repo: "oe/deploy-toolkit"
name: "deploy-toolkit"
description: "A toolkit make it easy(with plain config) to manipulate(upload/download/exec command) server via `ssh`,  can be used to deploy stuffs or CI/CD"
readmeQualityOk: true
url: "https://github.com/oe/deploy-toolkit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["ci-cd", "deploy", "nodejs", "typescript", "ssh"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2018-11-19T11:40:15Z"
lastCommitAt: "2026-10-04T10:00:56Z"
lastReleaseAt: "2026-10-04T02:32:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 42
maintainers: ["oe"]
openGraphImageUrl: "https://opengraph.githubassets.com/b312aa2f905037a147c1e0888312f8addd7d93d9c8dce91c404a7fc6509a49a2/oe/deploy-toolkit"
---

# Deploy toolkit

A small TypeScript toolkit for sequential SSH commands, uploads, downloads, and shell scripts. Useful for deploying build output to a few servers from a Node.js script or CI job.

## Requirements and status

Version 0.2.1 requires **Node.js 20 or 22 and later**, an SSH server supporting command execution/SFTP, and a POSIX remote shell. Script actions require Bash by default, or another POSIX-compatible shell selected with `shell`/`shebang`.

This project is suited to maintenance of its small existing API. For deployment inventories, rolling releases, rollback orchestration, or configuration management, use a dedicated tool such as Ansible. See [the maintenance assessment](https://github.com/oe/deploy-toolkit/blob/HEAD/MAINTENANCE.md) and [migration notes](https://github.com/oe/deploy-toolkit/blob/HEAD/CHANGELOG.md).

## Install

```sh
pnpm add -D deploy-toolkit
```

To develop from a checkout, use Node.js 22.12 or later and run `pnpm install --frozen-lockfile && pnpm build`.

## Deploy

```js
const { deploy } = require('deploy-toolkit')
const path = require('node:path')

async function main() {
  await deploy({
    ssh: {
      host: 'example.com',…
