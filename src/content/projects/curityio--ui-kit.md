---
repo: "curityio/ui-kit"
name: "ui-kit"
description: "Monorepo for Self Service Portal, Login Web App, HAAPI React App, Template System, and Styles"
readmeQualityOk: true
url: "https://github.com/curityio/ui-kit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 23
recentReleases: 2
createdAt: "2025-06-16T14:06:35Z"
lastCommitAt: "2026-10-01T10:23:56Z"
lastReleaseAt: "2026-09-29T12:28:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 88
maintainers: ["urre", "aleixsuau", "luisgoncalves"]
openGraphImageUrl: "https://opengraph.githubassets.com/db09d04c50b5f91edb9b2ac1a10a569b17a0c8260de5a0e32917baaa30258c4f/curityio/ui-kit"
---

# Curity UI Kit

**Customize the look and feel of your applications**

This monorepo contains:

- Identity Server Templates
- Self Service Portal
- HAAPI React App
- CSS Library
- UI Icons React Library
- React Component Library

## Branches and releases

`main` is the development branch. It holds the work for the next release and does **not** correspond to any released version.

> [!NOTE]
> Before the 11.5 release, `main` reflected the latest release. That is no longer the case.

To work against a released version, check out the version branch for your Identity Server version:

```shell
git checkout version/X.Y
```

For example, for Identity Server 11.5.x, check out `version/11.5`.

Version branches keep receiving fixes for their release after it ships, without picking up unreleased development work from `main`. Each release is also tagged as `ui-kit-<version>` (for example `ui-kit-11.5.0`) if you need the exact state that shipped. Releases that have no version branch are available through their tag only.

## Prerequisites
- Node.js (version as specified in the `.nvmrc` file)

## Setup

This project uses a specific Node.js version as specified in the `.nvmrc` file. We recommend…
