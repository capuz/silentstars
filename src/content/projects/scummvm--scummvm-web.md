---
repo: "scummvm/scummvm-web"
name: "scummvm-web"
description: "Main ScummVM website"
readmeQualityOk: true
url: "https://github.com/scummvm/scummvm-web"
language: "PHP"
languages: ["PHP", "TypeScript"]
languagePcts: [41, 29]
topics: ["php7", "smarty-templates"]
stars: 34
forks: 53
openIssues: 0
closedIssues: 0
watchers: 54
contributors: 108
recentReleases: 0
createdAt: "2012-09-24T04:35:23Z"
lastCommitAt: "2026-10-15T08:31:51Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 53
maintainers: ["sev-", "lotharsm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47a7af89a550962e1f1bbdf8fba4d8bb9ffe8166a37f433e6730625f556a54ff/scummvm/scummvm-web"
---

# ScummVM-Web

This project is the main ScummVM website located at: https://www.scummvm.org

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes
on how to deploy the project on a live system.

### Prerequisites

The ScummVM website relies on several tools to install properly.
Before installing please make sure you have the following installed:

* [PHP](https://www.php.net/manual/en/install.php)
  * PHP YAML extension. Install via `pecl install yaml` or `sudo apt install php-yaml`
  * The version of PHP included with macOS doesn't include PECL, so you'll need to install a different version of PHP [through Homebrew](https://formulae.brew.sh/formula/php) or another method
  * Alternatively on macOS you can use [MacPorts](https://www.macports.org) to install both PHP and yaml (for example to use PHP 8.2 `sudo port install php82 php82-yaml php82-iconv php82-intl php82-mbstring php82-sqlite ; sudo port select --set php php82`)
  * To improve build performance, PHP curl extension can be installed.
* [Composer](https://getcomposer.org/)
* [Python &…
