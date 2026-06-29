---
repo: "puppetlabs/puppetlabs-motd"
name: "puppetlabs-motd"
description: "Simple motd module "
url: "https://github.com/puppetlabs/puppetlabs-motd"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [82]
topics: ["module", "supported", "hacktoberfest"]
stars: 17
forks: 84
openIssues: 1
closedIssues: 2
watchers: 157
contributors: 86
recentReleases: 1
createdAt: "2012-03-26T18:23:07Z"
lastCommitAt: "2026-06-29T07:22:46Z"
lastReleaseAt: "2026-06-29T07:26:15Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 83
undervaluedScore: 44
maintainers: ["LukasAud", "gavindidrichsen", "imaqsood"]
openGraphImageUrl: "https://opengraph.githubassets.com/2514745ea0a197b34555dd75fc15cc6e4726c32b4e64a2823ef6a43a670a9f9e/puppetlabs/puppetlabs-motd"
---

# motd

#### Table of Contents

1. [Overview](#overview)
2. [Module Description - What the module does and why it is useful](#module-description)
3. [Setup - The basics of getting started with the motd module](#setup)
    * [Beginning with the motd module](#beginning-with-the-motd-module)
4. [Usage - Configuration options and additional functionality](#usage)
5. [Reference - An under-the-hood peek at what the module is doing and how](#reference)
6. [Limitations - OS compatibility, etc.](#limitations)
7. [License](#license)
8. [Development - Guide for contributing to the module](#development)

## Module Description

The motd module configures a system message of the day. The module includes a default message template. Alternatively, you can specify a different template or a static string.

## Setup

### Beginning with the motd module

To configure motd on your system, include the `motd` class: `include motd`.

## Usage

The motd module configures the message of the day on a wide variety of systems. The module populates either `/etc/motd`, `/etc/issue` and `/etc/issue.net` (on POSIX systems) or a registry key (on Windows systems) with the contents of a basic template file.

By…
