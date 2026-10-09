---
repo: "getnamingo/tide"
name: "tide"
description: "Tide client area theme for FOSSBilling"
readmeQualityOk: true
url: "https://github.com/getnamingo/tide"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [74]
stars: 42
forks: 25
openIssues: 1
closedIssues: 79
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2023-06-27T21:50:07Z"
lastCommitAt: "2026-10-09T18:56:42Z"
lastReleaseAt: "2024-01-10T09:29:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 60
maintainers: ["getpinga", "terbora-core", "admdly"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b4a29e9fbe9cb9c2664c7d9eaaddce836f3a22c9b80cbc88a43941e1d9546ef/getnamingo/tide"
fundingLinks: ["CUSTOM:https://donate.stripe.com/7sI2aI4jV3Offn28ww", "CUSTOM:https://www.blockchain.com/btc/address/bc1q9jhxjlnzv0x4wzxfp8xzc6w289ewggtds54uqa", "CUSTOM:https://etherscan.io/address/0x330c1b148368EE4B8756B176f1766d52132f0Ea8"]
discussionCount: 3
---

# Tide Theme for FOSSBilling

## Overview

Tide is a client area theme for FOSSBilling. It's designed to enhance your user interface with a clean, modern aesthetic. This guide provides steps on how to install, upgrade, secure, and customize the Tide theme.

## Compatibility

- Tide 1.2.11 → FOSSBilling 0.8.8

We strongly recommend upgrading to the latest version of FOSSBilling.

## Installation

1. Get the Tide theme using one of the following methods:

   **a. Download from GitHub**

   - Download the ZIP archive and extract it.
   - Open the extracted directory, for example `tide-1.2.11`.
   - Rename the theme directory inside it to `tide`.

   **b. Clone with Git**

   ```bash
   git clone --branch v1.2.11 --depth 1 https://github.com/getnamingo/tide.git
   ```

   This creates a directory named `tide`.

2. Move the `tide` directory into your FOSSBilling themes directory:

   ```bash
   mv tide /var/www/themes/
   ```

   Replace `/var/www` with your FOSSBilling installation path if different.

3. Set the correct owner and permissions:

   ```bash
   chown -Rf www-data:www-data /var/www/themes/tide
   chmod -Rf 750 /var/www/themes/tide
   ```

4. In the FOSSBilling admin panel,…
