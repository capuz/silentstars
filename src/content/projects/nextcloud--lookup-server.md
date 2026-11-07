---
repo: "nextcloud/lookup-server"
name: "lookup-server"
description: ":eyes: Lookup server to find remote users for federated sharing"
readmeQualityOk: true
url: "https://github.com/nextcloud/lookup-server"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
stars: 26
forks: 18
openIssues: 23
closedIssues: 7
watchers: 5
contributors: 251
recentReleases: 0
createdAt: "2016-06-30T15:04:12Z"
lastCommitAt: "2026-11-07T09:30:13Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 66
undervaluedScore: 41
maintainers: ["cristianscheid", "ArtificialOwl", "artonge"]
openGraphImageUrl: "https://opengraph.githubassets.com/217f431d843af817a54534065f0f64b7aefb6f8ef6c4a02ff33b5fb998941988/nextcloud/lookup-server"
---

# Nextcloud Lookup-Server

## What is Lookup-Server?

The Lookup-Server is a server component that can be run independently from an Nextcloud Server. This Lookup-Server can be used by Nextcloud to find remote users that can be used for federated sharing. This is useful for autocompletion in the sharing dialog to get the federation ID.  Users can optionally decide to publish their sharing ID to be found by others. Think about it as a kind of public sharing telephone book.

## Documentation

Please look into the [doc](https://github.com/nextcloud/lookup-server/blob/HEAD/doc) directory for more information.

## Duplicate `federationId` entries on `users` table

In some cases, due to race condition, duplicate entries may have been inserted into the `users` table, meaning more than one row with the same `federationId`. While this does not cause any critical issues, it can lead to unnecessary database growth over time.

Since this was reported, a `UNIQUE KEY` constraint has been added to `users.federationId` in `mysql.dmp`, preventing this from happening on new installations.

If your installation was set up before this change, two SQL scripts are available under `sql/` to help you fix…
