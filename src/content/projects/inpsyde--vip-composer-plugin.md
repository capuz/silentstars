---
repo: "inpsyde/vip-composer-plugin"
name: "vip-composer-plugin"
description: "A Composer plugin to ease deployment to wordpress.com VIP servers alongside Composer-based local development."
url: "https://github.com/inpsyde/vip-composer-plugin"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["wpcomvip", "wp", "deployment", "deploy", "ci", "continous-integration", "mu-plugins", "wordpress-folder", "vip", "composer-plugin"]
stars: 12
forks: 0
openIssues: 2
closedIssues: 7
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2020-04-23T10:42:21Z"
lastCommitAt: "2026-06-24T06:39:52Z"
lastReleaseAt: "2025-10-23T14:32:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 33
maintainers: ["dottxado"]
openGraphImageUrl: "https://opengraph.githubassets.com/75e4751e8c9c32f3064802fbc4d2812905d7522cd708558f0e3f8871022ac36e/inpsyde/vip-composer-plugin"
---

# VIP Go Composer Plugin

![PHP Quality Assurance](https://github.com/inpsyde/vip-composer-plugin/workflows/PHP%20Quality%20Assurance/badge.svg)

-----

This package is a Composer plugin to be used in projects to be deployed on [VIP Go platform](https://vip.wordpress.com/documentation/vip-go/) and provides a CLI command with **two different purposes**:

1. ease the Composer-based **local environment** that is compatible with the VIP Go platform
2. ease the **automatic deploy** of the project on VIP Go

## Quick reference

The package provides a command **`composer vip`** that can be used to both **prepare a local environment** and **deploy to VIP Go repository**.

Examples:

```shell
composer vip --local                       # prepare local environment

composer vip --deploy --branch="develop"   # deploy to VIP Go repository
```

Deploy command as shown above require some configuration in `composer.json`, at the very least the GitHub URL for the repository, that if not present in `composer.json`, can be passed to the command via the `--git-url` option.

It is important to note that `composer vip` command **must be run *after* composer install|update**.

Here's a one liner to both…
