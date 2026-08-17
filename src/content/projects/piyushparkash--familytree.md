---
repo: "piyushparkash/FamilyTree"
name: "FamilyTree"
description: "Vanshavali:- FamilyTree is simple PHP Application targetting the collection of family data which can viewed with beautiful visualisation. You can add/update data, play with the visualisation, show you children their roots, add new members as they enter your family."
readmeQualityOk: true
url: "https://github.com/piyushparkash/FamilyTree"
homepage: "http://familytree.ratupar.in"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [59, 36]
topics: ["family-tree", "visualisation", "family", "php", "family-data", "vanshavali"]
stars: 83
forks: 41
openIssues: 11
closedIssues: 39
watchers: 17
contributors: 5
recentReleases: 0
createdAt: "2012-08-10T12:15:54Z"
lastCommitAt: "2026-08-17T04:19:26Z"
lastReleaseAt: "2017-02-01T17:46:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 35
maintainers: ["piyushparkash", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/235bc7269fd5d4d612ba9c85ed0270bfaea2a014973c72b4a88a3346d11527b1/piyushparkash/FamilyTree"
fundingLinks: ["GITHUB:https://github.com/piyushparkash"]
---

# FamilyTree (Vanshavali)

A PHP web app for building and visualizing family trees — add and update family members, explore the tree interactively, and let relatives trace their roots.

**Demo:** [familytree.ratupar.in](http://familytree.ratupar.in)

## Features

- Add/update family member records
- Interactive family tree visualization
- Relation lookup between any two members
- Optional WordPress OAuth login (via [WordPress OAuth Server](https://wordpress.org/plugins/oauth2-provider/) + [REST API](https://wordpress.org/plugins/rest-api/) plugins) alongside standard login

## Installation

```bash
git clone https://github.com/piyushparkash/FamilyTree.git
cd FamilyTree
composer install
```

1. Point your web server (Apache/Nginx) at the cloned directory.
2. Grant write permissions to the directories that need them:
   ```bash
   chmod -R 744 directory_name/
   ```
3. Open the app in your browser — first run walks you through database setup. Have these ready:
   - Host (e.g. `localhost`)
   - Username / password
   - Database name
4. (Optional) To enable WordPress login, install the [OAuth Server plugin](https://wordpress.org/plugins/oauth2-provider/) on a WordPress site and…
