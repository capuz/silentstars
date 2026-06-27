---
repo: "JakeWharton/qbt-seed-type"
name: "qbt-seed-type"
description: "Maintains the 'Solo-seed' or 'Cross-seed' tag on each torrent"
url: "https://github.com/JakeWharton/qbt-seed-type"
language: "Python"
languages: ["Python", "Shell", "Dockerfile"]
languagePcts: [53, 25, 22]
stars: 7
forks: 2
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-02-24T02:44:19Z"
lastCommitAt: "2026-06-27T00:45:40Z"
lastReleaseAt: "2021-04-20T19:36:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 40
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a8d7e8ec2bff332e81e2fa8cdaf6367b93fb7202aca67fe3685269fce5d8555/JakeWharton/qbt-seed-type"
---

qBittorrent Seed Type
=====================

Maintains the "Solo-seed" or "Cross-seed" tag on each torrent. Cross-seeding is determined by a torrent
having a single file which appears in another.

This tool is provided as a Docker container which runs as a cron job.

 [hub]: https://hub.docker.com/r/jakewharton/qbt-seed-type/
 [layers]: https://microbadger.com/images/jakewharton/qbt-seed-type

Usage
-----

The container connects to qBittorrent over its API which is exposed the same way as its web interface.
You will need a valid username and password.
The default username is 'admin', and the default password is 'adminadmin' which reflect the qBittorrent defaults.

There are three general ways to connect:

 1. Use the qBittorrent container as the network for this container.
 2. Use the qBittorrent container hostname.
 3. Use an explicit hostname/IP that resolves to the container.

Option 2 and option 3 are really the same thing and are the recommended path.

For option 2, ensure your qBittorrent container has a hostname defined.
For `docker run` this means specifying `--hostname qbittorrent`.
For Docker Compose use the `hostname` key in the service definition:
```yaml
services:…
