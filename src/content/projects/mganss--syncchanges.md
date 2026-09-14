---
repo: "mganss/SyncChanges"
name: "SyncChanges"
description: "Synchronize/Replicate database changes using SQL Server Change Tracking"
readmeQualityOk: true
url: "https://github.com/mganss/SyncChanges"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["replication", "synchronization", "sql-server", "sqlserver", "mirroring", "database"]
stars: 136
forks: 53
openIssues: 6
closedIssues: 16
watchers: 15
contributors: 2
recentReleases: 0
createdAt: "2017-03-14T15:16:34Z"
lastCommitAt: "2026-09-14T09:13:56Z"
lastReleaseAt: "2024-04-05T17:13:57Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 90
undervaluedScore: 39
maintainers: ["mganss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0efc7fe82010fdb0f9ea7d58bb62927f419ee2c3fa69c3007e119279bf2ef618/mganss/SyncChanges"
---

SyncChanges
===========

A Windows service, console application, and library to synchronize/replicate database changes based on SQL Server [Change Tracking](https://msdn.microsoft.com/en-us/library/bb933875.aspx).

Motivation
----------

Microsoft SQL Server has a number of builtin synchronization features, such as Mirroring, Replication, and AlwaysOn Availability Groups. Unfortunately, all of these are only available from Standard Edition, and therefore not included in Web Edition or Express. Log shipping has the drawback that the secondary databases are not accessible during the restore. The solution provided by SyncChanges, on the other hand, builds upon Change Tracking, which is available in all editions, including Web and Express.

The use case SyncChanges was built for is a setup where you have a single database that all write operations go to (the source), and a number of other databases that are periodically kept in sync with the source (the destinations). All databases can be read from.

Usage
-----

SyncChanges can be used either as a console application that is typically invoked through a task scheduler every couple of minutes, as a Windows service, or as a library in…
