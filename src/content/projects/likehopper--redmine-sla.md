---
repo: "likehopper/redmine_sla"
name: "redmine_sla"
description: "Manage SLAs in Redmine!"
readmeQualityOk: true
url: "https://github.com/likehopper/redmine_sla"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [82]
stars: 16
forks: 7
openIssues: 1
closedIssues: 20
watchers: 5
contributors: 4
recentReleases: 9
createdAt: "2023-06-04T20:33:45Z"
lastCommitAt: "2026-11-11T11:22:40Z"
lastReleaseAt: "2026-08-31T21:27:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 76
maintainers: ["likehopper", "joaoperfig"]
openGraphImageUrl: "https://opengraph.githubassets.com/49ec8c430a39ccf905c70f1774c4b276871099557069216a8e88dbb3506af086/likehopper/redmine_sla"
discussionCount: 6
---

# Redmine SLA

------------------------------------------------------------------------

## Overview

Current version: **3.4.2**. See the [changelog](https://github.com/likehopper/redmine_sla/blob/HEAD/CHANGELOG.md) for release details.

-   Website: https://github.com/likehopper/redmine_sla
-   Code repository: git@github.com:likehopper/redmine_sla.git
-   Redmine plugins directory:
    https://www.redmine.org/plugins/redmine_sla

------------------------------------------------------------------------

## Digest

**redmine_sla** provides advanced Service Level Agreement management for
Redmine.

It enables precise SLA computation based on:

-   Project trackers
-   Working calendars (HO / HNO)
-   SLA levels and priorities
-   Response and resolution terms
-   Database-native time-based procedures

SLA compliance is calculated directly at the database level using
PostgreSQL or MySQL/MariaDB stored procedures, ensuring:

-   Deterministic computation
-   Accurate working-hours handling
-   High performance on large datasets

------------------------------------------------------------------------

## Why redmine_sla?

Many SLA implementations rely exclusively on Ruby time…
