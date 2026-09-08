---
repo: "confluentinc/common"
name: "common"
description: "Common utilities library containing metrics, config and utils"
readmeQualityOk: true
url: "https://github.com/confluentinc/common"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 17
forks: 243
openIssues: 27
closedIssues: 26
watchers: 179
contributors: 756
recentReleases: 0
createdAt: "2014-12-19T04:38:00Z"
lastCommitAt: "2026-09-08T08:16:20Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 45
maintainers: ["semaphore-agent-production[bot]", "janjwerner-confluent", "nlou9"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/9439498?s=400&v=4"
---

Confluent Commons
=================

Contains 3 libraries: [metrics](https://github.com/confluentinc/common/blob/HEAD/metrics), [config](https://github.com/confluentinc/common/blob/HEAD/config), [utils](https://github.com/confluentinc/common/blob/HEAD/utils).

# Development

## Overview

Typically you will run standard maven commands such as `mvn install` from the top-level directory (i.e. the directory
that contains this `README` file).  The sections below explain how to build specific sub-projects independently.

## Metrics

To build the `metrics` sub-project independently, run this from the parent directory:

    $ mvn -pl :common-metrics package

## Config

To build the `config` sub-project independently, run this from the parent directory:

    $ mvn -pl :common-config package

## Utils

To build the `utils` sub-project independently, run this from the parent directory:

    $ mvn -pl :common-utils package

## License
