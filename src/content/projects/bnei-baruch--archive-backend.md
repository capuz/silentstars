---
repo: "Bnei-Baruch/archive-backend"
name: "archive-backend"
description: "Backend for new archive site"
url: "https://github.com/Bnei-Baruch/archive-backend"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [60, 36]
stars: 11
forks: 0
openIssues: 1
closedIssues: 0
watchers: 12
contributors: 15
recentReleases: 0
createdAt: "2017-01-06T03:32:09Z"
lastCommitAt: "2026-06-25T01:33:19Z"
lastReleaseAt: "2019-04-03T16:37:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 78
undervaluedScore: 20
maintainers: ["edoshor"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c7bad713504cbc37c25a7f956f9adfb0da75eb867abb38d296ad4d98357e335/Bnei-Baruch/archive-backend"
---

# Backend for new archive site

## Overview

Backend for new archive site including, ETLs from BB Metadata DB to Elasticsearch.

## Commands
The archive-backend is meant to be executed as command line.
Type `archive-backend <command> -h` to see how to use each command.

```Shell
archive-backend server
```

Execute the backend api server for the new archive site.

```Shell
archive-backend version
```

Print the version of archive-backend

## Configuration

The default config file is `config.toml` in your current work directory.

See `config.sample.toml` for a sample config file.

## Release and Deployment

Once development is done, all tests are green, we want to go live.
All we have to do is simply execute `misc/release.sh`.

To add a pre-release tag, add the relevant environment variable. For example,

```Shell
PRE_RELEASE=rc.1 misc/release.sh
```

## MDB models

When MDB schema is changed we need to update the `mdb` package. Run this script:

```Shell
misc/update_mdb_models.sh
```

## Elasticsearch related stuff

(See the next section below for the instructions on installing Elasticsearch for Windows)…
