---
repo: "whikloj/BagItTools"
name: "BagItTools"
description: "A PHP BagIt library"
readmeQualityOk: true
url: "https://github.com/whikloj/BagItTools"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 12
forks: 9
openIssues: 4
closedIssues: 26
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2019-11-18T04:38:03Z"
lastCommitAt: "2026-10-21T21:15:31Z"
lastReleaseAt: "2021-07-07T13:47:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 71
undervaluedScore: 47
maintainers: ["whikloj", "dependabot[bot]", "zozlak"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e582ab3cd2aaca49757abf8f7799c9201f6a9c0792dcb2326dc60c1a670bc69/whikloj/BagItTools"
---

# BagItTools

## Introduction

BagItTools is a PHP implementation of the BagIt v1.0 specification ([RFC-8493](https://tools.ietf.org/html/rfc8493)).

Features:

* Create new bag
* Load existing directory as a bag.
* Load archive file (*.zip, *.tar, *.tar.gz, *.tgz, *.tar.bz2)
* Validate a bag
* Add/Remove files
* Add/Remove fetch urls
* Add/Remove hash algorithms (md5, sha1, sha224, sha256, sha384, sha512, sha3-224, sha3-256, sha3-384, sha3-512)
* Generate payload for all data/ files for all hash algorithms (depending on PHP support)
* Generate tag manifests for all root level files and any additional tag directories/files.
* Add/Remove tags from bag-info.txt files, maintains ordering of tags loaded.
* Generates/updates payload-oxum and bagging-date.
* Passes all bagit-conformance-suite tests.
* Create an archive (zip, tar, tar.gz, tgz, tar.bz2)
* In-place upgrade of bag from v0.97 to v1.0

## [Change Log](https://github.com/whikloj/BagItTools/blob/HEAD/CHANGELOG.md)

## Installation

**Composer**

```bash
composer require "whikloj/bagittools"
```

**Clone from Github**

```bash
git clone https://github.com/whikloj/BagItTools
cd BagItTools
composer install --no-dev
```

##…
