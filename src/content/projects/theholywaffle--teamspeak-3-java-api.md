---
repo: "TheHolyWaffle/TeamSpeak-3-Java-API"
name: "TeamSpeak-3-Java-API"
description: "A Java wrapper of TeamSpeak's 3 server query API."
readmeQualityOk: true
url: "https://github.com/TheHolyWaffle/TeamSpeak-3-Java-API"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "teamspeak", "teamspeak3", "maven"]
stars: 318
forks: 106
openIssues: 22
closedIssues: 391
watchers: 17
contributors: 18
recentReleases: 0
createdAt: "2013-11-27T16:19:16Z"
lastCommitAt: "2026-11-07T13:55:16Z"
lastReleaseAt: "2023-03-12T18:32:45Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 40
maintainers: ["TheHolyWaffle", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc7e18ebf5f0c1f95ee20a43836911828b56927438cf196e681d94ff26274148/TheHolyWaffle/TeamSpeak-3-Java-API"
discussionCount: 0
---

TeamSpeak 3 Java API
====================

A Java library for the TeamSpeak 3 ServerQuery interface: server administration, notifications
and file transfers over raw TCP or SSH, and optionally administration over HTTP(S) Web Query.

- [Requirements and compatibility](#requirements-and-compatibility)
- [Installation](#installation)
- [Quick start](#quick-start)
- [Run an example](#run-an-example)
- [Using the API](#using-the-api): [domain APIs](#domain-apis), [futures](#asynchronous-api-and-futures),
  [events](#events), [deadlines](#deadlines-and-closing), [reconnects](#reconnect-guarantees),
  [file transfers](#file-transfers), [SSH trust](#ssh-host-key-trust), [logging](#logging),
  [flood rate](#flood-rate), [Web Query](#web-query), [upgrading from 1.x](#upgrading-from-1x)
- [Configuration reference](#configuration-reference)
- [Development](#development)
- [Getting help](#getting-help)

## Requirements and compatibility

- **Java 25 or newer** to build and run; no preview features.
- **A TeamSpeak 3 server** with ServerQuery enabled, and a query login (`serveradmin` or one created
  in the TeamSpeak client under *Tools → ServerQuery Login*).

| Server | Transport | Status |
|…
