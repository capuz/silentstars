---
repo: "jarpex/mebbr"
name: "mebbr"
description: "🗿 A monolithic, highly optimized, debloated (a part) WordPress theme written from scratch."
readmeQualityOk: true
url: "https://github.com/jarpex/mebbr"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [55]
topics: ["build-automation", "build-tool", "custom-framework", "javascript", "legacy-project", "monolith", "php", "python", "wordpress"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-08-22T00:01:17Z"
lastCommitAt: "2026-11-02T13:38:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 59
maintainers: ["jarpex"]
openGraphImageUrl: "https://opengraph.githubassets.com/baf6f0f3f0dd9d2d64fcd73119f16f1da36a62ee284c16f5158edd4dee0142df/jarpex/mebbr"
fundingLinks: ["CUSTOM:https://donate.jarpex.ru"]
---

## Description

A monolithic, highly optimized, debloated (a part) WordPress theme written from scratch specifically for Asya’s sites.

### Installation

- Install: python3, git
- Open your terminal:
- git clone https://github.com/jarpex/mebbr
- cd mebbr

## Usage

### Configuration

Create a configuration file for your website like «/config/example.cfg». Configuration files should be placed at **/config/** directory. Each parameter should be placed for one line. To create a newline in your configuration file you should use a **&newline&** command. There is also available a **&tab&** command for better code legibility.

### Build

To build the project, use the command:

- python3 ./main.py arguments

Available arguments:

- config.cfg — specify your configuration file
- config — alternate version to specify configuration file
- --skip — do not upgrade theme version
- --patch — increment a patch version
- --minor — increment a minor version
- --major — increment a major version
- --help — show a help

If no launch arguments are specified for the application, the theme will be built for the site [MEBBR](https://mebbr.ru/)

If the build is successful, you will get theme files in the…
