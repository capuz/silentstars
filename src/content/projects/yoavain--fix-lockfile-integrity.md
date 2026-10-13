---
repo: "yoavain/fix-lockfile-integrity"
name: "fix-lockfile-integrity"
description: "Fix NPM lockfile integrity"
readmeQualityOk: true
url: "https://github.com/yoavain/fix-lockfile-integrity"
homepage: "https://www.npmjs.com/package/fix-lockfile-integrity/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 6
forks: 1
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-09T06:12:53Z"
lastCommitAt: "2026-10-13T10:57:58Z"
lastReleaseAt: "2022-10-21T07:21:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 72
maintainers: ["renovate[bot]", "yoavain"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d5eb508778487a232d0d5c2dd5e9d1c50f5005907fb687feabe585057539751/yoavain/fix-lockfile-integrity"
---

# Fix Lockfile Integrity 

**Fix `sha1` integrity in lock files back to `sha512`**

## Features
- Reverts all `sha1` back to `sha512` which is more secure
- Works with both package-lock.json and npm-shrinkwrap.json
- Works with lockfile version 1, 2 & 3
- Finds monorepo workspace folders automatically (npm, yarn, lerna), or works on configured paths
- Works only on file system without touching your version control

## Limitations
- By default, fixes only packages from npm registry [registry.npmjs.org](https://www.npmjs.com/). You can change that via configuration file

## Installation

Install globally:

```sh
npm install -g fix-lockfile-integrity
```

Or run with [npx](https://docs.npmjs.com/cli/v8/commands/npx):

```sh
npx fix-lockfile-integrity
```

## Usage

Check local folder for a lockfile (package-lock.json or npm-shrinkwrap.json) and fix any `sha1` in it.
In a monorepo, the workspace folders are checked too — see [Monorepo support](#monorepo-support).

```sh
$ fix-lockfile
Overwriting lock file ./package-lock.json with 10 integrity fixes
```

> **Make sure your lock file is in version control and all changes have been committed. This _will_ overwrite your lock file.**

To…
