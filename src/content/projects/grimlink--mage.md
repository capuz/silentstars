---
repo: "GrimLink/mage"
name: "mage"
description: "Simplifies bin/magento commands by adding helpful shortcuts and time-saving tools to enhance your productivity."
readmeQualityOk: true
url: "https://github.com/GrimLink/mage"
homepage: "http://grimlink.com/mage"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
topics: ["magento2", "bash-script", "warden", "magerun2", "hyva", "cachemanager", "composer", "php", "valet", "mage-os"]
stars: 25
forks: 6
openIssues: 0
closedIssues: 38
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2019-06-10T17:45:58Z"
lastCommitAt: "2026-10-10T10:05:30Z"
lastReleaseAt: "2022-05-30T08:59:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 68
maintainers: ["GrimLink", "allrude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7f5ec16af5ebb1a23f5fe5820a52f476afd94592b82aa7361770bf606bb458f/GrimLink/mage"
---

# Mage

**Mage** is a simple tool built on top of `bin/magento` to enhance your Magento 2 development experience.
It provides shortcuts and custom functions to save you time and effort.

> [!NOTE]
> Mage is a wrapper around your dev setup and [n98-magerun2], not a replacement for them.
> See the [FAQ](https://github.com/GrimLink/mage/blob/HEAD/docs/faq.md).

## Benefits of Using Mage

- **Easy installation of Magento:** create and install a Mage-OS, Magento Open Source or Adobe Commerce project in one command.
- **Works from anywhere in a project:** run mage from any nested folder, it finds the Magento root on its own.
- **Environment aware:** the same commands work on your machine, with [Laravel Valet], [Warden] and [DDEV].
- **One place to add things:** composer packages, git repositories, composer fragments from a json file, and generators for themes and modules.
- **Everything else goes to `bin/magento`:** any command mage does not know is passed on as is.

## Installation

Download the script:

```bash
curl -O https://raw.githubusercontent.com/GrimLink/mage/main/mage && chmod +x mage
```

Alternatively, use wget:

```bash
wget…
