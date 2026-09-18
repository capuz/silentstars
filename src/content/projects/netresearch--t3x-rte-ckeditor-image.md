---
repo: "netresearch/t3x-rte_ckeditor_image"
name: "t3x-rte_ckeditor_image"
description: "Image support in CKEditor for the TYPO3 ecosystem - by Netresearch"
readmeQualityOk: true
url: "https://github.com/netresearch/t3x-rte_ckeditor_image"
language: "PHP"
languages: ["PHP"]
languagePcts: [59]
topics: ["ckeditor", "typo3", "magic-images", "ckeditor-plugin", "typo3cms-extension", "typo3-extension", "rte-ckeditor"]
stars: 61
forks: 67
openIssues: 2
closedIssues: 283
watchers: 8
contributors: 48
recentReleases: 0
createdAt: "2017-05-12T13:29:43Z"
lastCommitAt: "2026-09-18T13:46:44Z"
lastReleaseAt: "2019-10-26T18:05:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["CybotTM", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29308f8964a0ea81a225ec1421ac2ad0379fde0d7736e74209ffa0554846a83a/netresearch/t3x-rte_ckeditor_image"
discussionCount: 15
---

# RTE CKEditor Image — Image Support for CKEditor 5 in TYPO3

> A TYPO3 extension that restores and modernises rich-text image handling for **TYPO3 v13.4 LTS** and **v14.3 LTS**, built on **CKEditor 5** with full **File Abstraction Layer (FAL)** integration, image processing, accessibility metadata, and content security in mind.

<kbd></kbd>

---

## Table of Contents

- [Why this extension exists](#why-this-extension-exists)
- [Features at a glance](#features-at-a-glance)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage recipes](#usage-recipes)
- [Documentation](#documentation)
- [Security](#security)
- [Development](#development)
- [Verifying releases](#verifying-releases)
- [Contributing](#contributing)
- [License & credits](#license--credits)

---

## Why this extension exists

TYPO3 intentionally [removed rich-text image handling from the core in TYPO3 v10](https://docs.typo3.org/p/netresearch/rte-ckeditor-image/main/en-us/Introduction/CoreRemoval.html). Editors lost the ability to insert FAL-backed images into bodytext via the rich-text editor — the recommended path became dedicated image content elements, which is…
