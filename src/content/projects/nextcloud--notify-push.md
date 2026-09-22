---
repo: "nextcloud/notify_push"
name: "notify_push"
description: "Update notifications for nextcloud clients"
readmeQualityOk: true
url: "https://github.com/nextcloud/notify_push"
language: "Rust"
languages: ["Rust", "PHP"]
languagePcts: [51, 46]
topics: ["nextcloud"]
stars: 345
forks: 64
openIssues: 78
closedIssues: 210
watchers: 10
contributors: 281
recentReleases: 0
createdAt: "2020-11-13T22:24:38Z"
lastCommitAt: "2026-09-22T08:45:02Z"
lastReleaseAt: "2021-06-17T13:31:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 36
maintainers: ["icewind1991", "dependabot[bot]", "rizlas"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b731f8d7b07f11123e15a898fb8400c61cd6437df02daba57e3c1c235a47cfc/nextcloud/notify_push"
---

# Client Push

Update notifications for nextcloud clients

## About

This app attempts to solve the issue where Nextcloud clients have to periodically check the server if any files have
been changed. In order to keep sync snappy, clients wants to check for updates often, which increases the load on the
server.

With many clients all checking for updates a large portion of the server load can consist of just these update checks.

By providing a way for the server to send update notifications to the clients, the need for the clients to make these
checks can be greatly reduced.

Update notifications are provided on a "best effort" basis, updates might happen without a notification being sent and a
notification can be sent even if no update has actually happened. Clients are advised to still perform periodic checks
for updates on their own, although these can be run on a much lower frequency.

## Requirements

This app requires a redis server to be setup and for nextcloud to be configured to use the redis server.

## Quick setup

The app comes with a setup wizard that should guide you through the setup process for most setups.

- Install the "Client Push" (`notify_push`) app from the…
