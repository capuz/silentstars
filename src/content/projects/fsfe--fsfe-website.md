---
repo: "fsfe/fsfe-website"
name: "fsfe-website"
description: "Mirror of https://git.fsfe.org/FSFE/fsfe-website"
url: "https://github.com/fsfe/fsfe-website"
homepage: "https://fsfe.org"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 65
recentReleases: 0
createdAt: "2019-02-23T16:05:41Z"
lastCommitAt: "2026-06-29T07:21:50Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 69
undervaluedScore: 88
maintainers: ["tobiasd", "ChestnutBarrow", "anaghz"]
openGraphImageUrl: "https://opengraph.githubassets.com/8382f878338d1f7a7d3422a151049bc00619dd6a52e04e4b149c3bc88526cefd/fsfe/fsfe-website"
---

# FSFE Website

This repository contains the source files of [fsfe.org](https://fsfe.org), pdfreaders.org, freeyourandroid.org, ilovefs.org, drm.info, and test.fsfe.org.

## Table of Contents

- [Technical information](#technical-information)
- [Structure](#structure)
- [Contribute](#contribute)
- [Translate](#translate)
- [Build](#build)

## Technical information

Our web team has compiled some information about technology used for this website on the [Information for Webmasters](https://fsfe.org/contribute/web/) page. This is mainly focused on page content.

For information on how the build process works see [docs subfolder](./docs/overview.md). For more information on contributing to the buid process, please see the [contributor docs](./docs/contributing.md) for some useful tips.

Some tips for management can be found in the [management docs](./docs/management.md)

## Structure

Most files are XHTML files organised in a rather logical folder structure.

Every website served using this repo has its own folder with the full domain name it is to be served from.

### Domains

This repository also contains the source files of other websites the FSFE hosts:

- `fsfe.org` for…
