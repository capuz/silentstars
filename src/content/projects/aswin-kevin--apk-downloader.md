---
repo: "aswin-kevin/apk-downloader"
name: "apk-downloader"
description: "This npm package used to download google playstore applications."
readmeQualityOk: true
url: "https://github.com/aswin-kevin/apk-downloader"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-10-24T13:23:34Z"
lastCommitAt: "2026-11-14T10:48:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 58
maintainers: ["aswin-kevin"]
openGraphImageUrl: "https://opengraph.githubassets.com/de9488adae883b33fcfaa23a177b5e914e4dcf7114ccb32d8d4395d9504d867f/aswin-kevin/apk-downloader"
---

# apk-downloader

Download Android apps (APK and XAPK) **anonymously** from public sources, from Node.js or the command line.

- **Pluggable sources with automatic fallback**: Aptoide, F-Droid and APKPure are built in, and you can add your own.
- **Safe by default**: only files the source has verified are accepted, checksums are checked, partial files never land on disk, and XAPK extraction blocks path traversal.
- **Library and CLI** in one package: typed promise API (ESM + CommonJS) and a scriptable CLI with `--json` output.
- **Lightweight**: no browser, three small runtime dependencies.

```console
$ npx apk-downloader org.fdroid.fdroid
✔ org.fdroid.fdroid 2.0.3 → /home/me/org.fdroid.fdroid-2.0.3.apk (12.2 MB, fdroid)
```

## Contents

- [Install](#install)
- [Command line](#command-line)
- [Library](#library)
- [Sources and trust](#sources-and-trust)
- [Errors](#errors)
- [Migrating from v1](#migrating-from-v1)
- [Security](#security)
- [Development](#development)
- [Responsible use](#responsible-use)

## Install

Requires **Node.js 20.18.1 or newer**.

```sh
npm install apk-downloader      # as a library
npx apk-downloader --help       # or run the CLI without installing
```…
