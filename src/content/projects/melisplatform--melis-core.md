---
repo: "melisplatform/melis-core"
name: "melis-core"
description: "MelisCore provides a full back-office platform, ready to use and accepting plenty of modules to run on top of it."
readmeQualityOk: true
url: "https://github.com/melisplatform/melis-core"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [66]
stars: 8
forks: 5
openIssues: 3
closedIssues: 0
watchers: 8
contributors: 18
recentReleases: 0
createdAt: "2016-10-05T10:08:17Z"
lastCommitAt: "2026-11-03T10:52:37Z"
lastReleaseAt: "2018-12-05T05:55:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 71
undervaluedScore: 62
maintainers: ["mariateresapomar", "sircxes", "sgris"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef4c5a3870009ab7490e8b593e5f4df98f0dbbae19aaef3d633cde7ad8862d9e/melisplatform/melis-core"
---

# melis-core

MelisCore provides a full back-office platform, ready to use and accepting plenty of modules to run on top of it.

## Getting Started

These instructions will get you a copy of the project up and running on your machine.

### Prerequisites

You will need to install melisplatform/melis-asset-manager in order to have this module running.  
This will automatically be done when using composer.

### Installing

Run the composer command:
```
composer require melisplatform/melis-core
```

In order to get the skeleton, run the following command and bring MelisCore, MelisCms and other modules:  
```
composer create-project melisplatform/melis-cms-skeleton .
```

**[Access Melis Platform's setup video and documentation here](https://www.melistechnology.com/melistechnology/resources/download-documentation/id/17)**  

### Database    

Database model is accessible on the MySQL Workbench file:  
/melis-core/install/sql/model  
Database will be installed through composer and its hooks.  
In case of problems, SQL files are located here:  
/melis-core/install/sql  

## Tools & Elements provided

* User Management Tool
* Login & Lost Password
* Main Dashboard
* Profile
* TinyMCE…
