---
repo: "debiki/talkyard-prod-one"
name: "talkyard-prod-one"
description: "Talkyard production installation on one single server."
readmeQualityOk: true
url: "https://github.com/debiki/talkyard-prod-one"
homepage: "https://www.talkyard.io/"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
topics: ["docker-compose", "talkyard"]
stars: 270
forks: 43
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 3
recentReleases: 0
createdAt: "2016-04-30T01:28:48Z"
lastCommitAt: "2026-07-22T05:01:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 71
undervaluedScore: 26
maintainers: ["kajmagnus"]
openGraphImageUrl: "https://opengraph.githubassets.com/58316ca6ae3bed37098d75e4b85f8942bee4f90b06e744489cb3f20852dc1331/debiki/talkyard-prod-one"
---

Installing Talkyard
================

Here you'll learn how to install Talkyard v1 on a single server, for production use:
Debian 12 or 13 with at least 2 GB RAM, or Ubuntu 24 or 26.

<small>(Old Talkyard v0 docs are <a href="https://github.com/debiki/talkyard-prod-one/tree/ty-prod-one-v0">
  here</a>.)</small>

Docker-based installation.
Automated upgrades and backups.
Automatic HTTPS certs.
Multi-site support.

You should be familiar with Linux, Bash, Git and Docker.
Or use our hosting, see https://www.talkyard.io.

Ask questions and report problems in **[the forum](http://www.talkyard.io/forum/latest/support)**.
(We don't use GitHub Issues or Discussions.)

**Overview:** You'll rent a virtual private server (VPS), download
and install Talkyard, sign up for a send-emails service, and configure email settings.
Then optionally configure OpenAuth login for Google, Facebook, Twitter, GitHub.
And off-site backups.

Dockerfiles, build scripts and source code are in another repo: https://github.com/debiki/talkyard.
See `./docker-compose.yml` (in this repo) for details and links.

Directories
----------------

You'll install Talkyard in `/opt/talkyard-v1/`.

Talkyard uses these…
